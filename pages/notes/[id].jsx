// lib
import React from "react";
import { useRouter } from "next/router";

const Note = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Single Note Page</h1>
            <h2>Page ID: {id}</h2>
        </div>
    )
};

export default Note;