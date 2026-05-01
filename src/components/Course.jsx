import React from 'react';
import CourseCard from './CourseCard';

const Course = async () => {
    const res = await fetch(`https://skillsphere-drab.vercel.app/course.json`)
    const data = await res.json()
    const topRated = data
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);


    return (
        <div className='bg-[#fffff7] border border-white'>
            <div className='max-w-7xl mx-auto mb-20'>
                <div className='max-w-4xl mx-auto '>
                    <div className='max-w-2xl   mx-auto text-center'>
                        <h1 className='text-2xl font-black mt-5'>
                            Popular Courses
                        </h1>
                        <p>Elevate your career with our top rated professional programs</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3  mt-4'>
                    {
                        topRated.map(course => <CourseCard key={course.id} course={course} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;