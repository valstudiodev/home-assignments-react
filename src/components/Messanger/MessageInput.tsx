import { MessageInputProps } from "./MessangerTypes";
import { useState, FormEvent } from "react";

export function MessageInput({ onSendMessage }: MessageInputProps): React.JSX.Element {
  const [text, setText] = useState<string>('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setText(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    const message = text.trim()

    if (!message) return

    onSendMessage(message)

    setText('')
  }

  return (
    <form action="" className="form-message
    h-8 flex gap-3"
      onSubmit={handleSubmit}>
      <input type="text" id='message-input'
        className="form-message__input text-[14px]
        bg-black/50 rounded-2xl h-full grow pl-3"
        placeholder="Type a new message"
        value={text}
        onChange={handleChange} />
      <button className="form-message__btn
      bg-bg-card py-1 px-3 rounded-2xl
      h-full hover:bg-blue-950 hover-base 
      cursor-pointer"
        type="submit">
        Send
      </button>
    </form >
  )
}