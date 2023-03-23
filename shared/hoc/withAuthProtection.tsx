import { useRouter } from "next/router";
import { useEffect } from "react";

import { useAuthQuery } from "../api/user";

const withAuthProtection = (WrappedComponent: any) => {
    return (props: any) => {
        const { data: user, isLoading } = useAuthQuery();
        const router = useRouter();

        // useEffect(() => {
        //     if (!isLoading && user){
        //         if (typeof window !== "undefined" && !user.isLoggedIn)
        //             router.replace("/");
        //     }
        // }, [user]);

        if (!isLoading && user && !user.isLoggedIn){
            if (typeof window !== "undefined")
                router.replace("/");

            return null;
        }

        return <WrappedComponent {...props}/>;
    }
}

export default withAuthProtection;