// lib
import React from "react";
import Link from "next/link";

const AllNotes = () => {
    const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))

  return (
    <div>
      <h1>Notes</h1>

      <div>
      {notes.map(note => (
        
        <>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
          <br/>
        </>
      ))}
      </div>
    </div>
  )
};

export default AllNotes;