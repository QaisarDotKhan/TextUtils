import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = () =>{
             console.log("Button Clicked");
             let newText = text.toUpperCase();
             setText(newText);
             props.showAlert("Converted to Uppercase!", "success");
           }

    const handleloClick = () =>{
        console.log("Button Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
       }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleasred!", "success");

       }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!", "success");

    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");

    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
      }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
       <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
     <button className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
 
    <div className='container my-4' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Time to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>


    </>
  )
}
