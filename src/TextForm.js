import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpclick= ()=>{
        // console.log("Upper case was clicked");
        let newTxt= text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted to upper case", "success");
    }
    const handleClearClick= ()=>{
        // console.log("Upper case was clicked");
        let newTxt= ""
        setText(newTxt);
        props.showAlert("Text Cleared", "success");
    }
    const handleLoclick= ()=>{
        // console.log("Upper case was clicked"); 
        let newTxt= text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to lower case", "success");
    }
    const handleOnChange= (event)=>{
        console.log("OnChange");
        setText(event.target.value);
    }
    const CapitalFirst= ()=>{
      let txt = text.split(".");
      // console.log(txt)
      for(let i=0;i<txt.length;i++) {
        // console.log(txt[i].charAt(0))
       txt[i] = txt[i].charAt(0).toUpperCase() + txt[i].slice(1);
      //  console.log(txt[i])
      props.showAlert("Converted first letter of sentence capital", "success");
      }
      let UpdatedCase= txt.join(".") 
      // console.log(UpdatedCase)
      setText(UpdatedCase);

    }
  

    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
    <div className='my-3'>
  <div> 
    <h1 id='mainHead'> {props.heading} </h1>
  </div>
<div className="mb-3">
  {/* {console.log(props.mode)}
  {console.log("a")} */}
  <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}> Change to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoclick}> Change to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text</button>
<button className="btn btn-primary mx-1" onClick={CapitalFirst}>Capitalize First</button>
    </div>
    </div>
    <div className="container">
        <h3>Your text summary</h3>
        <p> {text.length>0?text.trim().split(" ").length:0} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    
    </div>
    </>

  )
}
