import React from "react";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddCliModal";

export default function Home() {
  return (
    <>
      <div className="d-flex mb-4 gap-3">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}
