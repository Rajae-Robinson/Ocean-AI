import React from 'react';
import SelectedImage from '../SelectedImage/SelectedImage';
import ImageInput from '../ImageInput/ImageInput';

const UserProfile = ({tries, onInputChange, onImageSubmit, imageUrl, box}) => {
    return (
        <div>
            <ImageInput 
                tries={tries}
                onInputChange={onInputChange}
                onImageSubmit={onImageSubmit}
            />
            <SelectedImage imageUrl={imageUrl} box={box}/>
        </div>
    );
}

export default UserProfile;