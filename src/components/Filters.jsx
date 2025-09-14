import React from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'

const MEAL_ORDER = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES']

const Filters = ({ activeMeal, setActiveMeal, search, setSearch, countsByMeal }) => {
    return (
        <div>
            {/* search */}
            <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between gap-3 border border-[#ADADAD] rounded-xl px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <FaAngleLeft />
                        <input
                            placeholder={`Search dish for your party....`}
                            className="flex-1 font-medium outline-0 py-2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <FiSearch size={25} className=' text-gray-500 ' />
                </div>

            </div>

            {/* Tabs */}
            <div className="flex gap-2 items-center overflow-x-auto mb-8 mt-6">
                {MEAL_ORDER.map(m => (
                    <button
                        key={m}
                        onClick={() => setActiveMeal(m)}
                        className={`px-2 py-2 rounded-lg border-[#ADADAD] ${m === activeMeal ? 'bg-orange-500 border-0 text-white' : 'bg-white text-gray-700 border-1'}`}
                    >
                        <div className="flex items-center">
                            <span className="font-semibold text-sm ">{m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()}</span>
                            <span className="text-sm px-1 font-semibold rounded">{countsByMeal[m] || 0}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filters