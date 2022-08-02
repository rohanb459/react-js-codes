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

  const handleLowClick = ()=>{
    console.log("Lowercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
  }

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

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
      </div>

      <div className="container my-3">
        <h1>Your Text Summary </h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
