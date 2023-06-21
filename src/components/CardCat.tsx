type props = {
    image: string;
    description: string;
    title: string;
}

const CardCat = ({ image, description, title }: props) => {
    return (
        <div>
            <div className="p-1 items-center justify-center flex h-full mt-10">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-[300px] mx-auto flex justify-center items-center">
                        <img src={image} alt="" className="max-h-[240px] group-hover:scale-110 duration-300" />
                    </div>
                    <div className="font-semibold ml-5">
                        {title}
                        <p className="text-gray-700 font-light">
                            {description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 mb-1">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#brok</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#baits</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardCat;