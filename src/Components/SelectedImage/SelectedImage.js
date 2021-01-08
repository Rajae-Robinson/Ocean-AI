import React from 'react';

const SelectedImage = ({ imageUrl }) => {
    if(!imageUrl) return null
    else {
        return (
            <div className="mt3 flex justify-center">
                <img src={imageUrl} width="500px" alt="user image"/>
            </div>
        );
    }
}

export default SelectedImage;