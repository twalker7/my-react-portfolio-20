import React from 'react';

function Contact(props){
    return(
        <div>
            <form>
            <div>
                    <label></label>
                   <input name="name" />
                </div> 
                <div>
                    <label></label>
                   <input name="email"/>
                </div> 
                <div>
                    <label></label>
                   <textarea defaultValue="" name="message"></textarea>
                </div> 
                <button type="submit"></button>
            </form>
        </div>
    );
}

export default Contact;