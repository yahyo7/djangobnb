import { CiUser } from "react-icons/ci"
import { IoMdMenu } from "react-icons/io"


const UserNav = () => {
  return (
    <div className="p-2 relative inline-block border rounded-full">
        <button className="flex items-center">
        <IoMdMenu />
        <CiUser />

        </button>
    </div>
  )
}

export default UserNav