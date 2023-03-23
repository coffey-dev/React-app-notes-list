import React from 'react';
import Note from './Note';

const list = [
    { title: "hola", message: "Mundo", id: "123"},
    {title: "Segundo", message: "Mundo", id:"1234"}
];

function NotesList() {
  return (
    <div>
{
    list.map(note => <Note key={note.id} title={note.title} message={note.message} />)
}
    </div>
  )
}

export default NotesList