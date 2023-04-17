import { Suspense, useState } from "react";
import { Navbar } from "./Components/Navbar";

function App({ children }) {
  return (
    <div className='app'>
      <Navbar />
      <Suspense fallback={<div className='loading'>Loading...</div>}>
        <div className='app-children'>{children}</div>
      </Suspense>
    </div>
  );
}

export default App;
