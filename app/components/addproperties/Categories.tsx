import React from "react";
import { GiVillage } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { MdBedroomParent, MdCabin } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

type Props = {};
interface CategoryProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoryProps> = ({ dataCategory, setCategory }) => {
    const classNameCategory = "pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100"

  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
        <div onClick={()=>setCategory("Beach")} className={`${classNameCategory} ${dataCategory=="Beach" && '!border-gray-800 !opacity-100'}`}>
          <TbBeach className="h-5 w-5" />
          <span className="text-xs">Beach</span>
        </div>
        <div onClick={()=>setCategory("Villas")} className={`${classNameCategory} ${dataCategory=="Villas" && '!border-gray-800 !opacity-100'} `}>
          <GiVillage className="h-5 w-5" />
          <span className="text-xs">Villas</span>
        </div>
        <div onClick={()=>setCategory("Cabins")} className={`${classNameCategory} ${dataCategory=="Cabins" && '!border-gray-800 !opacity-100'}`}>
          <MdCabin className="h-5 w-5" />
          <span className="text-xs">Cabins</span>
        </div>
        <div onClick={()=>setCategory("Tiny homes")} className={`${classNameCategory} ${dataCategory=="Tiny homes" && '!border-gray-800 !opacity-100'}`}>
          <IoHomeOutline className="h-5 w-5" />
          <span className="text-xs">Tiny homes</span>
        </div>
        <div onClick={()=>setCategory("Bedroom")} className={`${classNameCategory} ${dataCategory=="Bedroom" && '!border-gray-800 !opacity-100'}`}>
          <MdBedroomParent className="h-5 w-5" />
          <span className="text-xs">Bedroom</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
