import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import request from "../../utils/request";

function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

const Navbar = () => {
  const scrollRef = useHorizontalScroll();
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-8 w-1/12 z-30" />
      <div
        ref={scrollRef}
        className="flex px-10 space-x-10 overflow-x-scroll sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide"
      >
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <Link href={`/?genre=${key}`} key={key}>
              <a className="transition duration-100 transform cursor-pointer hover:scale-125 hover:text-white active:text-red-500">
                {title}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-8 w-1/12" />
    </nav>
  );
};

export default Navbar;
