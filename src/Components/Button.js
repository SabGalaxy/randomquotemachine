import React from 'react';

function Button(props) {
    return (
        <div>
            <button className="btn btn-info" id="new-quote" onClick={() => props.fetchdata()}>
                New Quote
            </button>
        </div>
    );
}
export default Button;