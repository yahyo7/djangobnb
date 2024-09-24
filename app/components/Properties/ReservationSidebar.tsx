"use client"

import useLoginModal from "@/app/hooks/useLoginModal"
import { use, useEffect, useState } from "react"
import { start } from "repl"
import DatePicker from "../forms/Calender"
import apiService from "@/app/services/apiService"
import { format } from "date-fns"

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
}
export type Property = {
    id:string
    price_per_night: number
    guests: number

}

interface ReservationSidebarProps {
    userId: string | null
    property: Property
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({property, userId}) => {

    const loginModal = useLoginModal()
    const [fee, setFee] = useState<number>(0)
    const [nights, setNights] = useState<number>(1)
    const [dateRange, setDateRange] = useState(initialDateRange)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [minDate, setMinDate] = useState(new Date())
    const [guests, setGuests] = useState<number>(1)
    const guestsRange = Array.from({length: property.guests}, (_, i) => i + 1)

    const _setDateRange = (selection: any) => {
        const newStartDate = new Date(selection.startDate)
        const newEndDate = new Date(selection.endDate)

        if (newEndDate <= newStartDate) {
            newEndDate.setDate(newStartDate.getDate() + 1)
        }
        setDateRange({
            ...dateRange,
            startDate: newStartDate,
            endDate: newEndDate
        })
    }

    const performBooking = async() => {
        if (userId) {
            const formData = new FormData()
            formData.append('check_in', format(dateRange.startDate, 'yyyy-MM-dd'))
            formData.append('check_out', format(dateRange.endDate, 'yyyy-MM-dd'))
            formData.append('guests', guests.toString())
            formData.append('total_price', totalPrice.toString())
            formData.append('number_of_nights', nights.toString())

            const response = await apiService.post(`/api/properties/${property.id}/book/`, formData)
            
            if (response.success) {
                console.log('Booking successful')
            } else {
                console.log('Booking failed')
            }
        } else {
            loginModal.open()
        }
    }


    useEffect(() => {
        if (dateRange.endDate && dateRange.startDate) {
            const start = new Date(dateRange.startDate)
            const end = new Date(dateRange.endDate)
            const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
            setNights(days)
            setFee((days * property.price_per_night) * 0.2)
            setTotalPrice((property.price_per_night * days) + fee)
        } else {
            setNights(1)
            setFee((property.price_per_night) * 0.2)
            setTotalPrice(property.price_per_night + fee)
        }

    }, [dateRange])

  return (
    <aside className='mt-6 p-6 rounded-xl border border-gray-300 shadow-xl'>
        <h2 className='mb-5 text-2xl' > {property.price_per_night}$ per night</h2>

        <DatePicker value={dateRange} onChange={(value)=>_setDateRange(value.selection)} />

        <div className='mb-6 p-3 border border-gray-400 rounded-xl' >
            <label className='mb-2 block font-bold text-xs'>Guests</label>
            <select value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} className='w-full -ml-1 text-xm'>
                {guestsRange.map((guest) => (
                    <option key={guest} value={guest}>{guest}</option>
                ))}
            </select>
        </div> 

        <div onClick={performBooking} className='w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl cursor-pointer' >Book</div>

        <div className='mb-4 flex justify-between align-middle' >
            <p>${property.price_per_night} per night</p>
            <p>${property.price_per_night} * {nights} nights</p>
        </div>
        <div className='mb-4 flex justify-between align-middle' >
            <p>Airbnb fee</p>
            <p>${fee}</p>
        </div>
        <hr />
        <div className='mb-4 flex justify-between align-middle font-bold' >
            <p>Total fee</p>
            <p>${totalPrice}</p>
        </div>
    </aside>
  )
}

export default ReservationSidebar