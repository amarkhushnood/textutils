import React ,{ useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick =()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{
       
        let newText=text.toLowerCase();
        setText(newText)
    }
    
    const handleclearClick2 =()=>{
       
        let newText=""
        setText(newText)
    }
    const handleTitleClick =()=>{
       
        let words = text.split(" ");
        let newText = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        setText(newText.join(" "));
    }
    const handlesentClick = () => {
        let newText = text.toLowerCase(); // Convert entire text to lowercase
        newText = newText.replace(/(^\w{1}|\.\s*\w{1})/gi, function(char) {
            return char.toUpperCase();
        });
        setText(newText);
    }
    const handleOnChange = (event)=>{
       
        setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <div>
     <h1 className='title'>{props.heading} </h1>
    <div className="mb-3">
  <textarea className="form-control  "  placeholder="enter your text here" value={text} onChange={handleOnChange} id="mybox" rows="9"></textarea>
    </div>
    <div>
        <button className="btn btn-dark mx-1 my-2  button" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-1 my-2  button" onClick={handleLoClick}>
          Convert to lowerCase
        </button>
        <button className="btn btn-warning mx-1 my-2  button" onClick={handleTitleClick}>
          Convert into TitleCase
        </button>
        <button className="btn btn-success mx-1 my-2  button" onClick={handlesentClick}>
          Convert into sentenceCase
        </button>
        <button className="btn btn-danger mx-5 my-2  button" onClick={handleclearClick2}>
          Clear Text
        </button>
        
      </div>
      <div className="container my-3">
        <h2>Your Text Summary </h2>
        <p><b>{text.split(" ").length }</b> words and <b>{text.length}</b> characters</p>
        <p>It takes <b>{0.008*text.split(" ").length}</b> Minutes to read this</p>
        <h4>preview</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}
