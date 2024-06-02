import classes from "./page.module.css";

export default function ApplicantDetailPage({params}) {
    return (
        <p className={classes.header}>applicant id = {params.id}</p>
    )
}