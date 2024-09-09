"use client"

import { useRouter } from "next/navigation"
import MenuLink from "./Navbar/MenuLink"
import { resetAuthCookies } from "../lib/actions"

const LogOutButton: React.FC = () => {
    const router = useRouter()

    const submitLogout = async () => {
        resetAuthCookies();
        router.push('/')
        router.refresh()
    }

    return (
        <MenuLink
        label = "Log Out"
        onClick={submitLogout}
        className="text-airbnb"
        />
    )
}

export default LogOutButton