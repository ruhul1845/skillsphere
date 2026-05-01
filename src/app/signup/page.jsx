"use client";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUpPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [fields, setFields] = useState({ name: "", image: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

    const validate = () => {
        const newErrors = {};
        if (!fields.name.trim()) newErrors.name = "Name is required";
        if (fields.image && !/^https?:\/\/.+/.test(fields.image))
            newErrors.image = "Must be a valid URL starting with http(s)://";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.email))
            newErrors.email = "Please enter a valid email address";
        if (fields.password.length < 8)
            newErrors.password = "Must be at least 8 characters";
        else if (!/[A-Z]/.test(fields.password))
            newErrors.password = "Must contain at least one uppercase letter";
        else if (!/[0-9]/.test(fields.password))
            newErrors.password = "Must contain at least one number";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setLoading(true);
        const { data, error } = await authClient.signUp.email({
            name: fields.name,
            email: fields.email,
            password: fields.password,
            image: fields.image,
        });
        console.log({ data, error });
        setLoading(false);
        if (error) {
            toast.error(error.message || "Something went wrong. Please try again.");
        } else {
            toast.success("Account created successfully! Redirecting…");
            setTimeout(() => router.push("/"), 1500);
        }

    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({ provider: "google" });
    };

    const handleReset = () => {
        setFields({ name: "", image: "", email: "", password: "" });
        setErrors({});
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
            <div className="auth-card auth-card--wide">


                <h1 className="auth-title">Create account</h1>
                <p className="auth-subtitle">Join thousands of learners on SkillSphere</p>

                <form onSubmit={onSubmit} noValidate>
                    {/* Name */}
                    <div className="auth-field">
                        <label className="auth-label">
                            Full Name
                        </label>
                        <input
                            className={`auth-input${errors.name ? " error" : ""}`}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={fields.name}
                            onChange={set("name")}
                            autoComplete="name"
                        />
                        {errors.name && <p className="auth-error-msg">{errors.name}</p>}
                    </div>

                    {/* Image URL */}
                    <div className="auth-field">
                        <label className="auth-label">
                            Avatar URL
                        </label>
                        <input
                            className={`auth-input${errors.image ? " error" : ""}`}
                            type="text"
                            name="image"
                            placeholder="https://example.com/avatar.png"
                            value={fields.image}
                            onChange={set("image")}
                        />
                        {errors.image ? (
                            <p className="auth-error-msg">{errors.image}</p>
                        ) : (
                            <p className="auth-hint">Link to your profile picture</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="auth-field">
                        <label className="auth-label">
                            Email
                        </label>
                        <input
                            className={`auth-input${errors.email ? " error" : ""}`}
                            type="email"
                            name="email"
                            placeholder="name@gmail.com"
                            value={fields.email}
                            onChange={set("email")}
                            autoComplete="email"
                        />
                        {errors.email && <p className="auth-error-msg">{errors.email}</p>}
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
                                placeholder="Create a strong password"
                                value={fields.password}
                                onChange={set("password")}
                                style={{ paddingRight: "44px" }}
                                autoComplete="new-password"
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
                            <p className="auth-hint">At least 8 characters, 1 uppercase, 1 number</p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="auth-actions">
                        <button type="submit" className="btn-auth-submit" disabled={loading}>
                            Create Account
                        </button>
                        <button type="reset" className="btn-auth-reset" onClick={handleReset}>
                            Reset
                        </button>
                    </div>
                </form>

                {/* Sign in */}
                <p className="auth-footer-text">
                    Already have an account?{" "}
                    <Link href="/login">Sign in</Link>
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