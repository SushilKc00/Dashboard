import { GoClock } from "react-icons/go";
import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { LuFiles } from "react-icons/lu";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { FiTrash } from "react-icons/fi";

const SideLinks = [
  {
    cagtegory: "General",
    links: [
      {
        LinkName: "Overview",
        Src: "/dashboard/overview",
        Icon: <FaArrowUpRightDots size={18} color="#9e9e9e" />,
      },
      {
        LinkName: "Setting",
        Src: "/dashboard/setting",
        Icon: <IoSettingsOutline size={18} color="#9e9e9e" />,
      },
    ],
  },
  {
    cagtegory: "Main Menu",
    links: [
      {
        LinkName: "All files",
        Src: "/dashboard/allfile",
        Icon: <LuFiles size={18} color="#9e9e9e" />,
      },
      {
        LinkName: "Recent",
        Src: "/dashboard/recent",
        Icon: <GoClock size={18} color="#9e9e9e" />,
      },
      {
        LinkName: "Docs",
        Src: "/dashboard/docs",
        Icon: <IoDocumentTextOutline size={18} color="#9e9e9e" />,
      },
      {
        LinkName: "Photos",
        Src: "/dashboard/photos",
        Icon: <MdOutlinePhotoSizeSelectActual size={18} color="#9e9e9e" />,
      },
      {
        LinkName: "Trash",
        Src: "/dashboard/trash",
        Icon: <FiTrash size={18} color="#9e9e9e" />,
      },
    ],
  },
];

export default SideLinks;
