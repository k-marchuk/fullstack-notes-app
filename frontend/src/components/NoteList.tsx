// import useNote from '../hooks/useNotes';
import type { Note } from '../types/Note';
import NoteItem from './NoteItem';

type Props = {
  notes: Note[];
  onDelete: (id: string) => void;
  onSelected: (note: Note) => void;
};

const NoteList: React.FC<Props> = ({ notes, onDelete, onSelected }) => {
  return (
    <div className="mx-auto columns-2 sm:columns-3 lg:columns-4 2xl:columns-5 gap-4 px-2 mt-8">
      {notes.map((note: Note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onSelected={onSelected}
        />
      ))}
    </div>
  );
};

export default NoteList;
