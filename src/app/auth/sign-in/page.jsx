"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const SignInPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formData = new FormData(e.target);
            const userData = Object.fromEntries(formData.entries());
            const { email, password } = userData;
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: "/dashboard" // Optional: redirect after sign in
            })
            if (error) {
                toast.error(error.message || "An error occurred during sign in");
            } else if (data) {
                toast.success("Signed in successfully!");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl">
                <div className="card-body p-6 sm:p-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-base-content">Welcome Back</h2>

                    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>
                        <TextField
                            isRequired
                            className="w-full"
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) return "Password must be at least 8 characters";
                                if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
                                if (!/[0-9]/.test(value)) return "Must contain at least one number";
                                return null;
                            }}
                        >
                            <Label className="font-medium">Password</Label>
                            <InputGroup>
                                <InputGroup.Input
                                    className="w-full"
                                    size="lg"
                                    type={isVisible ? "text" : "password"}
                                    placeholder="Enter your password"
                                />
                                <InputGroup.Suffix className="pr-1">
                                    <Button
                                        isIconOnly
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        size="sm"
                                        variant="light"
                                        onPress={() => setIsVisible(!isVisible)}
                                    >
                                        {isVisible ? <Eye className="size-5" /> : <EyeSlash className="size-5" />}
                                    </Button>
                                </InputGroup.Suffix>
                            </InputGroup>
                            <Description className="text-xs text-base-content/70 mt-1">
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>
                            <FieldError className="text-red-500 text-sm" />
                        </TextField>
                        <div className="flex gap-2">
                            <Button type="submit" className='w-full'>
                                {isSubmitting ? (
                                    <span className="loading loading-spinner text-base-100"></span>
                                ) : (
                                    <><Check /> Submit</>
                                )}
                            </Button>
                            <Button type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>
                    </Form>

                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default SignInPage;