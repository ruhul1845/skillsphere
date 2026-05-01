import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" text-slate-200 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900">

            <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">

                <div>
                    <Link href="/" className="text-2xl font-black text-white">
                        🎓 SkillSphere
                    </Link>
                    <p className="mt-3 text-blue-100 max-w-sm">
                        A modern learning platform for practical skills, expert courses,
                        and career-focused growth.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-blue-100">
                        <li>
                            <Link href="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses" className="hover:text-white transition">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about" className="hover:text-white transition">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-3">Contact</h4>
                    <p className="text-blue-100">hello@skillsphere.dev</p>

                    <div className="flex gap-3 mt-4">
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur"
                        >
                            GH
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur"
                        >
                            X
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition backdrop-blur"
                        >
                            in
                        </a>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/20 py-4 text-center text-sm text-blue-100">
                © 2026 SkillSphere | Terms & Conditions | Privacy Policy
            </div>
        </footer>
    );
}