import React from 'react';
import CourseCard from './CourseCard';

const Trending = async () => {
    const res = await fetch(`https://skillsphere-drab.vercel.app/course.json`)
    const data = await res.json()
    const topRated = data
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 2);

    return (
        <div className='bg-[#fdfded] border border-white py-16'>
            <div className='max-w-7xl mx-auto px-4'>

                <h1 className='text-2xl font-black text-center mb-8'>
                    Trending Courses
                </h1>

                <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                    {topRated.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Trending;