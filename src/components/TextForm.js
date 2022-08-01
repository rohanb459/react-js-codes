import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here right here........");

  const handleUpClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
    </>
  );
}
