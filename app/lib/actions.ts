"use server"

import { cookies } from "next/headers"

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
  cookies().set("session_userid", userId, { 
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
 })
  cookies().set("session_access_token", accessToken, { 
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60, // 60 mins
   })
  cookies().set("session_refresh_token", refreshToken, { 
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}

export async function resetAuthCookies() {
  cookies().set("session_userid", '')
  cookies().set("session_access_token", '')
  cookies().set("session_refresh_token", '')
}

export async function getUserId( ) {
  const userId = cookies().get("session_userid")?.value
  return userId
}

export async function getAccessToken( ) {
  const accessToken = cookies().get("session_access_token")?.value
  return accessToken
}