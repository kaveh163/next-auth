"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
//import { useContext } from "react";
//import LoginContext from "@/store/login-context";
import Image from "next/image";
import classes from "./layout-header.module.css";
import NavLink from "./nav-link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

// async function getUserId() {
//   const response = await fetch("https://irfeskan.ir/user/checkUserToken", {
//     method: "POST",
//     credentials: "include",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error("Something went wrong");
    
//   }
//   const data = await response.json();
//   return data;
// }

export default function LayoutHeader() {
  //const loginCtx = useContext(LoginContext);
  const path = usePathname();
  
  const { resolvedTheme, theme, setTheme } = useTheme();

  function switchToggle() {
    setTheme(theme == "light" ? "dark" : "light");
  }
   // useEffect(() => {
      //async function getLoginData() {
        //try {
          //loginCtx.updateLoginStatus("login");
          //const loginData = await getUserId();
          //console.log("loginData", loginData);
       // } catch (error) {
          //console.log(error);
        //}
      //} 
      //getLoginData();
    //}, []);
    //console.log("data", loginCtx.loginData);

  return (
    <div className={classes.header}>
      <Navbar expand="sm" className="bg-dark">
        <Container className="d-flex align-items-center">
          <NavLink href="/default">
            <Navbar.Brand
              className={`ms-4  h3 d-flex align-items-center ${
                path.startsWith("/default") ? classes.active : classes.navBrand
              }`}
            >
              <Image
                src="https://iranfile.net/img/5/logoY.png"
                alt="ایران فایل اسکان"
                width={300}
                height={300}
              />
              <span className=""> ایران فایل اسکان</span>
            </Navbar.Brand>
          </NavLink>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav-1">
            <Nav className="">
              <NavLink href="/search">
                <Nav.Link
                  className={`
                    ${
                      path.startsWith("/search") ? classes.active : classes.link
                    } 
                  `}
                >
                  <span className="h6">جستجو ملک</span>
                </Nav.Link>
              </NavLink>
              <NavLink href="/eshterak">
                <Nav.Link
                  className={
                    path.startsWith("/eshterak")
                      ? `${classes.active}`
                      : classes.link
                  }
                >
                  <span className="h6">خرید اشتراک</span>
                </Nav.Link>
              </NavLink>
              <NavDropdown
                title="آگهی"
                id={`${path.startsWith("/addfile") || path.startsWith("/ManageAds") || path.startsWith("/filespecial") ? classes['main-header-dropdown-1-focus']: classes['main-header-dropdown-1']}`}
                className="h6 d-flex align-items-start"
              >
                <NavLink href="/addfile">
                  <NavDropdown.Item
                    className={`d-flex h6 justify-content-start ${
                      path.startsWith("/addfile") ? classes.active : ""
                    }`}
                  >
                    <i className="bi bi-file-earmark-plus ms-2 h6"></i>
                    ثبت آگهی
                  </NavDropdown.Item>
                </NavLink>
                <NavLink href="/ManageAds">
                  <NavDropdown.Item
                    className={`d-flex h6 justify-content-start ${
                      path.startsWith("/ManageAds") ? classes.active : ""
                    }`}
                  >
                    <i className="bi bi-pencil-square ms-2 h6"></i>
                    مدیریت آگهی
                  </NavDropdown.Item>
                </NavLink>
                <NavLink href="/filespecial">
                  <NavDropdown.Item
                    className={`d-flex h6 justify-content-start ${
                      path.startsWith("/filespecial") ? classes.active : ""
                    }`}
                  >
                    <i className="bi bi-star ms-2 h6"></i>
                    آگهی ویژه
                  </NavDropdown.Item>
                </NavLink>
              </NavDropdown>
              <NavLink href="/training">
                <Nav.Link
                  className={`${
                    path.startsWith("/training") ? classes.active : classes.link
                  }`}
                >
                  <span className="h6">آموزش</span>
                </Nav.Link>
              </NavLink>
              <NavLink href="/contact">
                <Nav.Link
                  className={
                    path.startsWith("/contact") ? classes.active : classes.link
                  }
                >
                  <span className="h6">تماس با ما</span>
                </Nav.Link>
              </NavLink>

              <Form className="p-2 h6 d-flex">
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label=""
                  onClick={switchToggle}
                  //ref={switchRef}
                />
              </Form>
              <i className="bi bi-moon-stars-fill mt-2 h6 text-white"></i>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Second Navbar */}
      <Navbar expand="sm" className="bg-dark">
        <Container className="">
          <Navbar.Brand className={`ms-0 d-md-none me-0`}>
            <Dropdown className="me-auto rounded" drop="start">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex flex-row-reverse align-items-center border"
                style={{ backgroundColor: "rgb(13, 202, 240)" }}
              >
                <i className="bi bi-person h6 "></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <NavLink href="/member/account">
                  <Dropdown.Item
                    className={`d-flex justify-content-start h6 ${
                      path.startsWith("/member/account") ? classes.active : ""
                    }`}
                  >
                    <i className="bi bi-gear h6 ms-2"></i>
                     ورود اعضاء
                  </Dropdown.Item>
                </NavLink>

                <Dropdown.Item
                  href="/Login"
                  className="d-flex justify-content-start h6"
                >
                  <i className="bi bi-box-arrow-right ms-2 h6"></i>
                  عضویت
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav-2">
            <Nav className="">
              <NavLink href="/zc/1">
                <Nav.Link
                  className={
                    path.startsWith("/zc/1") ? classes.active : classes.navLink
                  }
                >
                  <span className="h6">زونکن</span>
                </Nav.Link>
              </NavLink>
              <NavDropdown
                title="متقاضی"
                id={`${classes['main-header-dropdown-2']}`}
                className="h6 basic-nav-dropdown mt-1"
              >
                <NavLink href="/appsearch">
                  <NavDropdown.Item
                    className={`d-flex justify-content-start h6 ${
                      path.startsWith("/appsearch") ? classes.active : ""
                    }`}
                  >
                    <i className="bi bi-search ms-2 h6"></i>
                    جستجو
                  </NavDropdown.Item>
                </NavLink>
                <NavLink href="/applicant/-1">
                  <NavDropdown.Item
                    className={`d-flex justify-content-start h6 ${
                      path.startsWith("/applicant/-1") ? classes.active : ""
                    }`}
                  >
                    <i className="bi bi-person-add ms-2 h6"></i>
                    ثبت
                  </NavDropdown.Item>
                </NavLink>
              </NavDropdown>
              <NavLink href="/support">
                <Nav.Link
                  className={
                    path.startsWith("/support")
                      ? classes.active
                      : classes.navLink
                  }
                >
                  <span className="h6">پشتیبانی</span>
                </Nav.Link>
              </NavLink>
            </Nav>

            <Dropdown className="me-auto rounded d-none d-md-block">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="d-flex flex-row-reverse align-items-center border"
                style={{ backgroundColor: "rgb(13, 202, 240)" }}
              >
                <i className="bi bi-person h6 "></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <NavLink href="/member/account">
                  <Dropdown.Item
                    className={`d-flex justify-content-start h6 ${
                      path.startsWith("/member/account") ? classes.active : ""
                    }`}
                  >
                    <i className="bi bi-gear h6 ms-2"></i>
                     ورود اعضاء
                  </Dropdown.Item>
                </NavLink>

                <Dropdown.Item
                  href="/Login"
                  className="d-flex justify-content-start h6"
                >
                  <i className="bi bi-box-arrow-right ms-2 h6"></i>
                  عضویت
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Nav className="me-auto border rounded">
              <NavDropdown title="" id="basic-nav-dropdown" className="">
                <NavDropdown.Item
                  href="#action/3.1"
                  className="d-flex justify-content-start"
                >
                  <i className="bi bi-gear h5 ms-2"></i>
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="d-flex justify-content-start"
                >
                  <i className="bi bi-box-arrow-right ms-2 h5"></i>
                </NavDropdown.Item>
              </NavDropdown>
              <i className="bi bi-person h5 mt-2"></i>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
