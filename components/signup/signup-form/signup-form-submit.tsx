"use client"
import Button from "react-bootstrap/Button";
import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
    const { pending } = useFormStatus();
    return (
        <Button variant="success" type="submit" size="sm" disabled={pending}>
            {pending ? "در حال ارسال اطلاعات" : "عضویت"}
        </Button>
    )

}