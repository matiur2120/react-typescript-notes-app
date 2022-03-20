import React from "react";
import { Note } from "../models/Note.model";
import { Card, Button } from "react-bootstrap";
interface NoteItemProps {
  note: Note;
  handleDelete: (id: number) => void;
}
const NoteItem: React.FC<NoteItemProps> = ({ note, handleDelete }) => {
  return (
    <Card className="mt-5" style={{ backgroundColor: `${note.color}` }}>
      <Card.Header>{note.title}</Card.Header>
      <Card.Body>
        <Card.Title>{note.text}</Card.Title>
        <Card.Subtitle>{note.date}</Card.Subtitle>
        <Button
          className="mt-3"
          variant="danger"
          onClick={() => handleDelete(note.id)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NoteItem;
