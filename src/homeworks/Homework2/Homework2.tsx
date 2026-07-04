import { TitleHomework, SubtitleTask } from "@/components/fonts/Fonts";
import { IconSmile } from "@/assets/icons/Icons";
// import styles from "./homework2.module.css";
import './Homework2.scss';
import React from 'react';
import { useState } from "react";

export default function Homework2() {

  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <TitleHomework number={2} />

      <div className="homework-preview-area py-5">
        {/* task 1 */}
        <SubtitleTask number={1} />
        <Homework2Task1 users={users} />
        {/* task 2 */}


        {/* task 3 */}


        {/* task 4 */}



        {/* <UserOnline isOnline={false} />
        <ShowButtonForAdmin isAdmin={true} /> */}
      </div>
    </div>
  );
}


// ==========================================================================================================
// Задача 1. Вводимо логін і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний
// ==========================================================================================================
type User = {
  login: string
  password: string
}
const users: User[] = [
  {
    login: "admin",
    password: "1234",
  },
  {
    login: "jonh",
    password: "qwerty",
  },
  {
    login: "guest",
    password: "guest123",
  },
  {
    login: 'Ivan',
    password: 'ivan123'
  }
]

type Status = 'idle' | 'success' | 'ivan-error' | 'other-error'

function Homework2Task1({ users }: { users: User[] }): React.JSX.Element {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  // const [error, setError] = useState<string>('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmitClick = () => {

    // ======= errors ========
    if (!login.trim() || !password.trim()) {
      setStatus('idle')
      setStatus('other-error')
      return
    }
    if (login === '' || password === '') {
      setStatus('idle')
      setStatus('other-error')
      return
    }
    if (login.length <= 3 || password.length <= 3) {
      setStatus('idle')
      setStatus('other-error')
      return
    }

    // ===============
    if (login === 'Ivan') {
      setStatus('ivan-error')
      return
    }

    const correctUser = users.find((user) => user.login === login && user.password === password)
    if (correctUser) {
      setStatus('success')

      setTimeout(() => {
        setStatus('idle')
        setLogin('')
        setPassword('')
      }, 4000);
      return
    } else {
      setStatus('other-error')
      return
    }
  }

  return (
    <div className="p-4 border border-gray-700 rounded bg-zinc-900/50 mb-6">
      <LoginInput label="Login :" value={login} onChange={setLogin} placeholder="Enter the login..." />
      <PasswordInput label="Password :" value={password} onChange={setPassword} placeholder="Enter the password..." />
      <SubmitButton title="Sumbit" onClick={handleSubmitClick} />

      {/* ===== status ===== */}
      {status === 'success' && (<MessageSmileImg />)}
      {status === 'ivan-error' && <StatusIvan />}
      {status === 'other-error' && <StatusOtherError text="Error" />}

    </div>
  )
}

// ================= INTERFACE =================
interface InputPropsLogin {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}
interface InputPropsPasssword {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  placeholder: string;
}
interface ButtonSubmitProps {
  title: string;
  onClick: () => void;
}


// ================= LOGIN INPUT =================
function LoginInput({ label, value, onChange, placeholder = '0' }: InputPropsLogin): React.JSX.Element {
  const inputId = React.useId()

  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={inputId} className="mr-4 text-zinc-300 min-w-10">
        {label}
      </label>
      <input type="text"
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-zinc-800 rounded pl-2 
        text-white outline-none focus:ring-1 
        focus:ring-blue-500 p-2"
      />
    </div>
  )
}

// ================= PASSWORS INPUT =================
function PasswordInput({ label, value, onChange, placeholder = '0' }: InputPropsPasssword): React.JSX.Element {
  const inputId = React.useId()

  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={inputId} className="mr-4 text-zinc-300 min-w-10">
        {label}
      </label>
      <input type="password"
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-zinc-800 rounded pl-2 
        text-white outline-none focus:ring-1 
        focus:ring-blue-500 p-2"
      />
    </div>
  )
}

// ================= BUTTON SUBMIT =================
function SubmitButton({ title, onClick }: ButtonSubmitProps): React.JSX.Element {
  return (
    <button type="submit" onClick={onClick}
      className="bg-blue-800 p-2 rounded-2xl 
      mb-2 cursor-pointer hover:bg-blue-500 
      transition duration-300">
      {title}
    </button>
  )
}

// ================= MESSAGE SUCCESS =================

function MessageSmileImg(): React.JSX.Element {
  return (
    <div className="flex justify-center">
      <IconSmile />
    </div>
  )
}

function StatusIvan(): React.JSX.Element {
  return (
    <p className="text-blue-500 bg-bg-dark-light 
    text-center rounded-2xl p-3">
      Login is inccorect
    </p>
  )
}

function StatusOtherError({ text }: { text: string }): React.JSX.Element {
  return (
    <p className="bg-red-700 p-4 rounded-2xl text-center">{text}</p>
  )
}



// =========================================
// type UserOnline = {
//   isOnline: boolean;
// }
// type AdminProps = {
//   isAdmin: boolean;
// }

// function UserOnline({ isOnline }: UserOnline): React.JSX.Element {

//   return (
//     <p>
//       {isOnline ? '🟢 Online' : '🔴 Offline'}
//     </p>

//   )
// }
// // ===== task 2 ====
// type ButtonDeleteProps = {
//   title: string;
// }
// function ShowButtonForAdmin({ isAdmin }: AdminProps): React.JSX.Element {
//   return (
//     <div>
//       {isAdmin && <ButtonDelete title="Delete user" />}
//     </div>
//   )
// }
// function ButtonDelete({ title }: ButtonDeleteProps): React.JSX.Element {
//   return (
//     <button className="bg-amber-950 text-white
//     font-semibold text-center p-2 rounded-2xl">
//       {title}
//     </button>
//   )
// }
// // ===== task 3 ====


// function Guest() {

// }