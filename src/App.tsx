import "./App.css";
import { Route, Routes } from "react-router";
import { Header } from "./Header";
import { BestSellers } from "./BestSellers";
function App() {
  return (
    <div className={"appContainer"}>
      <Header></Header>
       <Routes>
        <Route path="/" element={<BestSellers />} />
      </Routes>
      <BestSellers></BestSellers>
    </div>
  );
}

export default App;
