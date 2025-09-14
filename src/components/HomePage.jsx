import { useMemo, useState } from 'react'
import dishes from "../data/mockDishes"
import Toggle from './Toggle';
import { FaAngleUp, FaAngleRight } from "react-icons/fa";
import DishList from './DishList';
import Filters from './Filters';

const MEAL_ORDER = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES']

export default function HomePage() {
    const [activeMeal, setActiveMeal] = useState('MAIN COURSE')
    const [search, setSearch] = useState('')
    const [vegFilter, setVegFilter] = useState(true)
    const [nonVegFilter, setNonVegFilter] = useState(false)
    const [selected, setSelected] = useState(() => new Set())
    const [selectedCategory, setSelectedCategory] = useState('North Indian');

    // counts per category (for tab badges)
    const countsByMeal = useMemo(() => {
        const map = {}
        MEAL_ORDER.forEach(m => map[m] = 0)
        for (const d of dishes) {
            if (selected.has(d.id)) map[d.mealType] = (map[d.mealType] || 0) + 1
        }
        return map
    }, [selected])

    // filtered list for active meal
    const filtered = useMemo(() => {
        return dishes.filter(d => {
            if (d.mealType !== activeMeal) return false
            // veg/non-veg filter
            if (!vegFilter && d.type === 'VEG') return false
            if (!nonVegFilter && d.type !== 'VEG') return false
            // search
            if (search.trim()) {
                return d.name.toLowerCase().includes(search.trim().toLowerCase())
            }
            return true
        })
    }, [activeMeal, search, vegFilter, nonVegFilter])

    function toggleDish(id) {
        setSelected(prev => {
            const s = new Set(prev)
            if (s.has(id)) s.delete(id)
            else s.add(id)
            return s
        })
    }
    const categories = useMemo(() => {
        const unique = new Set(dishes.map(d => d.category?.name).filter(Boolean));
        return Array.from(unique);
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-6">
            {/* Search and filter tabs */}
            <Filters activeMeal={activeMeal} setActiveMeal={setActiveMeal} search={search} setSearch={setSearch} countsByMeal={countsByMeal} setNonVegFilter />
            {/* tab count veg nonveg switch */}
            <div className='flex items-center justify-between mb-6 pl-1'>
                <div className='font-semibold font-sans text-md'>
                    {activeMeal
                        ? `${activeMeal.charAt(0).toUpperCase() + activeMeal.slice(1).toLowerCase()}s Selected (${countsByMeal[activeMeal] || 0})`
                        : "No meal selected"}

                </div>

                <div className="flex gap-2 ">
                    {/* Veg Switch */}
                    <div className="flex items-center gap-2">
                        <Toggle
                            enabled={vegFilter}
                            onChange={() => setVegFilter(prev => !prev)}
                            color="green"
                        />
                    </div>
                    {/* Non-Veg Switch */}
                    <div className="flex items-center gap-2">
                        <Toggle
                            enabled={nonVegFilter}
                            onChange={() => setNonVegFilter(prev => !prev)}
                            color="red"
                        />
                    </div>
                </div>
            </div>
            {/* categories */}
            <div className="flex items-center justify-between mb-4">
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none font-sans font-semibold px-3 py-2 text-xl focus:outline-none w-40"
                >
                    <option value="">All Categories</option>
                    {categories.map(c => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
                <FaAngleUp className='text-[#3D3D3D]' size={20} />
            </div>
            {/* Dish list */}
            <div className="mt-4 space-y-3">
                {filtered.length === 0 && <div className="text-sm text-gray-500 p-6 bg-white rounded">No dishes found.</div>}
                {filtered.map(d => (
                    <DishList
                        key={d.id}
                        dish={d}
                        selected={selected.has(d.id)}
                        onToggle={() => toggleDish(d.id)}
                    />
                ))}
            </div>
            {/* Total Dishes */}
            <div className="fixed left-0 bottom-0 w-full">
                <div className='flex justify-between bg-[#FFFAF4] px-8 py-4'>
                    <div className="text-lg text-[#1C1C1C] font-medium ">Total Dish Selected  <span className='font-bold'>  {selected.size}</span></div>
                    <div className="font-bold font-sans text-lg"> <FaAngleRight size={23} /></div>
                </div>
                <div className="bg-white flex justify-center items-center p-5 pr-9">

                    <button className="ml-4 px-4 py-3 w-full font-bold font-sans text-xl bg-black text-white rounded">Continue</button>

                </div>
            </div>
        </div >
    )
}
