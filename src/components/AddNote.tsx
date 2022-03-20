import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Note } from "../models/Note.model";

interface AddNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const AddNote: React.FC<AddNoteProps> = ({ notes, setNotes }) => {
  const [error, setError] = useState<string>("");
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      setError("All filed are mandatory");
    } else {
      setError("");
      setNotes([
        ...notes,
        {
          id: Date.now(),
          title: (titleRef.current as HTMLInputElement).value,
          text: (textRef.current as HTMLTextAreaElement).value,
          color: (colorRef.current as HTMLInputElement).value,
          date: new Date().toString(),
        },
      ]);
    }
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
    (colorRef.current as HTMLInputElement).value = "#e5e5e5";
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Note title" ref={titleRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Note Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your note text"
          ref={textRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicColor">
        <Form.Label>Chose Background</Form.Label>
        <Form.Control type="color" defaultValue="#e5e5e5" ref={colorRef} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Note
      </Button>
    </Form>
  );
};

export default AddNote;
