import { Home, User, BookOpen, Briefcase, Award, FileText, Layers } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", icon: <Home size={22} />, label: "Home" },
  { to: "/about", icon: <User size={22} />, label: "About" },
  { to: "/education", icon: <BookOpen size={22} />, label: "Education" },
  { to: "/experience", icon: <Briefcase size={22} />, label: "Experience" },
  { to: "/projects", icon: <Layers size={22} />, label: "Projects" },
  { to: "/awards", icon: <Award size={22} />, label: "Awards" },
  { to: "/cv", icon: <FileText size={22} />, label: "CV" }
];

export default function Sidebar() {
  return (
    <nav className="fixed bottom-0 md:top-0 md:left-0 md:h-screen md:w-24 w-full bg-white/10 backdrop-blur-xl flex md:flex-col justify-around md:justify-center items-center text-white z-50 shadow-lg">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `p-3 m-2 rounded-xl hover:bg-white/20 transition-all duration-200 ${
              isActive ? "bg-white/30 shadow-md" : ""
            }`
          }
          title={link.label}
        >
          {link.icon}
        </NavLink>
      ))}
    </nav>
  );
}
