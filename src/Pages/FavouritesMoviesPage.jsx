
import FavouriteMovies from "../Components/FavouriteMovies"
import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";


const FavouritesMoviesPage = (id) => {
  const Navigate = useNavigate();
  const handlePrevRoute = () => {
    Navigate('')
  }

  return (
    <div className="mx-auto w-[90%] block">
    <IoIosArrowBack  className=" size-12 mb-6 fill-white"  onClick={()=>handlePrevRoute()}/>
      <FavouriteMovies id={id} />
    </div>
  )
}

export default FavouritesMoviesPage