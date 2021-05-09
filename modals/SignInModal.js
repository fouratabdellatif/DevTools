import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../../assets/css/SignInModal.css';
import SignInForm from '../forms/SignInForm'
import { motion } from "framer-motion";

const SignInModal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <Fragment>
    <div className="modal-overlay"
    />
    <motion.div
    initial={{ opacity: 0 , scale: 0 }}
    animate={{ opacity: 1 , scale: 1 }}
    // animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
    className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-main">
          {/* <h2>Se Connecter</h2> */}
          <SignInForm />
        </div>
      </div>
    </motion.div>
  </Fragment>, document.body
) : null;

export default SignInModal;