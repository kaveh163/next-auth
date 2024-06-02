import classes from "./google-sign-up.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";
export default function GoogleSignUp() {
  
  return (
    <div className={`${classes["text-justify"]} mt-3 mt-sm-0`}>
      <p className={`h6`}>
        <i className="bi bi-info-circle h6 ms-2 text-primary d-inline-block"></i>
        اگر اکانت
        <span className={`text-danger h6`}> Gmail </span>
        دارید می توانید بدون ثبت نام و فقط با جیمیل تان ثبت نام و وارد سیستم
        شوید.
      </p>
      <p className={`text-center`}>
        <Button variant="danger" size="sm" className="mt-1 mt-sm-0">
          ورود/عضویت با Google
        </Button>
      </p>
      <p className={`h6 ${classes["text-link"]}`}>
        <i className="bi bi-info-circle h6 ms-2 text-primary d-inline-block mt-sm-3"></i>
        اگر قبلا در این سامانه ثبت نام کرده اید٬ لطفا از طریق صفحه
        <Link href="/login" className="text-decoration-none"> ورود اعضاء </Link>
        وارد شوید.
      </p>
    </div>
  );
}
