import React from 'react';
import PropTypes from 'prop-types';

export class MigrateModal extends React.Component {

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
          </div>

          <form action='https://app.unstoppablesunday.com/users/unstoppable_migration' method='POST' id="sundayapp-form" name="sundayapp-form" >
            <div className="modal-content">
              <div className='form-intro'>
               Sign up for the new Unstoppable app! Create a login below and we'll migrate your existing Sunday document for you!
              </div>

                <div className='form-row'>
                  <input type='text' name='user[first_name]' placeholder='First Name' /> 
                  <input type='text' name='user[last_name]' placeholder='Last Name' />
                </div>
                <div className='form-row'>
                  <input type='text' name='user[email]' placeholder="Email" />
                  <input type='text' name='user[phone]' placeholder="Phone Number" />
                </div>
                <div className='form-row'>
                  <input type='password' name='user[password]' placeholder="Password" />
                  <input type='password' name='user[password_confirmation]' placeholder="Confirm Password" />
                </div>
                <input type='hidden' name='reflection[content]' value={localStorage.getItem("sunday-entries")} />
            </div>

            <div className="footer">
              <button className='button'>
                Submit
              </button>
              <button className='button normal' onClick={this.props.onClose} >
                Close
              </button>
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
