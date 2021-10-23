import React from 'react';

function Contact(props){
    return(
        <div>
            <h2 className="component-header"> Reach out</h2>
            <form className="contact-form">
            <div>
                    <label>Name</label>
                   <input name="name" />
                </div> 
                <div>
                    <label>Email</label>
                   <input name="email"/>
                </div> 
                <div>
                    <label>Message</label>
                   <textarea defaultValue="" name="message"></textarea>
                </div> 
                <button type="submit"> Send </button>
            </form>
        </div>
    );
}

export default Contact;