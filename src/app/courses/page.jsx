import React from 'react';
import CourseCard from '@/components/CourseCard';

const AllCourse = async () => {
    const res = await fetch(`https://skillsphere-drab.vercel.app/course.json`)
    const data = await res.json()

    return (
        <div className="min-h-screen bg-white">
            <div className="relative bg-[linear-gradient(135deg,_#020b18_0%,_#0a2550_30%,_#0d4a8f_60%,_#0a2550_100%)] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Master New Skills with <span className="text-yellow-400">Academic Excellence</span>
                    </h1>

                    <p className="text-lg text-blue-100 mb-8">
                        Explore our curated selection of high-level courses designed for ambitious professionals and students.
                    </p>

                    <div className="flex gap-3 mb-8">
                        <input
                            type="text"
                            placeholder="Search for courses, instructors, or subjects..."
                            className="flex-1 px-6 py-3 rounded-lg bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg transition-colors duration-200">
                            Search
                        </button>
                    </div>


                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {data.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCourse;