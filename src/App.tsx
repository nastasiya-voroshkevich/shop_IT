import "./App.css";
import { Header } from "./Header";
import { BestSellers } from "./BestSellers";
function App() {
  return (
    <div className={"appContainer"}>
      <Header></Header>
      
      <BestSellers></BestSellers>
    </div>
  );
}

export default App;
