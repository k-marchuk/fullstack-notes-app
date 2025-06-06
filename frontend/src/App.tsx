import Header from './components/Header';
import Footer from './components/Footer';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { useEffect, useState } from 'react';
import type { Note } from './types/Note';
import * as api from './api/api';

function App() {
  const [query, setQuery] = useState<string>('');
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [selectedDay, setSelectedDay] = useState('');
  const [isDateFilterActive, setIsDateFilterActive] = useState(false);

  const loadNotes = () => api.getAllNotes().then(setNotes);
  const loadFilteredNotes = () =>
    api.getFilteredNotes(selectedDay).then(setNotes);

  useEffect(() => {
    if (isDateFilterActive && selectedDay) {
      loadFilteredNotes();
    } else {
      loadNotes();
    }
  }, [selectedDay]);

  const addNote = async (title: string, content: string) => {
    const newNote: Note = await api.addNote(title, content);

    setNotes([...notes, newNote]);
  };

  const deleteNote = async (noteId: string) => {
    await api.deleteNote(noteId);

    loadNotes();
  };

  const updateNote = async (noteData: Omit<Note, 'createdAt'>) => {
    await api.updateNote(noteData);
    loadNotes();
    setSelectedNote(null);
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
  };

  const getFilteredNotesByTitle = (notes: Note[]) => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase().trim())
    );
  };

  const preparedNotes = getFilteredNotesByTitle(notes);

  return (
    <>
      <Header
        selectedDay={selectedDay}
        onDateChange={setSelectedDay}
        query={query}
        setQuery={setQuery}
        onFilterChange={setIsDateFilterActive}
      />
      <main className="flex-auto mx-auto">
        <NoteForm
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          onAdd={addNote}
          onUpdate={updateNote}
        />
        <NoteList
          notes={preparedNotes}
          onDelete={deleteNote}
          onSelected={handleNoteClick}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
