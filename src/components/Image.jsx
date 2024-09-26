// react icons
import { FaRegHeart, FaHeart, FaDownload } from "react-icons/fa";

// global context
import { useGlobalContext } from "../hooks/useGLobalContext";

function Image({ image, added }) {
  const { links, urls, alt_description, user } = image;
  const { name, profile_image } = user;
  console.log(image);
  const { dispatch, likedImages } = useGlobalContext();

  const addLikedImage = (image) => {
    const alreadyAdded = likedImages.some((img) => img.id == image.id);

    if (!alreadyAdded) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  };

  return (
    <div className="relative group">
      {!added && (
        <span
          onClick={() => addLikedImage(image)}
          className="absolute h-8 w-8 liked-icon"
        >
          {/* <FaRegHeart className="text-white w-5 h-5" /> */}
          <FaRegHeart className="text-white w-6 h-6" />
        </span>
      )}
      {added && (
        <span
          onClick={() => addLikedImage(image)}
          className="absolute h-8 w-8 liked-icon-liked"
        >
          <FaHeart className="text-red-700 w-6 h-6" />
        </span>
      )}
      <img
        src={urls.regular}
        alt={alt_description}
        className="w-full rounded-md"
      />
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-4 left-4 flex items-center gap-2 text-sm">
        <img
          src={profile_image.large}
          alt={name + " profile avatar"}
          className="w-10 h-10 rounded-full"
        />
        <p className="text-white">{name}</p>
      </span>

      <span>
        <a
          className="absolute opacity-0 download-icon"
          href={links.download + "&force=true"}
          download
        >
          <FaDownload className="w-7 h-7" />
        </a>
      </span>
    </div>
  );
}

export default Image;
