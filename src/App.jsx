import { Suspense, useState } from "react";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Pages/Footer";

function App({ children }) {
  const [responsive, setResponsive] = useState(true);

  return (
    <div className={`app ${responsive ? "" : "overflow-hidden"}`}>
      <Navbar responsive={responsive} setResponsive={setResponsive} />
      <Suspense fallback={<div className='loading'>Loading...</div>}>
        <div className='app-children'>{children}</div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
