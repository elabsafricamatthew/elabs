import React, { useEffect, useState } from "react";

/**
 * Custom hook for horizontal scrolling with media query-like functionality.
 *
 * @param {Object} containerRef - React ref of the container to scroll.
 * @param {number} [startScrollWidth=0] - Optional minimum window width to start scrolling. Scrolling happens by default if not provided.
 */
const useHorizontalScroll = (containerRef, startImmediately = false, startScrollWidth = 0) => {
   const [shouldScroll, setShouldScroll] = useState(false);

   useEffect(() => {
    const checkConditionsForScroll = () => {
      const meetsStartConditions =
        startImmediately ||
        (startScrollWidth > 0 && window.innerWidth <= startScrollWidth);
      setShouldScroll(meetsStartConditions);
    };

     checkConditionsForScroll();

     window.addEventListener("resize", checkConditionsForScroll);

     return () =>
       window.removeEventListener("resize", checkConditionsForScroll);
   }, [startImmediately, startScrollWidth]);

  useEffect(() => {
    if (!shouldScroll) return;

    const container = containerRef.current;
    if (!container) return;

    const scrollSpeed = 1;
    let scrollLeft = 0;
    let scrollDirection = 1;

    const scrollContent = () => {
      scrollLeft += scrollSpeed * scrollDirection;
      container.scrollLeft = scrollLeft;

      if (scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollDirection = -1; 
      } else if (scrollLeft <= 0) {
        scrollDirection = 1;
      }
    };

    const scrollInterval = setInterval(scrollContent, 16);

    return () => clearInterval(scrollInterval);
  }, [containerRef, shouldScroll]);
};

export default useHorizontalScroll;
