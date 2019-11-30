import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function SocialMedia() {
  return (
       <div className="card-footer text-center bg-light">
            <a href="twitter.com" id="tweet-code"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="instagram.com" id="tweet-code" className="ml-4"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
  );
}
export default SocialMedia;