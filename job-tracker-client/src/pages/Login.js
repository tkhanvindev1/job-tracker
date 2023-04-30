import React from "react";

import { useState } from "react";
export const Login = () => {
  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  const updateState = (e) => {
    setLoginObject({
      ...loginObject,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <section class="w-full h-screen flex justify-center flex-col items-center ">
        <h1 class="text-center text-white">Login to seek profession</h1>
        <form class="flex flex-col w-1/3   shadow-lg shadow-indigo-500/40 text-white w-96 mx-6 p-5">
          <label>Email address</label>
          <input
            type="text"
            placeholder="Email"
            class="w-full mt-1 "
            value={loginObject.email}
            name="email"
            onChange={updateState}
          ></input>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            class="w-full mt-1"
            name="password"
            value={loginObject.password}
            onChange={updateState}
          ></input>
          <button class="rounded-none bg-blue-500 w-full mt-6 px-3 py-2">
            Login
          </button>
          {/* <input
            type="checkbox"
            class="appearance-none checked:bg-blue-500 ..."
          />
          <label>I agree to terms and conditions</label> */}
        </form>
      </section>
    </div>
  );
};
