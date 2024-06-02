"use client";
import classes from "./my-modal.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useRef, SyntheticEvent } from "react";

async function postModalData(username: string, email:string, mobile: string) {
  const response = await fetch("", {
    method: "POST",
    body: JSON.stringify({ username, email, mobile }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return data;
}
export default function MyModal(props:any) {
  const [hasInput, setHasInput] = useState(true);
  const [hasExcessInput, setHasExcessInput] = useState(true);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  async function modalHandler(event: SyntheticEvent) {
    event.preventDefault();
    const username = usernameInputRef.current!.value;
    const email = emailInputRef.current!.value;
    const mobile = mobileInputRef.current!.value;

    //props.onHide();
    let countInputs = 0;
    if (username.length > 0) {
      countInputs++;
    }
    if (email.length > 0) {
      countInputs++;
    }
    if (mobile.length > 0) {
      countInputs++;
    }
    if (countInputs === 0) {
      usernameInputRef.current!.focus();
      setHasInput(false);
      return;
    } else {
      usernameInputRef.current!.blur();
      setHasInput(true);
    }
    if (countInputs >= 2) {
      setHasExcessInput(false);
      return;
    } else {
      setHasExcessInput(true);
    }

    try {
      const data = await postModalData(username, email, mobile);
    } catch (error) {
      console.log(error);
    }
  }
  let notification;
  if (!hasInput) {
    notification = <p>یکی از موارد بالا را انتخاب کنید</p>;
  } else if (!hasExcessInput) {
    notification = <p>فقط یکی از موارد بالا را وارد کنید</p>;
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      className={"loginMdl"}
      id={`${classes.loginMdl}`}
      {...props}
      centered
    >
      <Modal.Header className={`d-flex justify-content-between bg-primary`}>
        <Modal.Title className={`h6 text-white`}>
          بازیابی نام کاربری / کلمه عبور
        </Modal.Title>
        <i
          className={`${classes.closeCursor} bi bi-x h5`}
          onClick={props.onHide}
        ></i>
      </Modal.Header>
      <Modal.Body>
        <p className="text-justify text-primary mb-0">
          <small>
            جهت بازیابی نام کاربری یا کلمه عبور لطفا یکی از گزینه های زیر را
            انتخاب کنید:
          </small>
        </p>
        <p className="text-justify text-info mb-0">
          ارسال از طریق
          <span className="text-success"> Email </span>: نام کاربری
          <span className="text-secondary"> یا </span>
          ایمیل خود را وارد کنید سپس بر روی «ادامه» کلیک کنید
        </p>
        <Form>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-1">
                <Form.Label className="fw-bold">نام کاربری</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="userid"
                  className={`border border-secondary-subtle ${classes.inp}`}
                  ref={usernameInputRef}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-1">
                <Form.Label className="fw-bold">ایمیل </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="email"
                  className={`border border-secondary-subtle text-start ${classes.inp}`}
                  ref={emailInputRef}
                />
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <p className="text-justify text-info mb-1">
            <i className="bi bi-phone"></i>
            ارسال از طریق
            <span className="text-success"> SMS </span>: شماره موبایل خود را
            وارد کنید
          </p>
          <Row>
            <Col xs={12}>
              <Form.Group className="mb-1">
                <Form.Label className="fw-bold"> شماره موبایل </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="...09"
                  className={`border border-secondary-subtle text-start ${classes.inp}`}
                  ref={mobileInputRef}
                />
              </Form.Group>
              <hr />
            </Col>
          </Row>
        </Form>
        {notification && (
          <div className="text-danger text-end h6">{notification}</div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={modalHandler}>
          ادامه
        </Button>
        <Button variant="secondary" onClick={props.onHide} type="button">
          انصراف
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
