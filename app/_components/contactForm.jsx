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
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
