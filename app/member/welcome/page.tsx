import WelcomeComponent from "@/components/welcome/welcome";
import {auth} from "../../../auth";

export default async function WelcomePage() {
    const session = await auth();
    console.log("welcomesession", session!.user);
    return (
        <div>
            <WelcomeComponent/>
        </div>
    )
}