import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import useModal from '../hooks/useModal';
// import SignInModal from '../modals/SignInModal'
import { Button } from './Button';

function SignInButton() {

    const [setClick] = useState(false);
    const [button] = useState(true);
    // const { isShowing, toggle } = useModal();
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            {/* <SignInModal
                isShowing={isShowing}
                hide={toggle}
            /> */}
            {button ? (
                // <div className='btn-link'>
                <Link to='/sign-in' className='btn-link'>
                    <Button buttonStyle='btn--primary'
                    // onClick={toggle}
                    >
                        Se Connecter
                    </Button>
                </Link>

                // </div>
            ) : (
                // <div className='btn-link'>
                <Link to='/sign-in' className='btn-link'>
                    <Button
                        buttonStyle='btn--primary'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                    >
                        SIGN IN
                        </Button>
                </Link>
            )}
        </div>
    )
}

export default SignInButton
