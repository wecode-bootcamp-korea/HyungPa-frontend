import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    const { modalHandler, children } = this.props;
    return (
      <>
        <div
          className="Modal"
          onClick={() => {
            modalHandler(false);
          }}
        />
        <div className="ModalWrap">
          <div className="Modalcontainer">
            {children}
            <div
              className="modalBtn"
              onClick={() => {
                modalHandler(false);
              }}
            >
              <i className="xi-close" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
