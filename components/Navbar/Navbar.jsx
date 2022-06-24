import Link from "next/link";
import request from "../../utils/request";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-8 w-1/12 z-30" />
      <div className="flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <Link href="#" key={key}>
              <a className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">
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
