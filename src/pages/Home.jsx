import { useEffect, useState, useRef } from "react";

// custom hooks
import { useFetch } from "../hooks/useFetch";

// components
import { Search, ImageContainer } from "../components";

// react router dom
import { useActionData } from "react-router-dom";

// action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return search;
};

function Home() {
  const [pageParam, setPageParam] = useState(1);
  const searchParamFromAction = useActionData();
  const [allImages, setAllImages] = useState([]);

  // To track previous search param
  const prevSearchParam = useRef(searchParamFromAction);

  const { data, loading, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }&query=${searchParamFromAction ?? "all"}&page=${pageParam}`
  );

  useEffect(() => {
    // If searchParamFromAction changes, reset allImages and pageParam
    if (searchParamFromAction !== prevSearchParam.current) {
      setPageParam(1); // Reset page to 1
      setAllImages([]); // Reset images
      prevSearchParam.current = searchParamFromAction; // Update ref
    }
    console.log(1);
  }, [searchParamFromAction]);

  useEffect(() => {
    if (data) {
      // If the pageParam is 1, replace images, otherwise append new data
      setAllImages((prevImages) =>
        pageParam === 1 ? data.results : [...prevImages, ...data.results]
      );
    }
    console.log(2);
  }, [data, pageParam]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="align-elements">
      <div className="mb-5">
        <Search />
      </div>
      {allImages.length > 0 && <ImageContainer images={allImages} />}

      <div className="my-10">
        <button
          onClick={() => setPageParam((prevPage) => prevPage + 1)}
          className="btn btn-secondary btn-block"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default Home;
