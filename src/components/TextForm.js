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
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
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
      <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="8"
            id = "myBox"
            value = {text}
            style = {{backgroundColor: props.theme === 'dark' ? 'grey' : 'white', color: props.theme === 'dark' ? 'white' : 'dark'}}
            onChange={onChangeHandler} placeholder="Enter text here"
          ></textarea>
        </div>
      </div>
      <div className="container my-3">
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style = {{color: props.theme === 'dark' ? 'white' : '#050c24'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters in textarea</p>
        <p>{0.08 * text.split(" ").length} minutes required to read information in textarea</p>
      </div>
      <div className="container" style = {{color: props.theme === 'dark' ? 'white' : '#050c24'}}>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in above textbox to preview it here"}</p>
      </div>
    </>
  );
}
