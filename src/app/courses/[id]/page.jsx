import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BsCheck2Circle, BsClock } from "react-icons/bs";
import { LiaHandPointRightSolid } from "react-icons/lia";

const CourseDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://skillsphere-drab.vercel.app/course.json");
    const data = await res.json();
    const course = data.find(c => c.id === parseInt(id));

    if (!course) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Course not found</h1>
                    <Link href="/courses" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Back to Courses
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="relative h-96 w-full overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8 text-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="inline-block mb-4 px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-400/50">

                        </div>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
                            {course.title}
                        </h1>
                        <p className="text-lg text-slate-200 max-w-2xl">
                            {course.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-wrap gap-8 items-center">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl text-yellow-400">★</span>
                            <div>
                                <div className="font-bold text-slate-900">{course.rating}</div>

                            </div>
                        </div>

                        <div className="border-l border-slate-200 pl-8">
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Level</div>
                            <div className="font-bold text-slate-900">{course.level}</div>
                        </div>

                        <div className="border-l border-slate-200 pl-8">
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Duration</div>
                            <div className="font-bold text-slate-900">{course.duration}</div>
                        </div>

                        <div className="ml-auto">
                            <button className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">What you&apos;ll learn</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {course.learnings && course.learnings.map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <BsCheck2Circle className='text-green-700' />

                                        <p className="text-slate-700 leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Course Curriculum</h2>
                            <div className="space-y-3">
                                {course.curriculum && course.curriculum.map((module, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-lg p-5 hover:border-gray-300 hover:bg-blue-300 transition-all group cursor-pointer">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{module.title}</h3>
                                                <p className="text-sm text-slate-500 mt-2">
                                                    <span className="inline-flex items-center gap-2">
                                                        <LiaHandPointRightSolid className='text-black' />
                                                        {module.lessons} lessons

                                                        <BsClock />
                                                    </span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Instructor</h2>
                            <div className="flex gap-6">
                                <div className="relative w-28 h-28 flex-shrink-0">
                                    {course.instructorImage ? (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-blue-600 rounded-full"></div>
                                            <Image
                                                src={course.instructorImage}
                                                alt={course.instructor}
                                                width={112}
                                                height={112}
                                                className="rounded-full object-cover relative z-10 border-4 border-white"
                                            />
                                        </>
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-white">
                                            <span className="text-4xl font-bold text-white">
                                                {course.instructor.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.instructor}</h3>
                                    <p className="text-yellow-600 font-semibold mb-4">{course.instructorTitle}</p>
                                    <p className="text-slate-700 leading-relaxed mb-5">
                                        {course.instructorBio}
                                    </p>

                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 sticky top-24 space-y-6">
                            <div>
                                <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">This course includes</h3>
                                <div className="space-y-3">
                                    {course.includes && course.includes.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="text-slate-700 font-semibold">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {course.certification && (
                                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                                    <div className="text-3xl text-center mb-3">🎖️</div>
                                    <h4 className="font-bold text-slate-900 text-center mb-2">{course.certification.title}</h4>
                                    <p className="text-xs text-slate-600 text-center">
                                        {course.certification.description}
                                    </p>
                                </div>
                            )}



                            <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 rounded-lg transition-all duration-200">
                                Download Syllabus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
