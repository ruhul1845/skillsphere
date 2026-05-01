import Link from 'next/link';
import React from 'react';


const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-8xl font-black text-primary">404</h1>
                <h2 className="text-2xl font-bold">Page Not Found</h2>
                <p className="text-gray-500">The page you are looking for does not exist.</p>
                <Link href="/" className="btn btn-primary mt-4">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;