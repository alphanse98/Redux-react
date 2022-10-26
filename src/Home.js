import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useraction } from "./slice";

export const Home = () => {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  console.log(state.user.user);

  let add = (data) => {
    dispatch(useraction([{ name: 2, age: 24 }, ...state.user.user]));
  };

  let remove = (param) => {
    dispatch(useraction(state.user.user.filter((ele) => ele != param)));
  };

  return (
    <div>
      <button onClick={() => add()}>add</button>

      {state.user.user.map((ele, index) => (
        <div key={index}>
          <h1>{ele.name}</h1>
          <h1>{ele.age}</h1>
          <button onClick={() => remove(ele)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
