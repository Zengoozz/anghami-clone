import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const searchTypedIn = (e) => {
    setSearchTerm(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  }

  return (
    <form onSubmit={submitSearch}>
      <div className="ml-[20px] mt-[20px] px-[15px] bg-white w-4/6 flex items-center rounded-[20px]">
        <input className=" h-[50px] w-full rounded-[20px] text-blueCustom text-[20px] font-medium placeholder:text-gray-500 placeholder:font-medium focus:outline-none capitalize" type="text" placeholder="Search" value={searchTerm} onChange={searchTypedIn} />
        <MdCancel className="hover:cursor-pointer" onClick={() => setSearchTerm('')} />
      </div>
    </form>
  );
}

export default Searchbar;
