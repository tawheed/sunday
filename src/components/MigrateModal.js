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

          <div className="modal-content">
            {this.props.children}
          </div>

          <div className="footer">
            <button className='button normal' onClick={this.props.onClose} >
              Close
            </button>
          </div>
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
