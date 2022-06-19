import React, { Suspense } from "react";
import "./styles/App.css";
import Header from "./components/header";
import Loader from "./components/main/Loader";
const Main = React.lazy(() => import("./components/main"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
