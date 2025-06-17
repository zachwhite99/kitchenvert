import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./pages/Recipes";
import Pantry from "./pages/Pantry";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/pantry" element={<Pantry />} />
        <Route
          path="*"
          element={
            <div className="text-center text-xl">Welcome to Kitchenvert 🍳</div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
