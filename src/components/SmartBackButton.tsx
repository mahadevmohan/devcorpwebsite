"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SmartBackButton() {
  const router = useRouter();
  const [backPath, setBackPath] = useState("/projects");
  const [backText, setBackText] = useState("Back to Projects");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the referrer URL
      const referrer = document.referrer;
      const currentHost = window.location.origin;

      // Only use referrer if it's from the same domain
      if (referrer && referrer.startsWith(currentHost)) {
        try {
          const referrerUrl = new URL(referrer);
          const referrerPath = referrerUrl.pathname;
          
          // Remove any anchor hash to get the base path
          const basePath = referrerPath.split('#')[0];
          
          setBackPath(basePath);

          // Set appropriate back text based on the referrer path
          if (basePath === "/" || basePath === "/home") {
            setBackText("Back to Home");
          } else if (basePath === "/projects") {
            setBackText("Back to Projects");
          } else if (basePath === "/blog") {
            setBackText("Back to Blog");
          } else if (basePath.startsWith("/projects/")) {
            // If they came from another project page, go to projects list
            setBackPath("/projects");
            setBackText("Back to Projects");
          } else {
            setBackText("Go Back");
          }
        } catch (error) {
          // If URL parsing fails, keep defaults
          console.log("Could not parse referrer:", error);
        }
      }
    }
  }, []);

  const handleBack = () => {
    // Navigate to the determined back path instead of using browser history
    router.push(backPath);
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-davy-gray hover:text-black transition-all duration-200 border border-davy-gray hover:border-black rounded-md hover:bg-alabaster cursor-pointer hover:shadow-sm active:scale-95"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-left"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      {backText}
    </button>
  );
}
