import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

let notes = [];

export const getAll = () => {
  return notes;
};

export const getAllByDate = (date) => {
  return notes.filter(
    (note) => dayjs(note.createdAt).format('YYYY-MM-DD') === date
  );
};

export const getById = (id) => {
  return notes.find((note) => note.id === id);
};

export const create = (title, content) => {
  const note = {
    title,
    content,
    id: uuidv4(),
    createdAt: new Date(),
  };

  notes.push(note);

  return note;
};

export const update = ({ id, title, content }) => {
  const note = getById(id);

  Object.assign(note, { title, content, updatedAt: new Date() });

  return note;
};

export const remove = (id) => {
  notes = notes.filter((note) => note.id !== id);
};
