// lib
import React from "react";
import Link from "next/link";

// styles
import "../src/components/styles.module.css";

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