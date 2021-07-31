// lib
import React from "react";
import { useRouter } from "next/router";

const Note = () => {
    const router = useRouter();
    const { params } = router.query;
    console.log("params", params);
    return (
        <div>
            <h1>Single Note Page</h1>
            <h2>Page ID:</h2>
        </div>
    )
};

export default Note;