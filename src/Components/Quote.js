import React from 'react';
import Button from './Button';
import SocialMedia from './Socialmedia'

function Quote(props) {
    return (
        <div id="quote-box" className="row align-self-center w-100">
            <div className="col-6 offset-3 bg-dark">
                <div className="card bg-light">
                    <div className="card-body text-center h-100">
                        <blockquote id="text" className="card-text">
                            <p>
                                {props.quote}
                            </p>
                        </blockquote>
                        <h5 id="author" className="card-title text-right">
                            - {props.author}
                        </h5>
                        <Button fetchdata={props.fetchdata}/>
                    </div>
                    <SocialMedia />
                </div>
            </div>
        </div>

    );
}
export default Quote;