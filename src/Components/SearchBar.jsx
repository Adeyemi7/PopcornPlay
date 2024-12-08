/* eslint-disable react/prop-types */

const SearchBar = ( {query, setQuery, handleSearch}) => {


  return (
    <div className="">
    <input value={query}
        onChange={(e) => setQuery(e.target.value)} className=" rounded-full w-[90%] mx-auto mt-3 mb-8 block outline-none px-4 py-2  bg-[rgba(33,31,48,100))] xl:p-6"  type="text" placeholder="Search for Movies..." />
    <button onClick={handleSearch} className=" block bg-white rounded-full p-2 justify-self-center px-8 xl:p-3 xl:px-10" > Search </button>
    </div>
  )
}

export default SearchBar