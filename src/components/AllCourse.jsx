'use client';

import React, { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard';

const AllCourse = () => {
    const [courses, setCourses] = useState([]);
    const [query, setQuery] = useState('');
    const [submitted, setSubmitted] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://skillsphere-drab.vercel.app/course.json`)
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                setLoading(false);
            });
    }, []);

    const filtered = courses.filter(course => {
        const q = submitted.toLowerCase();
        if (!q) return true;
        return (
            course.title?.toLowerCase().includes(q) ||
            course.instructor?.toLowerCase().includes(q) ||
            course.category?.toLowerCase().includes(q)
        );
    });

    const handleSearch = () => setSubmitted(query);

    const handleClear = () => {
        setQuery('');
        setSubmitted('');
    };

    return (
        <div className="min-h-screen bg-white">

            <div className="relative bg-[linear-gradient(135deg,_#020b18_0%,_#0a2550_30%,_#0d4a8f_60%,_#0a2550_100%)] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Master New Skills with{' '}
                        <span className="text-yellow-400">Academic Excellence</span>
                    </h1>

                    <p className="text-lg text-blue-100 mb-8">
                        Explore our curated selection of high-level courses designed for ambitious professionals and students.
                    </p>


                    <div className="flex gap-3 mb-4">
                        <input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSearch()}
                            placeholder="Search for courses, instructors, or subjects..."
                            className="flex-1 px-6 py-3 rounded-lg bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button
                            onClick={handleSearch}
                            className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg transition-colors duration-200"
                        >
                            Search
                        </button>
                    </div>


                    {submitted && (
                        <p className="text-blue-200 text-sm">
                            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for{' '}
                            <span className="text-yellow-300 font-medium">&quot;{submitted}&quot;</span>
                            <button
                                onClick={handleClear}
                                className="ml-3 underline text-yellow-300 hover:text-yellow-200"
                            >
                                Clear
                            </button>
                        </p>
                    )}
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">


                {loading && (
                    <div className="text-center py-20 text-slate-400">
                        <p className="text-xl font-medium">Loading courses...</p>
                    </div>
                )}


                {!loading && filtered.length === 0 && (
                    <div className="text-center py-20 text-slate-400">
                        <p className="text-xl font-medium">No courses found</p>
                        <p className="text-sm mt-2">Try searching something else.</p>
                        <button
                            onClick={handleClear}
                            className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg transition-colors duration-200"
                        >
                            Clear Search
                        </button>
                    </div>
                )}


                {!loading && filtered.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
                        {filtered.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllCourse;