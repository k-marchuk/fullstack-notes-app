import { useEffect, useState } from 'react';
import { type ErrorsData } from '../types/Error';
import type { Note } from '../types/Note';
import { validateForm } from '../utils/validateForm';

const useForm = (
  selectedNote: Note | null,
  setSelectedNote: (note: Note | null) => void,
  addNote: (title: string, content: string) => void,
  updateNote: (note: { title: string; content: string; id: string }) => void
) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorsData>({ title: '', content: '' });

  const handleNoteAdd = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = validateForm(title, content, setErrors);

    if (!isValid) {
      return;
    }

    addNote(title, content);
    setErrors({});
    setTitle('');
    setContent('');
  };

  const handleNoteUpdate = (
    event: React.FormEvent,
    title: string,
    content: string,
    id: string
  ) => {
    event.preventDefault();

    const isValid = validateForm(title, content, setErrors);

    if (!isValid) {
      return;
    }

    updateNote({ title, content, id });
    setErrors({});
    setTitle('');
    setContent('');
    setSelectedNote(null);
  };

  const handleFormExpand = () => {
    setIsExpanded(true);
  };

  const handleFormReset = () => {
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }

    setSelectedNote(null);
    setTitle('');
    setContent('');
  };

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    }
  }, [selectedNote]);

  return {
    content,
    setContent,
    title,
    setTitle,
    isExpanded,
    setIsExpanded,
    errors,
    setErrors,
    handleFormReset,
    handleFormExpand,
    handleNoteUpdate,
    handleNoteAdd,
  } as const;
};

export default useForm;
