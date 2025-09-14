import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import IngredientModal from "./components/IngredientModal";

function App() {

  const ingredients = [

    { "name": "paneer", "quantity": "100 Gm", },
    { "name": "onions", "quantity": "02 Pc" },
    { "name": "tomatoes", "quantity": "02 Pc" },
    { "name": "capsicum", "quantity": "01 Pc" },
    { "name": "masala", "quantity": "01 Ts" }

  ]

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ingredients/:id" element={<IngredientModal ingredients={ingredients} />} />
      </Routes>
    </div>
  );
}

export default App;
