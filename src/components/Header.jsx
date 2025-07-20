import React from "react";
import logo from '../assets/netlify.png'

const Header = ({ onSearch, onCreateNote }) => {
    return (
        <header className="sticky top-0 bg-[rgb(28,28,28)] text-gray-200 border-b border-gray-700 shadow-sm z-30 p-4">
            <div className="flex justify-center gap-2">
                <img
                    src={logo}
                    alt="NoteiFy Logo"
                    className="w-6 h-6 mt-1.5 object-contain"
                />
                <h1 className="text-2xl font-bold text-shadow-white">
                    Note<span className="text-indigo-400">i</span>Fy
                </h1>
            </div>
        </header>
    );
};

export default Header;