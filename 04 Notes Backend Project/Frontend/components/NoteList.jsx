import React from 'react';

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) return <p className="text-gray-500">No notes yet. Add one!</p>;

  return (
    <div className="grid gap-4 w-full max-w-md">
      {notes.map(note => (
        <div key={note.id} className="bg-white p-4 rounded shadow relative">
          {note.title && <h3 className="font-bold mb-2">{note.title}</h3>}
          <p>{note.content}</p>
          <button
            onClick={() => deleteNote(note.id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;