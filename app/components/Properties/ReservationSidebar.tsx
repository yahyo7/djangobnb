import React from 'react'

type Props = {}

const ReservationSidebar = (props: Props) => {
  return (
    <aside className='mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl'>
        <h2 className='mb-5 text-2xl' > 200$ per night</h2>

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
    </aside>
  )
}

export default ReservationSidebar