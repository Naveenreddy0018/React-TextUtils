import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("UpperCase is clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success');
    }

    const handleClearClick = () => {
      let clearedText = "";
      setText(clearedText);
      props.showAlert('The text is cleared', 'success');
    }

    const handleLowClick = () => {
      let updatedText = text.toLowerCase();
      setText(updatedText);
      props.showAlert('Converted to LowerCase', 'success');
    }
    const onChangeHandler = (event) => {
        //console.log("Onchange event");
        setText(event.target.value);
    }

    const handleCopy = () => {
      console.log("Iam copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert('Text copied', 'success');
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert('Extra spaces handled', 'success');
    }

    const [text, setText] = useState("");
    //text = "new text";   wrong way to change the text
    //setText("new text");  correct way to change the text
  return (
    <>
      <div className="container" style = {{color: props.theme === 'dark' ? 'white' : '#050c24'}}>
      <h3 className="mb-2">{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            id = "myBox"
            value = {text}
            style = {{backgroundColor: props.theme === 'dark' ? '#140e2b' : 'white', color: props.theme === 'dark' ? 'white' : 'dark'}}
            onChange={onChangeHandler} placeholder="Enter text here"
          ></textarea>
          <style>
            {props.theme === 'dark' && `#myBox::placeholder { color: white; }`}
          </style>
        </div>
      </div>
      <div className="container my-3">
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style = {{color: props.theme === 'dark' ? 'white' : '#050c24'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters in textarea</p>
        <p>{0.08 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes required to read information in textarea</p>
      </div>
      <div className="container" style = {{color: props.theme === 'dark' ? 'white' : '#050c24'}}>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
