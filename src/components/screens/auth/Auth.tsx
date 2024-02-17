'use client'

import Button from "@/components/ui/button/Button"
import Field from "@/components/ui/field/Field"
import { AtSign, KeyRound } from "lucide-react"
import { FC } from "react"

interface AuthProps {
  type?: 'Login' | 'Register'
}

export const Auth: FC<AuthProps> = ({ type }) => {
  return (
    <div className="flex">
      <form className="block m-auto">
        <Field placeholder="Enter email:" type="email" Icon={AtSign} />
        <Field placeholder="Enter password:" type="password" Icon={KeyRound} />

        <Button>{type}</Button>
      </form>
    </div>
  )
}
