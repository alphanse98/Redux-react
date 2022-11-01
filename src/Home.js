import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useraction } from "./slice";


export const Home = () => {
  let state = useSelector((state) => state);

  let dispatch = useDispatch();

  let userHandle = (e) => {
    e.preventDefault();
    let Name = e.target.name.value;
    let age = e.target.age.value;
    dispatch(useraction([{ name: Name, age: age }, ...state.user.user]));
    // console.log(e.target.name.value);
    // console.log(e.target.age.value);
  };

  let remove = (param) => {
    dispatch(useraction(state.user.user.filter((ele) => ele != param)));
  };

  return (
    <div>
      <form onSubmit={userHandle}>
        <input type="text" placeholder="Name" name="name"></input>
        <input type="text" placeholder="age" name="age"></input>
        <button>submit</button>
      </form>

      {state.user.user.map((ele, index) => (
        <div key={index}>
          <h3>{ele.name}</h3>
          <h3>{ele.age}</h3>
          {/* <h4>hi</h4> */}
          <button onClick={() => remove(ele)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
