import { Suspense, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Pages/Footer";

function App({ children }) {
  return (
    <div className='app'>
      <Navbar />
      <Suspense fallback={<div className='loading'>Loading...</div>}>
        <div className='app-children'>{children}</div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
