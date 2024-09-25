// react icon
import { FaSearch } from "react-icons/fa";

function InputForm({ type, name, placeholder }) {
  return (
    <label className="input input-sm md:input-md input-bordered flex items-center gap-2 w-full">
      <input
        type={type}
        className="grow"
        placeholder={placeholder}
        name={name}
      />
      {placeholder == "Search" && <FaSearch className="h-4 w-4 opacity-70" />}
    </label>
  );
}

export default InputForm;
