import {auth} from "../../auth";
import classes from "./page.module.css";

export default async function AddFile() {
    const session = await auth();
    console.log("addfilesession", session.user);
    return (
        <p className={`${classes.header} fs-2`}>فایل اضافه شده</p>
    )
}