import "./App.css";
import GenresMovieList from "./component/GenresMovieList";
import Header from "./component/Header";
import ProductionHouse from "./component/ProductionHouse";
import Slider from "./component/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenresMovieList />
    </>
  );
}

export default App;
