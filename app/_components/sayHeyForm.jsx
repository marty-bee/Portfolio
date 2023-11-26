"use client";

// import block
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

// component for sayHey Form
export default function SayHeyForm() {
  const [state, handleSubmit] = useForm("xwkddpgk");
  // if form is submitted show this message
  if (state.succeeded) {
    return <p>Thanks for the message!</p>;
  }
  // else show the form
  return (
    <>
    {/* border around entire form then dividing lines */}
    <form onSubmit={handleSubmit} className="w-full sm:w-4/5 m-auto flex flex-col justify-center items-center font-sans pl-2 pr-2 border-black border-2 rounded-3xl dark:border-white">
      <div className="mt-1 w-full flex p-4">
        <label htmlFor="email" className="invisible"></label>
        <input id="email" type="email" name="email" placeholder="email" aria-label="email"className="w-full p-2 bg-slate-200 rounded-xl"/>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="mt-1 w-full flex pr-4 pl-4 pb-4">
        <label htmlFor="message" className="invisible" aria-label="message"></label>
        <textarea id="message" name="message" placeholder="message" className="w-full bg-slate-200 p-2 rounded-xl"/>
        <ValidationError prefix="message" field="message" errors={state.errors} />
      </div>
      <button type="submit" disabled={state.submitting} className="bg-pink-400 w-40 rounded-full text-xl font-bold p-1 mb-4 dark:text-zinc-950 hover:scale-105">
        Submit
      </button>
    </form>
    </>
  );
}
