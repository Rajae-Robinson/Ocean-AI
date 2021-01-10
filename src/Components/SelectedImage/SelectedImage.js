import React from 'react';
import './SelectedImage.css'

const SelectedImage = ({ imageUrl, box }) => {
    if(!imageUrl) return null
    else {
        return (
            <div id="image-container" className="mt3">
                <img id="input-image" src={imageUrl} width="500px" alt="face"/>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        );
    }
}

export default SelectedImage;