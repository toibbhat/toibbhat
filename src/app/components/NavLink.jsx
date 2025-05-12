import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 text-transparent bg-clip-text bg-gradient-to-r from-[#ADB7BE] to-[#ADB7BE] transition-all duration-300 transform hover:scale-105 hover:from-primary-400 hover:to-secondary-600"
    >
      {title}
    </Link>
  );
};

export default NavLink;
