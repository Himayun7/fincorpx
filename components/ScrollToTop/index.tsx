import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex flex-col items-end gap-3">
      {/* Scroll to top button */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-primary text-white shadow-md transition duration-300 ease-in-out"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          <span className="sr-only">scroll to top</span>
        </div>
      )}

      {/*voxwave ai*/}
      <a
        href="https://voxwave.in"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-md bg-white/80 px-2 py-1.5 shadow-sm backdrop-blur-sm dark:bg-gray-800/80"
      >
        <div className="mr-1 h-4 w-4">
          <Image
            src="/images/logo/voxwaveai.svg"
            alt="VoxWave AI Logo"
            width={16}
            height={16}
            className="h-full w-full dark:invert"
          />
        </div>
        <span className="flex items-baseline text-xs">
          <span className="text-gray-500 dark:text-gray-400">Made in</span>
          <span
            className="ml-1 font-bold text-gray-700 dark:text-gray-200"
            style={{ fontFamily: "Lato Black, sans-serif" }}
          >
            Voxwave AI
          </span>
        </span>
      </a>
    </div>
  );
}
