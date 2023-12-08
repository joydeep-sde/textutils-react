import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpperClick = ()=>{
    let newText =text.toUpperCase(text);
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }

  const handleLowerClick = ()=>{
    let newText =text.toLowerCase(text);
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }

  const handleClearClick = ()=>{
    let newText ='';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (e)=>{
    setText(e.target.value);
  }

  const handleCopy = ()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  }

 
  const [text, setText] = useState('');
  

  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea name="myBox" className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}  rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>

        <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'} mx-1`} onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'} mx-1`} onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'} mx-1`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'} mx-1`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.mode==='light' ? 'dark' : 'light'} mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.trim().length > 0 ? text.trim().split(" ").length : 0} words, {text.length} characters</p>
        <p>{0.008*(text.trim().length > 0 ? text.trim().split(" ").length : 0)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
