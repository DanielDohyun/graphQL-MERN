import React from "react";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddCliModal";
import AddProjectModal from "../components/AddProModal";

export default function Home() {
  return (
    <>
      <div className="d-flex mb-4 gap-3">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
