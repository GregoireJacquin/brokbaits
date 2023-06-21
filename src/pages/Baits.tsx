import { useEffect, useState } from "react";
import { Bait } from "../object/Bait";
import CardBait from "../components/CardBait";
import { useNavigate } from "react-router-dom";
import {TbArrowBack} from "react-icons/tb";

const Baits = () => {
    const [baits, setBaits] = useState<Bait[] | []>([]);
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch('http://localhost:5137/baits');
            const data = await response.json();
            setBaits(data);
        }
        fetchCategory();
    }, []);
const navigate = useNavigate();
    return (
        <div>
            <div className="mt-6">
                <button onClick={() => navigate(-1)}>
                    <div className="items-center justify-center flex h-12 w-20 text-gray-500">
                        <TbArrowBack/>
                        <p className="flex justify-center items-center mb-1 ml-1">retour</p>
                    </div>
                </button>
            </div>
            <section className="py-4">
                <div className="container mx-auto pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
                    mx-w-sm mx-auto md:max-w-none md:mx-0">
                        {baits.map((bait : Bait) => 
                            <CardBait bait={bait} key={bait.id} />
                            // return <div  key={bait.id}>{bait.title}</div>
                        )}
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Baits;