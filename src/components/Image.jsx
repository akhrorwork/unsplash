// react icons
import { FaRegHeart } from "react-icons/fa";

function Image({ image }) {
  const { links, urls, alt_description, user } = image;
  return (
    <div className="relative group">
      <span className="absolute h-8 w-8 border border-white rounded-full flex justify-center items-center top-2 right-2 invisible group-hover:visible opacitiy-0 group-hover:opacitiy-100 transition-all duration-300 cursor-pointer">
        <FaRegHeart className="text-white w-5 h-5" />
      </span>
      <img
        src={urls.regular}
        alt={alt_description}
        className="w-full rounded-md"
      />
    </div>
  );
}

export default Image;
