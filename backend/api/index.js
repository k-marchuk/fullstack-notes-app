import express from 'express';
import cors from 'cors';
import * as noteService from '../services/notes.service.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/notes', (req, res) => {
  const { date } = req.query;
  if (date) {
    res.send(noteService.getAllByDate(date));
  } else {
    res.send(noteService.getAll());
  }
});

app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.sendStatus(422);
  }

  const note = noteService.create(title, content);

  res.statusCode = 201;

  res.send(note);
});

app.put('/notes/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const note = noteService.getById(id);
  if (!note) {
    res.sendStatus(404);
    return;
  }

  if (typeof title !== 'string' || typeof content !== 'string') {
    res.sendStatus(422);
    return;
  }
  const updatedNote = noteService.update({ id, title, content });

  res.send(updatedNote);
});

app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  if (!noteService.getById(id)) {
    res.sendStatus(404);

    return;
  }

  const newNotes = noteService.remove(id);

  res.sendStatus(204);
});

app.use((req, res, next) => {
  return res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
