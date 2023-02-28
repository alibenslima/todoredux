import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD, FILT } from "../../redux/Action";
import "./AddTask.css";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newskill = { id: Math.random(), skill: text, istermine: true };
    text.trim() === ""
      ? alert("Svp enter the skill ...")
      : dispatch(ADD(newskill));
    setText("");
  };
  return (
    <div className="part1">
      <h1>TODO REDUX</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button class="button1 button11">Add</button>
      </form>
      <button class="glow-on-hover" onClick={() => dispatch(FILT())}>
        Filter
      </button>
    </div>
  );
};

export default AddTask;
