import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-600">
            Kitchenvert 🍳
          </Link>
          <nav className="space-x-4">
            <Link to="/recipes" className="text-blue-600 hover:underline">
              Recipes
            </Link>
            <Link to="/pantry" className="text-blue-600 hover:underline">
              Pantry
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
