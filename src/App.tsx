import "./App.css";
import { Route, Routes } from "react-router";
import { Header } from "./Header";
import { BestSellers } from "./BestSellers";
import { Product } from "./Product";



function App() {
  return (
    <div className={"appContainer"}>
      <Header></Header>
       <Routes>
          <Route path="/" element={<BestSellers />} />
         <Route path="/product/:productId" element={<Product />} />
      </Routes>
  
    </div>
  );
}

export default App;
