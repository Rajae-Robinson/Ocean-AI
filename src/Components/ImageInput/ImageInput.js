import React from 'react';

const ImageInput = ({ onInputChange }) => {
    return (
        <div className="flex flex-column items-center">
            <p className="f3 dark-grey tc">
                Welcome to Ocean AI! Insert an image and the Clarifai AI will detect if a face is in the image.
                First, get the url of the image. Press <strong>detect</strong> and viola! 
            </p>
            <div className="w-80">
                <input 
                className='f4 pa2 w-70 center' 
                type="text" 
                onChange={onInputChange} 
                placeholder="Insert image url here"/>
                <button 
                className='w-30 grow f4 link ph3 pv2 dib white'
                style={{backgroundColor: "rgb(35, 38, 139)", border: "1px solid rgb(35, 38, 139)"}}
                >Detect</button>
            </div>
        </div>
    );
}

export default ImageInput;