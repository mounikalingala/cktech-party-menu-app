const DishCard = ({ text, dish, viewDish }) => {

    return (
        <div>
            <p className="text-sm text-gray-500">
                {text && text.length > 50
                    ? text.slice(0, 50) + "..." : ""}
                <button
                    onClick={() => viewDish(dish)}
                    className="text-[#3D3D3D] font-medium focus:outline-none"
                >
                    Read More
                </button>
            </p>
        </div>
    );
}

export default DishCard