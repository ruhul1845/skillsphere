'use client';

import dynamic from 'next/dynamic';

const AllCourse = dynamic(() => import('@/components/AllCourse'), { ssr: false });

export default function Page() {
    return <AllCourse />;
}