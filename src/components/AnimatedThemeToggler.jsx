import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "../lib/utils";

export const AnimatedThemeToggler = ({
    className,
    duration = 400,
    ...props
}) => {
    const [isDark, setIsDark] = useState(() => {
        // Initialize from localStorage
        const saved = localStorage.getItem("theme");
        return saved === "dark";
    });
    const buttonRef = useRef(null);

    // Apply theme on mount and when isDark changes
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = useCallback(async () => {
        if (!buttonRef.current) return;

        // Fallback for browsers that don't support startViewTransition
        if (!document.startViewTransition) {
            setIsDark(prev => !prev);
            return;
        }

        await document.startViewTransition(() => {
            flushSync(() => {
                setIsDark(prev => !prev);
            });
        }).ready;

        const { top, left, width, height } =
            buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top),
        );

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            },
        );
    }, [duration]);

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className={cn("relative inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", className)}
            {...props}
        >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
};
