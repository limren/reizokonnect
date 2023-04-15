import { useState } from "react";
import { Navbar } from "./Components/Navbar";

function App({ children }) {
  return (
    <div className='app'>
      <Navbar />
      <div className='app-children'>{children}</div>
    </div>
  );
}

export default App;
