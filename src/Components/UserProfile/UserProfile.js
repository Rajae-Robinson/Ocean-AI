import React from 'react';
import SelectedImage from '../SelectedImage/SelectedImage';
import ImageInput from '../ImageInput/ImageInput';

const UserProfile = ({tries, name, onInputChange, clearInput, onImageSubmit, imageUrl, box}) => {
    return (
        <div>
            <ImageInput 
                name={name}
                tries={tries}
                onInputChange={onInputChange}
                clearInput={clearInput}
                onImageSubmit={onImageSubmit}
            />
            <SelectedImage imageUrl={imageUrl} box={box}/>
        </div>
    );
}

export default UserProfile;