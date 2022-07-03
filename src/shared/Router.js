import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Todo from "../pages/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
