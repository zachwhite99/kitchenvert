import React, { useState } from "react";

const Pantry = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [newIngredient, setNewIngredient] = useState("");

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Pantry</h1>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          className="border px-2 py-1 rounded w-64"
          placeholder="Add an ingredient"
        />
        <button
          onClick={addIngredient}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="list-disc list-inside">
        {ingredients.map((item, idx) => (
          <li key={idx} className="text-gray-800">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pantry;
