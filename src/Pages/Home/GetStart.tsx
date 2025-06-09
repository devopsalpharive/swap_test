import { useNavigate } from "react-router-dom";
import consts from "../../constant";

const GetStart=()=>{

    const navigate = useNavigate();
    
    return (
      <div className="min-h-screen  text-white flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h2 className="text-[30px] md:text-[50px] font-bold leading-tight mb-4 text-black dark:text-white mb-2">
            Try the crypto Trade <br /> of the future, today
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            Lorem ipsum dolor sit amet consectetur. Commodo ultricies tortor
            arcu in. Pretium sed commodo consequat eu be purus vel viverra lorem
            id.
          </p>
          <button onClick={() => { navigate(`/spot/${consts?.MainPair}`) }} className="bg-white text-black font-semibold hover:bg-gray-200 transition rounded-full px-6 py-2">
            Get Started
          </button>
        </div>
      </div>
    );
}
export default GetStart