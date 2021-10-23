import React from 'react';

function Contact(props){
    return(
        <div>
            <h2 className="component-header"> Reach out</h2>
            <form className="contact-form">
            <div>
                    <label className="form-labels">Name</label> <br/>
                   <input  className="form-field" name="name" />
                </div> 
                <div>
                    <label className="form-labels">Email</label> <br/>
                   <input className="form-field" name="email"/>
                </div> 
                <div>
                    <label className="form-labels">Message</label> <br/>
                   <textarea defaultValue="" name="message" className="message-field"></textarea>
                </div> 
                <button type="submit"> Send </button>
            </form>
        </div>
    );
}

export default Contact;