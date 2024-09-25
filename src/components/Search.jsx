// react router dom
import { Form } from "react-router-dom";

// components
import { InputForm } from "./";

function Search() {
  return (
    <Form
      method="post"
      className="flex aling-center gap-2 max-w-96 w-full mx-auto "
    >
      <InputForm type="text" placeholder="Search" name="search" />
      <button className="btn md:hidden btn-primary btn-sm md:btn-md lg:btn-lg">
        Search
      </button>
    </Form>
  );
}

export default Search;
