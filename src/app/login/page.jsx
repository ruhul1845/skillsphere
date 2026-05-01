"use client";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [emailVal, setEmailVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailVal))
            newErrors.email = "Please enter a valid email address";
        if (passwordVal.length < 8)
            newErrors.password = "Must be at least 8 characters";
        else if (!/[A-Z]/.test(passwordVal))
            newErrors.password = "Must contain at least one uppercase letter";
        else if (!/[0-9]/.test(passwordVal))
            newErrors.password = "Must contain at least one number";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        const { data, error } = await authClient.signIn.email({
            email: emailVal,
            password: passwordVal,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message || "Something went wrong. Please try again.");
        } else {
            toast.success("SignIn successfully! Redirecting…");
            setTimeout(() => router.push("/"), 1500);
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({ provider: "google" });
    };

    return (
        <div className="auth-page">
            {/* Background orbs */}
            <div className="auth-orb auth-orb-1" />
            <div className="auth-orb auth-orb-2" />
            <div className="auth-orb auth-orb-3" />

            {/* Grid texture overlay */}
            <div className="auth-grid-overlay" />

            {/* Glass card */}
            <div className="auth-card">
                {/* Brand */}


                <h1 className="auth-title">Welcome back</h1>
                <p className="auth-subtitle">Sign in to continue your learning journey</p>

                <form onSubmit={onSubmit} noValidate>
                    {/* Email */}
                    <div className="auth-field">
                        <label className="auth-label">
                            Email
                        </label>
                        <input
                            className={`auth-input${errors.email ? " error" : ""}`}
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            value={emailVal}
                            onChange={(e) => setEmailVal(e.target.value)}
                            autoComplete="email"
                        />
                        {errors.email && (
                            <p className="auth-error-msg">{errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="auth-field">
                        <label className="auth-label">
                            Password
                        </label>
                        <div className="auth-input-wrap">
                            <input
                                className={`auth-input${errors.password ? " error" : ""}`}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                value={passwordVal}
                                onChange={(e) => setPasswordVal(e.target.value)}
                                style={{ paddingRight: "44px" }}
                                autoComplete="current-password"
                            />
                            <button
                                type="button"
                                className="auth-pw-toggle"
                                onClick={() => setShowPassword((v) => !v)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible size={20} color="black" />
                                ) : (
                                    <AiOutlineEye size={20} color="black" />
                                )}
                            </button>
                        </div>
                        {errors.password ? (
                            <p className="auth-error-msg">{errors.password}</p>
                        ) : (
                            <p className="auth-hint">
                                At least 8 characters, 1 uppercase, 1 number
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="auth-actions">
                        <button type="submit" className="btn-auth-submit">

                            Sign In
                        </button>
                        <button
                            type="reset"
                            className="btn-auth-reset"
                            onClick={() => { setEmailVal(""); setPasswordVal(""); setErrors({}); }}
                        >
                            Reset
                        </button>
                    </div>
                </form>

                {/* Register */}
                <p className="auth-footer-text">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup">SignUp</Link>
                </p>

                {/* Divider */}
                <div className="auth-divider">
                    <div className="auth-divider-line" />
                    <span className="auth-divider-text">OR</span>
                    <div className="auth-divider-line" />
                </div>

                {/* Google */}
                <button onClick={handleGoogleSignIn} className="btn-google">
                    <FcGoogle size={20} />
                    Continue with Google
                </button>
            </div>
        </div>
    );
}