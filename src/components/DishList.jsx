import { Link } from 'react-router-dom'
import DishCard from './DishCard'
import { useState } from 'react';
import DishModal from './DishModal';
import ingredient from "../assets/ingredient_logo.png"
import IngredientModal from './IngredientModal';

export default function DishList({ dish, selected, onToggle }) {
    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <div className="bg-white rounded shadow-sm p-4 flex gap-4 items-start">
            <div className="flex-1">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <div className='flex mb-2'>
                            <h3 className="font-semibold">{dish.name}</h3>
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

                        <DishCard dish={dish} viewDish={setSelectedDish} text={dish.description} />
                        <DishModal selected={selected} onToggle={onToggle} dish={selectedDish} onClose={() => setSelectedDish(null)} />
                        <div className="flex items-center mt-2 gap-2">
                            <img className='' src={ingredient} alt="" />
                            <Link to={`/ingredients/${dish.id}`} className="text-sm font-bold text-[#FF8800] font-sans"> Ingredient</Link>
                        </div>
                        <div className='hidden'> <IngredientModal dish={dish} /></div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-between items-center">
                <div className='w-20 h-20 rounded overflow-hidden bg-gray-800 flex-shrink-0'>
                    {dish.category?.image ? (
                        <img src={dish.category.image} alt={dish.name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                    )}
                </div>

                <button
                    onClick={onToggle}
                    className={`px-2 font-semibold py-1 mt-[-1rem] text-sm rounded bg-white ${selected ? 'text-orange-500 ' : ' text-green-600 '}`}
                >
                    {selected ? 'Remove' : 'Add +'}
                </button>
            </div>
        </div>
    )
}
