"use client";
import { useState, useRef } from "react";
import MyModal from "../modal/my-modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import classes from "./login-form.module.css";

function isInvalidField(text: string | null): boolean {
  return !text || text.trim() === "";
}
async function postLoginData(username:string, password:string) {
  const response = await fetch("", {
    method: "POST",
    body: JSON.stringify({ username, password }),
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
export default function LoginForm() {
  const [isUserValid, setIsUserValid] = useState(true);
  const [isPassValid, setIsPassValid] = useState(true);
  const userNameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  async function loginHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const username = userNameInputRef.current!.value
    const password = passwordInputRef.current!.value;
  
    if (isInvalidField(username)) {
      passwordInputRef.current!.blur();
      userNameInputRef.current!.focus();
      setIsUserValid(false);
      return;
    } else {
      setIsUserValid(true);
    }
    if (isInvalidField(password)) {
      userNameInputRef.current!.blur();
      passwordInputRef.current!.focus();
      setIsPassValid(false);
      return;
    } else {
      setIsPassValid(true);
    }
    try {
      //const data = await postLoginData(username, password);
      console.log("successfully reached here");
    } catch (error) {
      console.log(error);
    }
  }
  let notification;
  if (!isUserValid) {
    notification = <p>نام کاربری انتخاب نشده است</p>;
  } else if (!isPassValid) {
    notification = <p>کلمه عبور وارد نشده است</p>;
  }
  return (
    <div
      className={`${classes.bgGrayColor} border border-secondary-subtle ${classes.borderRadius} px-3 py-4`}
    >
      <h1 className={`h5 ${classes.titleColor} fw-bold`}>ورود اعضاء</h1>
      <Row>
        <Col xs={12} sm={6} className={`${classes["col-border"]}`}>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">نام کاربری</Form.Label>
              <Form.Control
                type="text"
                ref={userNameInputRef}
                className={classes.inp}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">کلمه عبور</Form.Label>
              <Form.Control
                type="password"
                ref={passwordInputRef}
                className={classes.inp}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Row className="">
                <Col xs={12} className="text-center">
                  <Button variant="success" type="submit">
                    ورود
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
          {notification && (
            <div className="text-danger text-end h6">{notification}</div>
          )}
          <div className={`${classes.forgotPass} mb-2 mb-sm-0`}>
            <i className="bi bi-info-circle-fill ms-1"></i>
            <Link
              href="#"
              className={`text-decoration-none ${classes["text-warning"]}`}
              onClick={handleShow}
            >
              نام کاربری یا کلمه عبورتان را فراموش کرده اید؟ کلیک کنید
            </Link>
            <MyModal show={show} onHide={handleClose} />
          </div>
        </Col>
        <Col xs={12} sm={6} className="">
          <p className="h5 text-primary mt-2 mt-sm-0">
            ورود یا عضویت با
            <b className="text-danger"> Gmail </b>
          </p>
          <p className="text-justify text-secondary">
            شما می توانید با استفاده از حساب کاربری خود در
            <b className="text-danger"> گوگل </b>
            بدون پر کردن هیچ فرمی به سامانه وارد یا به عضویت در آیید.
          </p>
          <Button variant="danger" size="sm" className="d-block mx-auto">
            ورود/عضویت با Google
          </Button>
        </Col>
      </Row>
    </div>
  );
}
