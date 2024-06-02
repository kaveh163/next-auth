import classes from "./page.module.css";
import SignUpComponent from "@/components/signup/signup";
import {auth} from "../../auth";

export default async function SignUpPage() {

  const session = await auth();
    console.log("session", session);
  return (
    <div className={`mx-sm-5 px-0 px-sm-5 mx-0`}>
      <SignUpComponent />
    </div>
  );
}
