import React, { Suspense } from "react";
import "./styles/App.css";
import Header from "./components/header";
import Loader from "./components/main/Loader";
import fetchData from "./services/fetchData";
import Main from "./components/main";
// const Main = React.lazy(() => import("./components/main"));

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Loader />}>
        <Main data={fetchData()} />
      </Suspense>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
