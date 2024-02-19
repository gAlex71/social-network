'use client'

import Button from "@/components/ui/button/Button"
import Field from "@/components/ui/field/Field"
import { AtSign, KeyRound } from "lucide-react"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { AuthFormType } from "./auth.types"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

interface AuthProps {
  type?: 'Login' | 'Register'
}

export const Auth: FC<AuthProps> = ({ type }) => {
  const { register, handleSubmit } = useForm<AuthFormType>({mode: 'onChange'});

  const { push } = useRouter();

  const onSubmit: SubmitHandler<AuthFormType> = async(data) => {
    if(type === 'Login') {
      await signIn('credentials', {
        redirect: false,
        ...data
      })
    }else{
      await signIn('credentials', {
        redirect: false,
        username: 'name',
        ...data
      })
    }

    push('/');
  }

  return (
    <div className="flex w-screen h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="block m-auto w-96 border border-border p-layout">
        <h1 className="text-center mb-7">{type}</h1>

        <Field {...register('email', {required: true})} placeholder="Enter email" type="email" Icon={AtSign} className="mb-6" />
        <Field {...register('password', {required: true})} placeholder="Enter password" type="password" Icon={KeyRound} className="mb-12" error={{message: 'dont login', type: 'min'}} />

        <div className="text-center">
          <Button type="submit">{type}</Button>
        </div>
      </form>
    </div>
  )
}
