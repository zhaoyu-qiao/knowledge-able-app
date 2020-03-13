import React, { Component, useState } from "react";
import { Input, FormBtn } from "../GeneralForm/index";
import NoteAPI from "../../utils/NoteAPI";
import { Modal, Button } from "react-bootstrap";

// functional component with hooks
function Note(props) {
  // Modal show/hide
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("Your Note is Saved!");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Other states
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [link, setLink] = useState("");

  const username = localStorage.getItem("username");
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form submitted", title);
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    if (link.match(regex)) {
      NoteAPI.saveNote({
        username: username,
        title: title,
        link: link,
        comment: comment
      })
        .then(res => {
          setMessage("Your note is saved!");
          handleShow();
          console.log("response", res);

          setTitle(res.title);
          setComment(res.comment);
          setLink(res.link);
        })
        .catch(err => console.log(err));
    } else {
      // show Modal
      setMessage("Please insert a valid url.:)");
      handleShow();
    }
  };

  return (
    <div
      style={{
        overflow: "scroll",
        maxHeight: "500" + "px"
      }}
    >
      <div>
        <h4 className="text-info"> Please sign in and enter your notes. </h4>
        <form>
          <b>Title:</b>
          <Input
            id="title"
            type="text"
            // value={this.state.title}
            value={title}
            // onChange={this.handleInputChange}
            onChange={e => setTitle(e.target.value)}
            name="title"
            placeholder="Your note title"
          />
          <b>Link:</b>
          <Input
            id="link"
            type="text"
            // value={this.state.link}
            value={link}
            onChange={e => setLink(e.target.value)}
            // onChange={handleInputChange}
            name="link"
            placeholder="Put the link you like here"
          />
          <b>Comment:</b>
          <Input
            id="comment"
            type="text"
            // value={state.comment}
            value={comment}
            onChange={e => setComment(e.target.value)}
            name="comment"
            placeholder="Comment here"
          />
          <FormBtn disabled={!title || !comment} onClick={handleFormSubmit}>
            Submit{" "}
          </FormBtn>{" "}
        </form>{" "}
        <br />
      </div>

      <div>
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          // onClick={handleClose}
        >
          <Modal.Body>
            <span style={{ float: "left" }}>{message}</span>
            <Button
              style={{
                float: "right",
                backgroundColor: "#17a2b8",
                borderColor: "#17a2b8"
              }}
              onClick={handleClose}
            >
              {" "}
              Close{" "}
            </Button>
          </Modal.Body>{" "}
        </Modal>
      </div>
      <br />
      <div>
        <h4
          className="text-info"
          style={{
            marginTop: 20 + "px",
            paddingTop: 2 + "px",
            textAlign: "left"
          }}
        >
          Your Current Note:
        </h4>
        <div>
          <p>
            <b>Title: </b>
            {title}
          </p>
          <p>
            <b>Link: </b>
            {link}
          </p>
          <p>
            <b>Comment: </b>
            {comment}
          </p>
        </div>
        <a href="/notes" class="button">
          Check all notes here
        </a>
      </div>
    </div>
  );
}

export default Note;
