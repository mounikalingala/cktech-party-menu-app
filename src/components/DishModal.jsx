import ingredient from "../assets/FLAT.png"
import { Link } from "react-router-dom";
export default function DishModal({ dish, onClose, selected, onToggle }) {
    if (!dish) return null; // don't render if no dish is selected

    return (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div className="bg-white rounded-t-4xl p-5  w-full relative shadow-xl pb-8">
                {/* Dish Image */}
                <div className="bg-gray-900 flex justify-center items-center rounded-2xl pt-2  ">
                    <img
                        src={dish.category?.image || "https://via.placeholder.com/300"}
                        alt={dish.name}
                        className="w-92 h-50 object-cover mt-6"
                    />
                </div>
                {/* Dish Info */}
                <div className="flex items-center justify-between mt-6 mb-4">
                    <div className='flex'>
                        <h3 className="font-semibold text-md">{dish.name}</h3>
                        <span className={`inline-block px-2 py-0.5 rounded text-xs`}> {dish.type === 'VEG' ? (
                            <div >
                                <span
                                    className="flex justify-center items-center absolute  w-5 h-5 rounded border-2 border-green-500 "
                                >
                                    <span className=" bg-green-500 rounded-full h-2 w-2 text-transparent "></span>
                                </span>
                            </div>
                        ) : (
                            <div >
                                <span
                                    className="flex justify-center items-center absolute  w-5 h-5 rounded border-2 border-red-500 "
                                >
                                    <span className=" bg-red-500 rounded-full h-2 w-2 text-transparent "></span>
                                </span>
                            </div>
                        )}
                        </span>
                    </div>
                    <button
                        onClick={onToggle}
                        className={`px-3 font-semibold py-2 text-sm rounded shadow-gray-300 shadow-xl bg-white ${selected ? 'text-orange-500 ' : ' text-green-600 '}`}
                    >
                        {selected ? 'Remove' : 'Add +'}
                    </button>
                </div>
                <p className="mt-2 w-[90%] text-sm text-gray-600">
                    <span className="font-bold">{dish.category?.name}</span> {dish.description}
                </p>

                {/* Button */}
                <div className="flex items-center mt-2 gap-2">
                    <img className='' src={ingredient} alt="" />
                    <Link to={`/ingredients/${dish.id}`} className="text-sm font-bold text-[#FF8800] font-sans"> Ingredient</Link>
                </div>
            </div>
        </div>
    );
}
