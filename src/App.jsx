import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import Button from "./components/Button"
import Footer from "./components/Footer"

import React, { useState } from "react";

function App() {
  return (
    <>
      <header className="page-header">
        <Nav />
      </header>
      <main className="main-content">
        <Hero />
        <Cards />
        <Button>{onclick}</Button>
      </main>
      <Footer />
    </>
  )
}

export default App
