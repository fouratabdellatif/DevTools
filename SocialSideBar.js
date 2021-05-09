/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import useModal from './hooks/useModal';
import RatingModal from './modals/RatingModal';
import '../assets/css/SocialSideBar.css';
// import FeedbackModal from './FeedbackModal';

function SocialSideBar() {

    const { isShowing, toggle } = useModal();
    const [user] = useState(JSON.parse(localStorage.getItem("profile")));

    return (
        <div className='sidebar-menu'>
            <a href="/" className="facebookk"><i className="fab fa-facebook-f fb"></i> Facebook</a>
            {/* <a href="#" className="twitterr"><i className="fab fa-twitter twt"></i> Twitter</a> */}
            <a href="/" className="instagramm"><i className="fab fa-instagram ig"></i> Instagram</a>
            <a href="/" className="linkedinn"><i className="fab fa-linkedin-in lkin"></i> Linkedin</a>
            {/* <a href="#" className="githubb"><i className="fab fa-github ghub"></i> Github</a>
            <a href="#" className="youtubee"><i className="fab fa-youtube yt"></i> Youtube</a> */}
            {user ? (
                <>
                    <a className="rating" onClick={toggle}><i class="fas fa-star-half-alt"></i> Feedback</a>
                    <RatingModal
                        isShowing={isShowing}
                        hide={toggle}
                    />
                    {/* <FeedbackModal><a className="rating" onClick={toggle}><i class="fas fa-star-half-alt"></i> Feedback</a></FeedbackModal> */}
                </>
            ) : null}
        </div>
    )
}

export default SocialSideBar
