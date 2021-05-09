import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import '../../assets/css/DropdownButton.css'
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';

function DropdownButton() {

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <NavDropdown title="Connexion"
            id="collasible-nav-dropdown"
            className='navdropdown-menu'
            show={show}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
        >
            <NavDropdown.Item style={{
                textDecoration: 'none'
            }}>
                <SignUpButton />
            </NavDropdown.Item>
            <NavDropdown.Item style={{
                textDecoration: 'none'
            }}>
                <SignInButton />
            </NavDropdown.Item>
        </NavDropdown>
    )
}
export default DropdownButton;