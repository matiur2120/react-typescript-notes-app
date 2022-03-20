import React from "react";
import { Note } from "../models/Note.model";
import NoteItem from "./NoteItem";

interface NoteListProps {
  notes: Note[];
  handleDelete: (id: number) => void;
}

const NotesList: React.FC<NoteListProps> = ({ notes, handleDelete }) => {
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => (
      <NoteItem key={note.id} note={note} handleDelete={handleDelete} />
    ));
  };

  return (
    <div>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </div>
  );
};

export default NotesList;
