"use client";
import classes from "./login.module.css";
import LoginForm from "./login-form/login-form"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginSignUp from "./login-signup/login-signup";
export default function LoginComponent() {
  
  return (
    <main className={`${classes.bgBlueColor} pb-3`}>
      <Container className={`bg-body p-3 rounded mx-auto ${classes.loginContainer}`}>
        <Row className="p-0 mx-0 ">
          <Col xs={12} className="px-0">
           <LoginForm/>
          </Col>
        </Row>
        <LoginSignUp/>

      </Container>
    </main>
  );
}
