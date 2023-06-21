import { useEffect, useState } from "react";
import { Bait } from "../object/Bait";
import { useNavigate, useParams } from "react-router-dom";
import { TbArrowBack } from 'react-icons/tb';

const DetailBait = () => {
    let { id } = useParams();
    const [bait, setBait] = useState<Bait>();
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch(`http://localhost:5137/baits/${id}`);
            const data = await response.json();
            setBait(data);
        }
        fetchCategory();
    }, [id]);
    const navigate = useNavigate();
    return (
        bait &&
        <div>
            <div className="mt-6">
                <button onClick={() => navigate(-1)}>
                    <div className="items-center justify-center flex h-12 w-20 text-gray-500">
                        <TbArrowBack/>
                        <p className="flex justify-center items-center mb-1 ml-1">retour</p>
                    </div>
                </button>
            </div>
            <section className="flex items-center">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
                            <img className="max-w-[300px] lg:max-w-sm" src={bait?.img} alt="" />
                        </div>
                        <div className="flex-1 text-center lg:text-left ">
                            <h1 className="text-[26px] font-semibold mb-2 max-w-[450px] mx-auto lg:mx-0">{bait?.title}</h1>
                            <div className="text-xl text-red-500 font-medium mb-6">{bait?.price}
                                <div className="font-light text-gray-400 text-xs">Hors frais de ports</div>
                            </div>
                            <p className="mb-4">{bait?.description}</p>
                            <div className={`font-light pb-4 ${bait.stock && bait.stock > 0 ? 'text-green-500' : 'text-red-700'}`}>{bait.stock && bait.stock > 0 ? "En stock" : "Plus de stock"}</div>
                            <button className="bg-slate-950 py-4 px-8 text-white">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailBait