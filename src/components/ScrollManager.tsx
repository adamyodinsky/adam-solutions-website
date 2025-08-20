import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
  const { pathname } = useLocation();
  const scrollPositions = useRef<Record<string, number>>({});
  const visitedPages = useRef<Set<string>>(new Set());
  const previousPathname = useRef<string>("");

  useEffect(() => {
    // Save scroll position of the previous page before navigating
    if (previousPathname.current && previousPathname.current !== pathname) {
      scrollPositions.current[previousPathname.current] = window.scrollY;
    }

    // Check if this page has been visited before in this session
    const hasVisitedBefore = visitedPages.current.has(pathname);

    // Handle scroll position restoration
    const handleScrollRestoration = () => {
      if (hasVisitedBefore && scrollPositions.current[pathname] !== undefined) {
        // Restore previous scroll position for returning to a page
        window.scrollTo(0, scrollPositions.current[pathname]);
      } else {
        // First visit to this page - scroll to top
        window.scrollTo(0, 0);
        visitedPages.current.add(pathname);
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Add a small delay to ensure page content has loaded
      setTimeout(handleScrollRestoration, 10);
    });

    // Add event listener to continuously track scroll position
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Update previous pathname for next navigation
    previousPathname.current = pathname;

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return null;
}
