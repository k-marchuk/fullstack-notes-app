import axios from 'axios';
import type { Note } from '../types/Note';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export async function getAllNotes(): Promise<Note[]> {
  return axios.get('/notes').then((res) => res.data);
}

export async function getFilteredNotes(date: string): Promise<Note[]> {
  return axios
    .get('/notes', {
      params: { date },
    })
    .then((res) => res.data);
}

export async function addNote(title: string, content: string): Promise<Note> {
  const response = await axios.post('/notes', { title, content });

  return response.data;
}

export async function updateNote({
  title,
  content,
  id,
}: Omit<Note, 'createdAt'>): Promise<Note> {
  const response = await axios.put(`/notes/${id}`, { title, content });

  return response.data;
}

export async function deleteNote(noteId: string): Promise<string> {
  const response = await axios.delete(`/notes/${noteId}`);

  return response.statusText;
}
