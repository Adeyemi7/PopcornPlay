import AddNewMovie from "../Components/AddNewMovie"
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";




const NewMoviePage = () => {

  const Navigate = useNavigate();

const handlePrevRoute = () => {
  Navigate('/FavouritesMoviesPage')
}

  return (
    <div className="text-white mt-8 w-[95%] mx-auto block">
    <IoIosArrowBack className=" size-12 mb-6" onClick={()=>handlePrevRoute()} />
    <div className="text-2xl uppercase font-bold text-start px-5 md:text-3xl"> Add a New Movie</div>
    <AddNewMovie />
    </div>
  )
}

export default NewMoviePage