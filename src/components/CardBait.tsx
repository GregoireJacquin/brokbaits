import { Link } from "react-router-dom";
import { Bait } from "../object/Bait";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const CardBait = ({bait}:{ bait:Bait }) => {
    return (
        <div>
            <div className="border border-[#e4e4e4] h-[270px] mb-4 relative overflow-hidden group transition shadow-lg">
                <div className="w-full h-full items-center flex justify-center">
                    {/*image*/}
                    <div className="w-[240px] mx-auto flex justify-center items-center">
                        <img src={bait.img} alt="" className="max-h-[270px] group-hover:scale-110 duration-300" />
                    </div>
                </div>
                {/* button */}
                <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button>
                        <div className="items-center justify-center flex text-white w-12 h-12 bg-red-500">
                            <BsPlus className="text-3xl" />
                        </div>
                    </button>
                    <Link to={`/baits/${bait.id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"><BsEyeFill /></Link>
                </div>

            </div>
            {/* category title price */}
            <div>
                <div className="text-sm capitalize text-gray-500">{bait.category}</div>
                <Link to={`/baits/${bait.id}`}>
                    <h2 className="font-semibold">{bait.title}</h2>
                </Link>
                <div className="font-semibold">{bait.price}€</div>

            </div>
        </div>
    );
}
export default CardBait;