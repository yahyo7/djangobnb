import {IoSearch} from 'react-icons/io5'

type Props = {}

const SearchFilter = (props: Props) => {
  return (
    <div className='h-[64px] flex flex-row items-center justify-between border rounded-full'>
        <div className='hidden lg:block'>
            <div className='flex flex-row items-center justify-between'>
                <div className='cursor-pointer w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100' >
                    <p className='text-xs font-semibold'>Where</p>
                    <p className='text-sm' > wanted location</p>
                </div>
                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100' >
                    <p className='text-xs font-semibold'>Check in</p>
                    <p className='text-sm' > add dates</p>
                </div>
                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100' >
                    <p className='text-xs font-semibold'>Check out</p>
                    <p className='text-sm' > add dates</p>
                </div>
                <div className='cursor-pointer h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100' >
                    <p className='text-xs font-semibold'>Who</p>
                    <p className='text-sm' > add guests</p>
                </div>
            </div>
        </div>

        <div className='p-2' >
            <div className='p-2 lg:p-4 bg-airbnb rounded-full text-white hover:bg-airbnb-dark cursor-pointer' >
                <IoSearch/>
            </div>
        </div>
    </div>

  )
}

export default SearchFilter