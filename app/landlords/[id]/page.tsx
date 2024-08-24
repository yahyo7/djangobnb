import ContactButton from '@/app/components/ContactButton'
import Properties from '@/app/components/Properties/Properties'
import PropertyItem from '@/app/components/Properties/PropertyItem'
import Image from 'next/image'
import React from 'react'

type Props = {}

const LandlordProperties = (props: Props) => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4' >
            <aside className='col-span-1 mb-4'>
                <div className='flex flex-col items-center p-6 rounded-xl border-gray-300 shadow-xl' >
                    <Image
                    src='/images/avatar.png'
                    width={200}
                    height={200}
                    alt='landlord'
                    className='rounded-full'
                    />
                    <h1 className='mt-6 text-2xl' >Name</h1>
                    <ContactButton/>
                </div>
            </aside>

            <div className='col-span-1 md:col-span-3 pl-0 md:pl-6' >
                <Properties className='grid grid-cols-1 md:grid-cols-3 gap-6'/>
            </div>
        </div>
    </main>
  )
}

export default LandlordProperties