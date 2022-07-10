import './App.css';
import PokemonIndex from './components/Pokemon/PokemonIndex';
import PokemonForm from "./components/Pokemon/PokemonForm";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/pokemons" element={<PokemonIndex />} />
          <Route path="/pokemons/create" element={<PokemonForm />} />
          <Route path="/pokemons/:id/edit" element={<PokemonForm />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
