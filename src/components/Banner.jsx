import Link from "next/link";
import Image from "next/image";

export default function Banner() {
    return (
        <div className="w-full mx-auto overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[length:300%_300%] animate-gradient"
                style={{
                    background: 'linear-gradient(135deg, #020d1f, #0a1f4e, #0d3476, #0a57b0, #0d3476, #0a1f4e)',
                    backgroundImage: 'url("/img/banner.jpg")',
                }}

            >
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="absolute top-[-80px] left-[-60px] w-[320px] h-[320px] rounded-full blur-3xl animate-orb1"
                    style={{ background: 'radial-gradient(circle, rgba(29,111,232,0.8), transparent 70%)' }}
                />
                <div className="absolute bottom-[-70px] right-[-40px] w-[280px] h-[280px] rounded-full blur-3xl animate-orb2"
                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.7), transparent 70%)' }}
                />
                <div className="absolute top-[40%] left-[45%] w-[200px] h-[200px] rounded-full blur-2xl animate-orb3"
                    style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.5), transparent 70%)' }}
                />

                <div className="absolute inset-0 animate-shimmer"
                    style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)' }}
                />
            </div>

            <div className="relative z-10 min-h-[520px] flex items-center justify-center px-10 md:px-16">
                <div className="max-w-xl text-white text-center">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Upgrade Your Skills <br /> Today
                    </h1>
                    <p className="text-white/80 text-lg mb-8">
                        Learn from Industry Experts and master the most in-demand
                        technologies through our structured, prestigious curriculum.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/login"
                            className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}