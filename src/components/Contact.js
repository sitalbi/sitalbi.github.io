import React from "react";

export default function Contact() {
    return (
        <footer className="bg-gray-800 md:sticky top-0 z-10">
            <div className="absolute inset-y-0 left-0 flex justify-center items-center p-5">
                <h3 className="">
                    Copyright © {new Date().getFullYear()} Simon Talbi
                </h3>
            </div>
            <div className="container mx-auto flex p-5 flex-col md:flex-row items-center justify-center">
                <a href="https://github.com/sitalbi" className="mr-5 hover:opacity-80">
                    <img
                        className="object-scale-down h-11 w-11"
                        alt="github"
                        src="../icons/github.png"
                    >
                    </img>
                </a>
                <a href="https://sitalbi.itch.io/" className="mr-5 hover:opacity-80">
                    <img
                        className="object-scale-down h-12 w-12"
                        alt="itch"
                        src="../icons/itch.png"
                    >
                    </img>
                </a>
                <a href="https://www.linkedin.com/in/simon-talbi/" className="mr-5 hover:opacity-80">
                    <img
                        className="object-scale-down h-9 w-9"
                        alt="linkedin"
                        src="../icons/linkedin.png"
                    >
                    </img>
                </a>
            </div>
        </footer>
    );
}