import React from 'react';
import './ImageInput.css';

const ImageInput = ({ onInputChange, clearInput, onImageSubmit, tries, name }) => {
    return (
        <div>
            <p className="f3 white mt6 tc">
                Welcome, {`${name}`}. Paste an image url and Clarifai will use Machine Learning to detect if a face is in the image.
                First, copy the url of an image with a face in it, paste it in the box below and press <strong>DETECT</strong>. A green box will
                be drawn over the face in the image! 
            </p>
            <p className="white tc">
                Example URLs:<br/>
                https://i.pinimg.com/originals/11/2e/f6/112ef6e5390f9ba16756bb5152448b56.jpg<br/>
                https://ygrabo.com/wp-content/uploads/2016/04/alyssa1-873x1200.jpg<br/>
                https://www.turnbullwines.com/wp-content/uploads/2015/02/Phillipe-Halsman-Lauren-Bacall-1970-1.jpg
            </p>
            <div className="flex flex-column items-center">
                <p className="white tc">
                    <em>Your current entry count is: {`${tries}`}</em>
                </p>
                <form id="image-input-container" className="w-80">
                    <input 
                    className='f4 pa2 w-70 center' 
                    type="text" 
                    onChange={onInputChange} 
                    placeholder="Insert image url here"/>
                    <button 
                    type="button"
                    className='detect-btn w-30 grow f4 link ph3 pv2 dib white'
                    onClick={onImageSubmit}
                    >Detect</button>
                    <button type="reset" onClick={clearInput} className="close"></button>
                </form>
            </div>
        </div>
    );
}

export default ImageInput;