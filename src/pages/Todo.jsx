import React from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const param = useParams();
  console.log(param);
  return <div>Todo</div>;
};

export default Todo;
