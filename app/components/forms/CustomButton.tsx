
interface CustomButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick, className}) => {
  return (
    <div onClick={onClick} className={`${className} text-center w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer`}>{label}</div>
  )
}

export default CustomButton