"use client"

import { IoClose } from "react-icons/io5"

interface ModalProps {
    label: string;
    content: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({label, content}) => {
  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60" >
        <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto" >
            <div className={`translate duration-600 h-full translate-y-0 opacity-100`} >
                <div className="w-full h-auto rounded-xl relative flex flex-col bg-white" >
                    <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                        <div className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer" >
                            <IoClose/>
                        </div>
                        <h2 className="text-lg font-semibold" >{label}</h2>
                    </header>

                    <section className="p-6">
                        {/* content */}
                        {content}
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal