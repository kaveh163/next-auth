"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "./signup-form.module.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { useFormState} from 'react-dom';
import { authenticate } from '@/lib/actions';
import FormSubmit from "./signup-form-submit";
import Link from "next/link";

export default function SignUpForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <Form className="frm" action={dispatch}>
      <Form.Group className="mb-3">
        <Form.Label className="d-flex justify-content-start h6">
          نام کاربری
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="user id"
          className={`${classes["inp"]} fs-6 border border-secondary-subtle border-2`}
          name="userid"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="d-flex justify-content-start h6">
          کلمه عبور
        </Form.Label>
        <Form.Control
          type="password"
          placeholder="حداقل ۴ کاراکتر"
          className={`${classes["inp"]} fs-6 border border-secondary-subtle border-2`}
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="d-flex justify-content-start h6">
          {" "}
          تکرار کلمه عبور{" "}
        </Form.Label>
        <Form.Control
          type="password"
          className={`${classes["inp"]} fs-6 border border-secondary-subtle border-2`}
          name="confirmPassword"
        />
      </Form.Group>
      {errorMessage && <p className="text-danger text-end">{errorMessage}</p>}
      <FormSubmit/>
    </Form>
  );
}
