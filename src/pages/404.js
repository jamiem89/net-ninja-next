import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },1500)
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>This page cannot be found</h2>
            <Link href="/">Go back home</Link>
        </div>
      );
}

export default NotFound;