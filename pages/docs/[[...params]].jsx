// lib
import React from "react";
import { useRouter } from "next/router";

const Note = () => {
    const router = useRouter();
    const { params } = router.query;
    console.log("params optional", params);
    return (
        <div>
            <h1>Single Doc Page</h1>
            <h2>Doc ID:</h2>
        </div>
    )
};

export default Note;