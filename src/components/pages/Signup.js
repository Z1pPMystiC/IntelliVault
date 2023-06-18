import React from "react";
import '../../App.css';
import Navbar from "../Navbar";
import SignUpPage from "../SignupPage";
import Footer from "../Footer";
import AuthDetails from "../AuthDetails";

export default function SignUp() {
    return (
        <>
            <Navbar />
            <SignUpPage />
            <AuthDetails />
            <Footer />
        </>
    )
}