"use client";
import Link from "next/link";
import classes from "./welcome.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import { CloseButton } from "react-bootstrap";
export default function WelcomeComponent() {
  return (
    <main className={`pb-3 ${classes.bgGray}`}>
      <Container className="bg-body p-3 border rounded">
        <Row className="p-0 mx-0">
          <Col xs={12} className="">
            <Card className="text-center">
              <Card.Header>
                <p className="text-info-emphasis">
                  کاربر گرامی
                  <strong>
                    <span className="text-warning fw-bold"> (اسم) </span>
                  </strong>
                  عضویت شما با موفقیت انجام گردید. بمنظور استفاده بهینه از
                  سامانه لطفاً به نکاتی که در زیر آورده شده توجه فرمایید.
                </p>
              </Card.Header>
              <Card.Body className="text-justify">
                <h2 className="text-center mt-3">
                  به
                  <strong className="text-primary"> ایران فایل اسکان </strong>
                  خوش آمدید
                </h2>
                <Row className="p-0 mx-0 mt-3">
                  <Col xs={12} md={9} className="">
                    <ul className="mt-1 px-0">
                      <li className="text-end">
                        جهت مشاهده کامل اطلاعات ملک ها و دریافت اطلاعات تماس
                        مالک آنها می بایست با توجه به نیازتان
                        <Link
                          href="/eshterak"
                          className="text-danger text-decoration-none"
                        >
                          <strong> اشتراک </strong>
                        </Link>
                        خریداری کنید.
                      </li>
                      <li className="text-end">
                        پیشنهاد می کنیم از آخرین ورژن مرورگرهای
                        <Link
                          href="https://www.mozilla.org/en-US/firefox/all/#product-desktop-release"
                          className="text-decoration-none"
                        >
                          {" "}
                          Firefox{" "}
                        </Link>
                        یا
                        <Link
                          href="https://www.google.com/chrome/"
                          className="text-decoration-none"
                        >
                          {" "}
                          Chrome{" "}
                        </Link>
                        استفاده کنید.
                      </li>
                      <li className="text-end">
                        سایت بصورت وب اپلیکیشن طراحی شده است به این معنی که نیاز
                        به نصب هیچ نرم افزار برای استفاده از آن نیاز ندارید و
                        فقط کافی هست با نام کاربری خود با هر دستگاهی (کامپیوتر،
                        موبایل، تبلت، لپ تاپ و ..) وارد سایت شوید.
                      </li>
                      <li className="text-end">
                        بمنظور استفاده بهینه از سامانه جستجوی آنلاین لطفا
                        <Link
                          href="/article/2/راهنمای-جستجو-ملک"
                          className="text-decoration-none"
                        >
                          {" "}
                          راهنمای جستجو ملک{" "}
                        </Link>
                        را با دقت مطالعه فرمایید.
                      </li>
                      <li className="text-end">
                        تمامی مبالغ و قیمت ها در سامانه به
                        <strong className="text-danger"> تومان </strong>
                        می باشد.
                      </li>
                      <li className="text-end">
                        در قسمت
                        <Link
                          href="/training"
                          className="text-end text-decoration-none"
                        >
                          {" "}
                          آموزش{" "}
                        </Link>
                        ویدیوهای کوتاه آموزشی در مورد کار با سایت هست، حتما
                        نگاهش کنید.
                      </li>
                      <li className="text-end">
                        <span className="text-danger"> مهم و ضروری: </span>
                        در اولین فرصت اقدام به تکمیل اطلاعات کاربری و ثبت شماره
                        تلفن همراه خود جهت احراز هویت فرمایید. طبق
                        <Link
                          href="/Rules"
                          className="text-end text-decoration-none"
                        >
                          {" "}
                          قوانین و شرایط استفاده{" "}
                        </Link>
                        از سامانه هیچ کاربری مجاز به استفاده از این سامانه بدون
                        احراز هویت نمی باشد.
                      </li>
                    </ul>
                  </Col>
                  <Col
                    xs={12}
                    md={3}
                    className={`d-flex flex-column justify-content-center align-items-center`}
                  >
                    <Link
                      href="/member/userinfo"
                      className={`d-none d-md-block`}
                      legacyBehavior
                    >
                      <Image
                        src="https://iranfile.net/img/5/welcomephoto.png"
                        width={200}
                        height={200}
                        alt="خوش آمدید"
                        className="d-none d-md-block"
                        id={`${classes["img-wrapper"]}`}
                      />
                    </Link>
                    <p>
                      <Link href="/member/userinfo" className="btn btn-success">
                        تکمیل اطلاعات کاربری
                      </Link>
                    </p>
                  </Col>
                </Row>
                <Row className="p-0 mx-0 mt-3">
                  <Col xs={12} md={6} className="pb-2">
                    <p> همین حالا اشتراک بگذارید </p>
                    <Link href="/eshterak" className="btn btn-success">
                      خرید اشتراک
                    </Link>
                  </Col>
                  <Col xs={12} md={6} className="pb-2">
                    <p> ایران فایل اسکان را در شبکه های اجتماعی دنبال کنید </p>
                    <Link href="https://www.instagram.com/iranfile?igsh=YTQwZjQ0NmI0OA==" className="btn btn-success">
                      اینستاگرام
                      <i className="bi bi-instagram h5 me-1 mt-1"></i>
                    </Link>
                    <Link href="tg://resolve?domain=iran_file_eskan" className="btn btn-success me-2">
                      تلگرام
                      <i className="bi bi-telegram h5 me-1 mt-1"></i>
                    </Link>
                  </Col>
                </Row>
                <hr />
                <Card className="border border-black">
                  <Card.Header className="bg-dark text-white text-end">تخفیف های باشگاه مشتریان سایت</Card.Header>
                  <Card.Body className="">
                    <p className="text-end">
                        <i className="bi bi-gift-fill text-success"></i>
                    <span className="text-primary">  در صورت تمدید در طول مدت اشتراک </span>
                    <span className="text-danger"> ۵ درصد </span>
                    از مبلغ پرداختی بصورت اعتبار در حسابتان شارژ می گردد.
                    </p>
                    <p className="text-end">
                        <i className="bi bi-gift-fill text-success"></i>
                    <span className="text-primary"> خرید یا تمدید اشتراک سه ماهه </span>
                    <span className="text-danger"> 7 درصد </span>
                    از مبلغ پرداختی بصورت اعتبار در حسابتان شارژ می گردد.
                    </p>
                    <p className="text-end">
                        <i className="bi bi-gift-fill text-success"></i>
                    <span className="text-primary"> خرید یا تمدید اشتراک شش ماهه </span>
                    <span className="text-danger"> 10 درصد </span>
                    از مبلغ پرداختی بصورت اعتبار در حسابتان شارژ می گردد
                    <span className="text-danger"> + پانزده روز </span>
                    اشتراک رایگان
                    </p>
                    <p className="text-end">
                        <i className="bi bi-gift-fill text-success"></i>
                    <span className="text-primary"> خرید یا تمدید اشتراک یک ساله </span>
                    <span className="text-danger"> 13 درصد </span>
                    تخفیف نقدی
                    <span className="text-danger"> + یک ماه </span>
                    اشتراک رایگان
                    </p>
                  </Card.Body>
                </Card>
                <p className="mt-2 text-end">
                    <i className="bi bi-info-circle ms-1 me-1"></i>    
                    با توجه به استفاده برخی از سایت ها از نام و دامین مشابه این سامانه لطفا به نام
                                (
                                    <span className="text-primary">ایران فایل اسکان</span>
                                )
                                و دامین های سامانه
                <span className="text-primary"> iranfile.net </span>
                و
                <span className="text-primary"> eskan3.ir </span>
                توجه فرمایید
                </p>
              </Card.Body>
              <Card.Footer className="text-muted bg-info-subtle text-end">
                <i className="bi bi-telegram text-info h5 ms-2"></i>
                جهت اطلاع از اخبار و اطلاعیه های سایت لطفا عضو کانال
              <Link href="tg://resolve?domain=iran_file_eskan" className="text-decoration-none"><strong> ایران فایل اسکان </strong></Link>
              با نام
              <span className="fw-bold">
                <Link href="tg://resolve?domain=iran_file_eskan" className="text-decoration-none"> @iran_file_eskan </Link>
              </span>
              در تلگرام شوید.
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
