"use client";
import SignUpForm from "./signup-form/signup-form";
import GoogleSignUp from "./google-sign-up/google-sign-up";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./signup.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
export default function SignUpComponent() {
  return (
    <Card className="text-center">
      <Card.Header
        className={`${classes["bg-header-color"]} p-3 text-white d-flex justify-content-start`}
      >
       <h1 className="h6"> عضویت در سامانه ایران فایل اسکان</h1>
      </Card.Header>
      <Card.Body className="p-3">
        <Row>
          <Col xs={12} sm={7} className={`${classes["form-border"]} `}>
            <SignUpForm/>
          </Col>
          <Col xs={12} sm={5} className="">
            <GoogleSignUp/>
          </Col>
        </Row>
       <p className={`text-end mt-2 mt-sm-5 h6`}>
          اگر در رابطه با عضویت نیاز به راهنمایی دارید٬ ویدیوهای
        <Link href="/training" className="text-decoration-none"> آموزشی </Link>
          در این رابطه را در این 
       <Link href="/training" className="text-decoration-none"> صفحه </Link>
       مشاهده کنید
       </p>
      </Card.Body>
      <Card.Footer className={`text-muted ${classes['bg-text-color']}`}>
        <p className="h5">شما با عضویت یا استفاده از امکانات این وب ‌سایت تمام قوانین را مطالعه و قبول کرده‌اید</p>
      </Card.Footer>
    </Card>
  );
}
