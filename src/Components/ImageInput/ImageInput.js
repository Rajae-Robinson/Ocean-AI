import React from 'react';
import './ImageInput.css';

const ImageInput = ({ onInputChange, clearInput, onImageSubmit, tries, name }) => {
    return (
        <div>
            <p className="f3 white mt6 tc">
                Welcome, {`${name}`}. Insert an image and the Clarifai AI will detect if a face is in the image.
                First, get the url of the image. Press <strong>detect</strong> and viola! 
            </p>
            {
                (tries <= 0) 
                ? <p className="f2 dark-red">No more tries left for today. Come back tomorrow!</p>
                :
                <div className="flex flex-column items-center">
                    <p className="white tc">
                        <em>You get 10 free tries daily!</em><br/>
                        Number of tries left: {`${tries}`}
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
            }
        </div>
    );
}

export default ImageInput;