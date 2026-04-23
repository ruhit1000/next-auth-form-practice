'use client';

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);
        const { data, error } = await authClient.signUp({
            name: userData.name,
            email: userData.email,
            password: userData.password,
        })
        if (error) {
            toast.error(error.message || "An error occurred during sign up");
        }
        if (data) {
            toast.success("Account created successfully! Please check your email to verify your account.");
            e.target.reset();
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl">
                <div className="card-body p-6 sm:p-10">
                    <h2 className="text-3xl font-bold text-center mb-6 text-base-content">Create Account</h2>
                    
                    <Form
                        className="flex flex-col gap-5 w-full"
                        render={(props) => <form {...props} data-custom="foo" />}
                        onSubmit={onSubmit}
                    >
                        <TextField isRequired className="w-full" name="name">
                            <Label className="font-medium">Full Name</Label>
                            <Input placeholder="John Doe" size="lg" />
                        </TextField>
                        
                        <TextField
                            isRequired
                            className="w-full"
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="font-medium">Email</Label>
                            <Input placeholder="john@example.com" size="lg" />
                            <FieldError className="text-red-500 text-sm" />
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
                        
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <Button type="submit" color="primary" className="flex-1" size="lg">
                                <Check className="mr-2 size-5" /> Submit
                            </Button>
                            <Button type="reset" variant="flat" className="flex-1 sm:flex-none" size="lg">
                                Reset
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;