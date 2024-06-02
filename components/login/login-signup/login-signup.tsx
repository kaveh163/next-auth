import classes from "./login-signup.module.css";
import Link from "next/link";
import Button from "react-bootstrap/Button";

export default function LoginSignUp() {
  return (
    <div
      className={`${classes.bgGrayColor} mt-3 border border-secondary-subtle ${classes.borderRadius} px-3 py-4`}
    >
      <h5 className={`fw-bold ${classes.title}`}>عضویت (ثبت نام در سامانه)</h5>
      <p className="text-info">
        هنوز عضو سامانه ایران فایل اسکان نشده اید؟
        <Link href="/signup" legacyBehavior>
          <Button variant="primary" size="sm" className="me-2 mt-2 mt-sm-0">
            عضویت
          </Button>
        </Link>
      </p>
    </div>
  );
}
