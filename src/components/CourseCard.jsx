import Image from 'next/image';
import Link from 'next/link';

const Stars = ({ rating }) => (
    <div className="flex items-center gap-1">
        <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className="text-sm font-medium text-amber-500">{rating}</span>
    </div>
);

const CourseCard = ({ course }) => {
    const { id, title, instructor, instructorImage, duration, rating, image, category } = course;

    return (
        <div className="w-[280px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:-translate-y-1 transition-all duration-300">

            <figure className="relative h-44 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="280px"
                    className="object-cover"
                />
                <span className="absolute top-3 left-3 text-xs font-medium bg-violet-600 text-white rounded-full px-3 py-1">
                    {category}
                </span>
            </figure>

            <div className="p-4 flex flex-col gap-3">

                <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-semibold text-slate-700">{rating}</span>
                    <span className="text-xs text-slate-400">(2,450 ratings)</span>
                </div>

                <h3 className="text-base font-bold text-slate-800 leading-snug line-clamp-2">
                    {title}
                </h3>

                <div className="flex items-center gap-2">
                    {instructorImage ? (
                        <div className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={instructorImage}
                                alt={instructor}
                                width={28}
                                height={28}
                                className="object-cover rounded-full"
                            />
                        </div>
                    ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-slate-600">
                                {instructor.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}
                    <p className="text-sm text-slate-500 truncate">{instructor}</p>
                </div>

                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                        </svg>
                        <span>{duration}</span>
                    </div>

                    <Link
                        href={`/courses/${id}`}
                        className="text-sm font-semibold bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-1.5 rounded-lg transition-colors duration-200"
                    >
                        Details
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;