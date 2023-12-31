import React, {useState} from 'react';


export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was Clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was Clicked"+ text);
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("converted to lowercase!", "success");
   }
   const handleClearClick = ()=>{
    // console.log("Uppercase was Clicked"+ text);
     let newText = '';
     setText(newText)
   }
  const handleOnChange= (event)=>{
   // console.log("On change");
    setText(event.target.value);
  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }




  const [text, setText] = useState(' ');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="3"></textarea>
    
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Exter Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <h2>your text summary</h2>
  <p>{text.split(" ").length} words and {text.length}characters</p>
  <p>{0.008 * text.split(" ").length } Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
    </>
  )
}
