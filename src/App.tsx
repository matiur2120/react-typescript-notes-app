import { useState } from "react";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import AddNote from "./components/AddNote";
import { Note } from "./models/Note.model";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: Date.now(),
      title: "New note for demo",
      text: "Some text goes here",
      color: "#e5e5e5",
      date: new Date().toString(),
    },
  ]);
  console.log(notes);
  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
    console.log(id);
  };

  return (
    <>
      <Header title="React Typescript Notes  App" />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} handleDelete={handleDelete} />
          </Col>
        </Row>
        <Row className="mt-5">
          <h2>Add Note</h2>
          <AddNote notes={notes} setNotes={setNotes} />
        </Row>
      </Container>
    </>
  );
}

export default App;
