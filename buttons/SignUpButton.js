import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';

function SignUpButton() {

    const [setClick] = useState(false);
    const [button] = useState(true);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            {button ? (
                <Link to='/sign-up' className='btn-link'>
                    <Button buttonStyle='btn--outline'>S'inscrire</Button>
                </Link>
            ) : (
                <Link to='/sign-up' className='btn-link'>
                    <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--mobile'
                        onClick={closeMobileMenu}
                    >
                        SIGN UP
                        </Button>
                </Link>
            )}
        </div>
    )
}

export default SignUpButton
