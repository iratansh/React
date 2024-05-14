import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { ic_person } from "react-icons-kit/md/ic_person";
import { MdDescription } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

export default function NavigationBar() {
  return (
    <>
      <Navbar
        fixed="bottom"
        style={{
          backgroundColor: "gray",
          opacity: 0.75,
          maxHeight: "70px",
          maxWidth: "300px",
          borderRadius: "20px",
          margin: "auto",
          marginBottom: "30px",
        }}
      >
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            verticalAlign: "center",
            marginBottom: "40px",
          }}
        >
          <Nav className="navbar">
            <Nav.Link href="#home">
              <Icon icon={home} size={24} />
            </Nav.Link>
            <Nav.Link href="#about">
              <Icon icon={ic_person} size={24} />
            </Nav.Link>
            <Nav.Link href="#competitions">
              <FaTrophy size={24} />
            </Nav.Link>{" "}
            <Nav.Link href="#portfolio">
              <MdDescription size={24} />
            </Nav.Link>{" "}
            <Nav.Link href="#contact">
              <FaEnvelope size={24} />
            </Nav.Link>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
