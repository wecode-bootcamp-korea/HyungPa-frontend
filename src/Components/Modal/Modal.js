import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    const { modalHandler, children } = this.props;
    return (
      <>
        <div className="Modal" onClick={modalHandler} />
        <div className="ModalWrap">
          <div className="Modalcontainer">
            {children}
            <div className="modalBtn" onClick={modalHandler}>
              <i className="xi-close" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
