"use client";

import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function NavigationHeader() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16 border-b border-gray-200 dark:border-gray-800">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <SignedOut>
        <SignInButton>
          <button className="bg-[#6c47ff] text-white rounded-full px-4 py-2">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full px-4 py-2">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <button className="bg-red-500 text-white rounded-full px-4 py-2">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </header>
  );
}
