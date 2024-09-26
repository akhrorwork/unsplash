// global context
import { useGlobalContext } from "../hooks/useGlobalContext";

// components
import { ImageContainer } from "../components";

// react router dom
import { Link } from "react-router-dom";

function LikedImages() {
  const { likedImages } = useGlobalContext();

  if (likedImages.length === 0) {
    return (
      <div className="h-full flex justify-center align-center gap-10 flex-col">
        <h1 className="text text-center text-4xl ">
          You don't choose any images yet !
        </h1>
        <div className="flex justify-center">
          <Link className="btn btn-primary" to="/">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="align-elements">
      {likedImages.length > 0 && <ImageContainer images={likedImages} />}
    </div>
  );
}

export default LikedImages;
