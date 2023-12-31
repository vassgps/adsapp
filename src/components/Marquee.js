import React, { useState, useEffect, useLayoutEffect } from "react";

const Marquee = ({ text, containerClassName }) => {
  useLayoutEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      text !== ""
    ) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, [text]);
  return (
    <div className={containerClassName} data-speed="fast">
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>{text}</li>
        </ul>
      </div>
    </div>
  );
};

Marquee.defaultProps = {
  text: "",
  containerClassName: "",
};
export default Marquee;
