function Toggle({ enabled, onChange, color }) {
    return (
        <div className="border-2 border-[#EEEEEE] px-4 py-3 rounded-full ">
            <button
                onClick={onChange}
                className={`relative w-11 h-3 flex justify-center items-center rounded-full transition 
        ${enabled ? `bg-${color}-200` : 'bg-gray-200'}`}
            >
                <span
                    className={`flex justify-center left-0 items-center absolute  w-5 h-5 rounded border-2 border-${color}-500 transition-transform duration-300 
        ${enabled ? 'translate-x-6' : 'translate-x-0'}`}
                >
                    <span className={` bg-${color}-500 rounded-full h-2 w-2 text-transparent `} >.</span>
                </span>
            </button>
        </div>
    );
}
export default Toggle