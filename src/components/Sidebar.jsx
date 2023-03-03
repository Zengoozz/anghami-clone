import { Link } from "react-router-dom";
import { links } from "../assets/constants";

const Sidebar = () => (
  <div className="p-[10px] min-w-[200px] flex flex-col flex-wrap border-r-2">
    {links.map((link, index) => (
      <div className="py-[10px]">
        <Link to={link.to}>
          <span className="flex items-center">
            <link.icon size={`20px`} color={`white`} />
            <p className="ml-[8px] font-medium text-white text-[20px]">
              {link.name}
            </p>
          </span>
        </Link>
      </div>
    ))}
  </div>
);

export default Sidebar;
