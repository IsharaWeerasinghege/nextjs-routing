"use client";
import React from 'react';
import {useParams} from "next/navigation";

function Post() {
    const params = useParams();

    return (
        <div>
            Post {params.id}
        </div>
    );
}

export default Post;