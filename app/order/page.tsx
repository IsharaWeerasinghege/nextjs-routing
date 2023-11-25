import React from 'react';
import Link from "next/link";

function OrderPage() {
    return (
        <div>
            <h1>order list</h1>

            <ul>
                <li>
                    <Link href="/order/1">order 1</Link>
                </li>
                <li>
                    <Link href="/order/2">order 2</Link>
                </li>
                <li>
                    <Link href="/order/3">order 3</Link>
                </li>
                <li>
                    <Link href="/order/4">order 4</Link>
                </li>
                <li>
                    <Link href="/order/5">order 5</Link>
                </li>
            </ul>
        </div>
    );
}

export default OrderPage;