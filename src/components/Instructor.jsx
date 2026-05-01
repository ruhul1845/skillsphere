import React from 'react';
import Image from 'next/image';

const Instructor = async () => {
    const res = await fetch(`https://skillsphere-drab.vercel.app/course.json`);
    const data = await res.json();

    // Extract unique instructors from courses
    const instructors = data.map(course => ({
        name: course.instructor,
        title: course.instructorTitle,
        image: course.instructorImage,
    }));

    return (
        <section className="py-20 bg-[#f5f0eb]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Top Instructors</h2>
                    <p className="text-slate-500 max-w-lg mx-auto text-base leading-relaxed">
                        Our faculty consists of world-renowned researchers, industry pioneers, and master
                        educators dedicated to your success.
                    </p>
                </div>

                {/* Instructors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                    {instructors.map((instructor, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">

                            {/* Circle Image */}
                            <div className="relative w-36 h-36 mb-5">
                                {instructor.image ? (
                                    <Image
                                        src={instructor.image}
                                        alt={instructor.name}
                                        fill
                                        className="rounded-full object-cover transition-all duration-300 border-4 border-white shadow-md group-hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.6)] group-hover:scale-105"
                                    />
                                ) : (
                                    // Fallback avatar with initials
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center border-4 border-white shadow-md">
                                        <span className="text-3xl font-bold text-white">
                                            {instructor.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Name */}
                            <h3 className="text-base font-semibold text-slate-900 mb-1">
                                {instructor.name}
                            </h3>

                            {/* Title */}
                            <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
                                {instructor.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructor;