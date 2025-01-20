import React, { useEffect } from 'react';
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
    <div className='font-raleway text-center py-2'>Expert Contrator For</div>
    <div className="scroller border" data-speed="slow">
      <ul className="tag-list scroller__inner">
        <li><img src="/logo/1.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="/logo/2.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="/logo/3.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="/logo/4.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="/logo/5.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="/logo/6.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="/logo/7.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="/logo/8.png" className='w-24 lg:w-32' alt="" /></li>
        <li><img src="" alt="" /></li>
      </ul>
    </div>
    </>
  );
};

export default InfiniteScroll;
