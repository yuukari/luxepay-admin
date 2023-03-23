import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuthQuery } from "../api/user";

const withAuthRedirect = (WrappedComponent: any) => {
    return (props: any) => {
        const { data: user, isLoading } = useAuthQuery();
        const router = useRouter();

        // useEffect(() => {
        //     if (!isLoading && user){
        //         if (typeof window !== "undefined" && user.isLoggedIn)
        //             router.replace("/dashboard");
        //     }
        // }, [user])

        if (!isLoading && user && user.isLoggedIn){
            if (typeof window !== "undefined")
                router.replace("/dashboard");

            return null;
        }

        return <WrappedComponent {...props}/>;
    }
}

export default withAuthRedirect;