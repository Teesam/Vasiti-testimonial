import React from 'react';
import './shareStory.css';

const ShareStory = () => {
    return(
        <div>
            <h1>Share your amazing story!</h1>
            <form>
                <div id = 'file-div'>
                    <label for = 'file'>Upload your Picture</label>
                    <input name = 'file' type = 'file' id = 'file-input' />
                </div>
                <div id = 'name-div'>
                    <div>
                        <label for = 'first name'>First name</label>
                        <input name = 'first name' type = 'text' className = 'name-input' />
                    </div>
                    <div>
                        <label for = 'last name'>Last name</label>
                        <input name = 'last name' type = 'text' className = 'name-input' />
                    </div>
                </div>
                <div id ='text-area-div'>
                    <label>Share your story</label>
                    <textarea />
                </div>
                <div id = 'radio-div'>
                    <p>What did you interact with Vasiti with?</p>
                    <div>
                        <input name = 'vasiti' type = 'radio' className = 'radio-input' />
                        <label id = 'customer-label' for = 'vasiti'>Customer</label>
                        <input name = 'vasiti' type = 'radio' className = 'radio-input' />
                        <label id = 'vendor-label' for = 'vasiti'>Vendor</label>
                    </div>
                </div>
                <div id = 'location-div'>
                    <label for = 'location input'>City or higher institution (for students)</label>
                    <input name = 'location input' type = 'text' id = 'location-input' />
                </div>
                <div id = 'button-div'>
                    <button id = 'share-button'>Share your story!</button>
                </div>
            </form>
        </div>
    )
}

export default ShareStory;