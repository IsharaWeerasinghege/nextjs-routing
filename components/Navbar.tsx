import React from 'react';
import Link from "next/link";

function Navbar() {
    return (
        <div className="bg-gray-200 text-gray-900 flex justify-between items-center p-4">
            <div>
                <Link href="/" className="text-xl font-bold">My Blog</Link>
            </div>
            <div>
                <Link href="/products" className="p-1">Products</Link>
                <Link href="/blog" className="p-1">Blog</Link>
                <Link href="/about" className="p-1">About</Link>
                <Link href="/contact" className="p-1">Contact</Link>
                <Link href="/login" className="p-1">Login</Link>
                <Link href="/register" className="p-1">Register</Link>
            </div>
        </div>
    );
}

export default Navbar;