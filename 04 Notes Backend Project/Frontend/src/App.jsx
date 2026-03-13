import React, { useState } from 'react';
import NoteInput from '../components/NoteInput';
import NoteList from '../components/NoteList';
import api from './api/Axios.jsx';

const App = () => {
  const [notes, setNotes] = useState([]);

  // Create note  ->  POST http://localhost:3000/api/create
  const addNote = async (note) => {
    try {
      const res = await api.post('/create', note);
      // Assume backend returns created note (with id)
      setNotes((prev) => [...prev, res.data]);
    } catch (err) {
      console.error('Error creating note', err);
    }
  };

  // Delete note  ->  DELETE http://localhost:3000/api/delete/:id
  const deleteNote = async (id) => {
    try {
      await api.delete(`/delete/${id}`);
      setNotes((prev) => prev.filter((note) => note.id !== id && note._id !== id));
    } catch (err) {
      console.error('Error deleting note', err);
    }
  };

  // Update note  ->  PUT http://localhost:3000/api/update/:id
  // (You can call this from an edit form later)
  const updateNote = async (id, data) => {
    try {
      const res = await api.put(`/update/${id}`, data);
      const updated = res.data;
      setNotes((prev) =>
        prev.map((note) =>
          (note.id === id || note._id === id) ? updated : note
        )
      );
    } catch (err) {
      console.error('Error updating note', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">React Note-Taking App</h1>
      <NoteInput addNote={addNote} />

      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;