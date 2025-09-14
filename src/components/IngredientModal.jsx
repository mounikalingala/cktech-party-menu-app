import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dishes from "../data/mockDishes";
import { FaAngleLeft } from "react-icons/fa6";

export default function IngredientModal({ ingredients }) {
    const { id } = useParams();
    const navigate = useNavigate();

    // find dish by id 
    const dish = dishes.find(d => d.id === Number(id));

    if (!dish) {
        return (
            // If no dish found
            <div className="p-6 text-center">
                <p className="text-red-500">Dish not found</p>
                <button
                    onClick={() => navigate(-1)}
                    className=" font-semibold font-sans text-xl mb-10 flex items-center gap-3"
                >
                    <span><FaAngleLeft size={20} /></span> Ingregient List
                </button>
            </div>
        );
    }

    return (
        <div className="pl-2 pt-4">
            {/* Back button */}
            <button
                onClick={() => navigate(-1)}
                className=" font-semibold font-sans text-xl mb-10 flex items-center gap-3"
            >
                <span><FaAngleLeft size={20} /></span> Ingregient List
            </button>

            <div className="flex border-b">
                {/* Heading and Discription */}
                <div className="w-[80%] flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">
                            {dish.name}
                        </h1>
                        <p className="text-gray-600 mb-4">{dish.description}</p>
                    </div>
                    <div className="mb-2">
                        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
                        <p className="text-gray-600 mb-4">for 2 people</p>
                    </div>
                </div>
                {/* Dish Image */}
                <div>
                    <img
                        src={dish.category?.image || "https://via.placeholder.com/400x200"}
                        alt={dish.name}
                        className="w-full h-60 object-cover rounded mb-4"
                    />

                </div>
            </div>
            {/* Ingredients List */}
            <div className="mt-8 text-gray-600">
                {ingredients.map(ingredient => (
                    <ul className="mt-4">
                        <li>
                            <div className="flex justify-between ">
                                <p>{ingredient.name}</p>
                                <p>{ingredient.quantity}</p>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}
