import React from 'react'

export type Property = {
    id:string
    price_per_night: number

}

interface ReservationSidebarProps {
    property: Property
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({property}) => {
  return (
    <aside className='mt-6 p-6 rounded-xl border border-gray-300 shadow-xl'>
        <h2 className='mb-5 text-2xl' > {property.price_per_night}$ per night</h2>

        <div className='mb-6 p-3 border border-gray-400 rounded-xl' >
            <label className='mb-2 block font-bold text-xs'>Guests</label>
            <select name="" id="" className='w-full -ml-1 text-xm'>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
            </select>
        </div>

        <div className='w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl' >Book</div>

        <div className='mb-4 flex justify-between align-middle' >
            <p>200 per night</p>
            <p>800$</p>
        </div>
        <div className='mb-4 flex justify-between align-middle' >
            <p>Airbnb fee</p>
            <p>80$</p>
        </div>
        <hr />
        <div className='mb-4 flex justify-between align-middle font-bold' >
            <p>Total fee</p>
            <p>880$</p>
        </div>
    </aside>
  )
}

export default ReservationSidebar