
const AddNewMovie = () => {
  return (
    <div className="mt-8 w-[95%] mx-auto grid gap-6">
        <p className="">
            <input type="file" name="Upload a Image" id="" />
        </p>

        <div className="grid gap-4">
            <p className="grid gap-5">
                <label htmlFor="Title" className="text-xl">
                Movie Title :
                 </label>
                 <input type="text" name="" id="" className="px-5 ml-4 outline-none box-border rounded-sm !text-black" />
            </p>
            <p className="grid gap-5">
            <label htmlFor="Title" className="text-xl">
            Release Date :
                 </label>
                 <input type="text" name="" id="" className="px-5 ml-4 outline-none box-border rounded-sm !text-black" />
            </p>
        </div>

        <div>
        <button
        className="py-2 block my-6 px-4 rounded mt-4bg-red-500 bg-blue-700 hover:bg-red-900 text-white font-bold"
        >
            Add new Genres
      </button>
        </div>
    </div>
  )
}

export default AddNewMovie