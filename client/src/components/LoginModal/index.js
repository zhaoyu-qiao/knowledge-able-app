import React from "react";
// import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import SignInSignUp from "../SignInSignUp/index";

// Cited: https://www.npmjs.com/package/react-responsive-modal

class LoginModal extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="btn btn-info" onClick={this.onOpenModal}>
          SignIn
        </button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          className="bg-info"
        >
          {/* <h2>Simple centered modal</h2> */}
          <div>
            <SignInSignUp />
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
