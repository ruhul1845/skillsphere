'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { authClient } from "@/lib/auth-client";
import Image from 'next/image';
import { MdLogout } from "react-icons/md";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const links = [
    ['/', 'Home'],
    ['/courses', 'Courses'],
    ['/profile', 'My Profile'],
];

export default function Navbar() {
    const router = useRouter();
    const path = usePathname();
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const handleSignOut = async () => {
        await signOut();
        router.push("/");
        router.refresh();
    };

    return (
        <div className="sticky top-0 z-50 glass border-b border-white">
            <div className="navbar max-w-7xl mx-auto px-4">

                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            aria-label="Open menu"
                        >
                            ☰
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links.map(([href, label]) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={path === href ? 'font-bold text-primary' : ''}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="/" className="text-2xl font-black gradient-text">
                        🎓 SkillSphere
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links.map(([href, label]) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={path === href ? 'border-b-2 border-blue-500 rounded-none' : ''}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='navbar-end'>
                    {
                        !user ? <div className="navbar-end gap-2">
                            <Link href="/login" className="btn btn-ghost btn-sm text-base font-bold rounded-full">
                                Login
                            </Link>

                        </div>
                            : <div className='flex flex-row justify-center items-center gap-4'>
                                <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                                    <Image
                                        src={user?.image || null}
                                        alt={user?.name || "User"}
                                        width={36}
                                        height={36}
                                    />
                                </div>
                                <MdLogout className="cursor-pointer hover:text-red-500 transition-colors duration-200" size={22} onClick={handleSignOut} />
                            </div>
                    }
                </div>

            </div>
        </div>
    );
}