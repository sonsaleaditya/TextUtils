import React, { useEffect, useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleCaseToggle = function() {
        let newText;
        if (text === text.toUpperCase()) {
            newText = text.toLowerCase();
            props.showAlert("converted to LowerCase ","Success")
        } else {
            newText = text.toUpperCase();
            props.showAlert("converted to UpperCase ","Success")
        }
        setText(newText);
    }
    

    const handleClearClick = () => {
        setText('');
        props.showAlert("text cleared !","Success")
    }

    const wordCount = text.split(/\s+/).filter((word) => word !== '').length;
    const charCount = text.length;

    let buttonLabel;
if (text === text.toUpperCase()) {
    buttonLabel = 'Convert to Lowercase';
} else {
    buttonLabel = 'Convert to Uppercase';
}

 const [Colour , setColour] = useState({bgColour : 'light', textColour : 'dark'})

useEffect(()=>{
    if(props.mode)
    {
       setColour({bgColour : 'light', textColour : 'dark'});
    }
    else{
         setColour({bgColour : 'dark', textColour : 'light'});
    }
} ,[props.mode] );


    return (
        <>
            <div className={`bg-${Colour.bgColour} text-${Colour.textColour}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className= {`form-control bg-${Colour.bgColour} text-${Colour.textColour}`} id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCaseToggle}>{buttonLabel}</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            </div>

            <div className={`my-3 bg-${Colour.bgColour} text-${Colour.textColour}`}>
                <h1>Your text summary</h1>
                <p>{wordCount} words and {charCount} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>preview </h2>
                <p>{text}</p>
            </div>
        </>
    );
}
