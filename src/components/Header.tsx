import React from "react";
import { Navbar, Container } from "react-bootstrap";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
