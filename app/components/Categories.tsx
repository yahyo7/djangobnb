import React from 'react'
import { FaSwimmingPool } from 'react-icons/fa'
import { GiVillage } from 'react-icons/gi'
import { IoHomeOutline } from 'react-icons/io5'
import { MdBedroomParent, MdCabin } from 'react-icons/md'
import { TbBeach } from 'react-icons/tb'

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
            <TbBeach className='h-5 w-5'/>
            <span className='text-xs'>Beach</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
            <GiVillage className='h-5 w-5'/>
            <span className='text-xs'>Villas</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
            <MdCabin className='h-5 w-5'/>
            <span className='text-xs'>Cabins</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
            <IoHomeOutline className='h-5 w-5'/>
            <span className='text-xs'>Tiny homes</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100'>
            <MdBedroomParent className='h-5 w-5'/>
            <span className='text-xs'>Bedroom</span>
        </div>
    </div>
  )
}

export default Categories