// lib
import React from "react";
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <h1>Main App Home Page</h1>
            <Link href="/notes"><a>Notes Page</a></Link>
            <h2>Docs Page</h2>
        </div>
    )
};

export default Page;