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
            <h3>Create Your Unstoppable Account</h3>
          </div>

          <form action='https://app.unstoppablesunday.com/users/unstoppable_migration' method='POST' id="sundayapp-form" name="sundayapp-form" >
            <div className="modal-content">
                <div className='form-row'>
                  <input type='text' name='user[first_name]' placeholder='First Name' />
                </div>

                <div className='form-row'>
                  <input type='text' name='user[last_name]' placeholder='Last Name' />
                </div>

                <div className='form-row'>
                  <input type='text' name='user[email]' placeholder="Email" />
                </div>

                <div className='form-row'>
                  <input type='text' name='user[phone]' placeholder="Cell Phone Number (For Weekly Reminders)" />
                </div>

                <div className='form-row'>
                  <input type='password' name='user[password]' placeholder="Password" />
                </div>

                <div className='form-row'>
                  <input type='password' name='user[password_confirmation]' placeholder="Confirm Password" />
                </div>
                <input type='hidden' name='reflection[content]' value={localStorage.getItem("sunday-entries")} />
            </div>

            <div className="footer">
              <button className='button'>
                Create Account &rarr;
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
