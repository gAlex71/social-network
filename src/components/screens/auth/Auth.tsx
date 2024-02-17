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
    <div className="flex w-screen h-full">
      <form className="block m-auto w-96 border border-border p-layout">
        <h1 className="text-center mb-7">{type}</h1>

        <Field placeholder="Enter email" type="email" Icon={AtSign} className="mb-6" />
        <Field placeholder="Enter password" type="password" Icon={KeyRound} className="mb-12" error={{message: 'dont login', type: 'min'}} />

        <div className="text-center">
          <Button>{type}</Button>
        </div>
      </form>
    </div>
  )
}
