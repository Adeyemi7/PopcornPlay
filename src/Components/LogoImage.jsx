import { GiPopcorn } from "react-icons/gi";

const LogoImage = () => {
  return (
    <div className=" flex  pb-14  font-bold  pl-2">
        <GiPopcorn className=" fill-white size-14 xl:size-[8rem]" /> 
        <span className=" text-white text-xl flex items-center xl:text-[3rem]">
            PopcornPlay
        </span>
    </div>
  )
}

export default LogoImage