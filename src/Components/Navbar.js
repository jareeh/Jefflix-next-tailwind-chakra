import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex flex-wrap content-evenly bg-gray-900 p-3 ">
            <Link href="/home">
                <a className="inline-flex items-center p-2 mr-4 ">
                    <span className="text-xl text-white font-bold uppercase tracking-wide">
                        Jefflix
                    </span>
                    <span></span>
                </a>
            </Link>
            <Link href="/login">
                <a className="inline-flex items-center p-2 mr-4">
                    <span className="text-xl text-white font-bold uppercase tracking-wide">
                        Login
                    </span>
                </a>
            </Link>
            <Link href="/register">
                <a className="inline-flex items-center p-2 mr-4">
                    <span className="text-xl text-white font-bold uppercase tracking-wide">
                        Register
                    </span>
                </a>
            </Link>
        </nav>
    );
}
