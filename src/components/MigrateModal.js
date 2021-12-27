import React from 'react';
import PropTypes from 'prop-types';

export class MigrateModal extends React.Component {

  onHasAccount = () => {
    localStorage.setItem("has-unstoppable-account", "1")
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <div className="header">
            <a onClick={this.props.onClose} >
              x
            </a>

            <h2>Create Your Unstoppable Account</h2>
            <p>Save your data and use all of the Unstoppable Tools to run your life.</p>
            <hr/>
          </div>

          <form action='https://app.unstoppablesunday.com/users/unstoppable' method='POST' id="sundayapp-form" name="sundayapp-form" target="_new">
            <div className="modal-content">
                <div className='form-row'>
                  <input type='text' name='user[first_name]' placeholder='First Name' />
                </div>

                <div className='form-row'>
                  <input type='text' name='user[email]' placeholder="Email" />
                </div>

                <div className='form-row'>
                  <input type='password' name='user[password]' placeholder="Password" />
                </div>

                <div className='form-row'>
                  <input type='password' name='user[password_confirmation]' placeholder="Confirm Password" />
                </div>
            </div>

            <div className="footer">
              <button className='button green' onClick={this.onHasAccount}>
                Create My Unstoppable Account &rarr;
              </button>
              <p>
                By creating your account, you are agreeing to our <a href='https://tkkader.com/terms' target='_new'>Terms of Service</a>.<br/>
                Already have an account? <a href="https://app.unstoppablesunday.com" target="_new" onClick={this.onHasAccount}>Login here</a>.</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

MigrateModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
