import { useRef } from "react";

// =================================================
// ====================== types ====================
// =================================================
// const inputRef = useRef<HTMLInputElement>(null);
// const buttonRef = useRef<HTMLButtonElement>(null);
// const divRef = useRef<HTMLDivElement>(null);

// const countRef = useRef<number>(0);
// const nameRef = useRef<string>('');
// const timerRef = useRef<number | null>(null);
// =================================================
// =================================================
// =================================================

export default function UseRefDashboard(): React.JSX.Element {
  return (
    <div>
      <InputFocus />
      <InputManager />
      <ClickCount />
    </div>
  )
}

function InputFocus(): React.JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFocus(): void {
    inputRef.current?.focus()
  }

  return (
    <div className="input-wrap bg-amber-950 p-2
    rounded flex-c-hor gap-2">
      <input type="text" ref={inputRef}
        className="bg-white placeholder:text-black
        pl-3 py-1"
        placeholder="Write" />
      <button
        className="bg-bg-card rounded py-1 px-3
        cursor-pointer"
        onClick={handleFocus}>Focus input</button>
    </div>
  )
}

function InputManager(): React.JSX.Element {
  const textInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFocusAndSelect(): void {
    if (textInputRef.current) {
      textInputRef.current.focus()
      textInputRef.current.select()
    }
  }

  function handleCustomUpLoadClick(): void {
    fileInputRef.current?.click()
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const files = e.target.files
    if (files && files.length > 0) {
      console.log('Обрано файл:', files[0].name);
    }
  }

  return (
    <div>
      <div className="wrap-input flex-c-hor gap-2 mb-4">
        <input type="text" ref={textInputRef} className="border p-1 rounded" />
        <button type="button"
          className="bg-bg-dark-light py-1 px-3 rounded"
          onClick={handleFocusAndSelect}>Focus input</button>
      </div>

      <div className="wrap-input flex-c-hor gap-2">
        <input type="file" ref={fileInputRef}
          onChange={handleFileChange} />
        <button type="button" onClick={handleCustomUpLoadClick}
          className="bg-bg-card rounded py-1 px-3">Upload file</button>
      </div>
    </div>
  )
}



// ==================== tasks =======================
function ClickCount(): React.JSX.Element {
  const countRef = useRef<number>(0)

  function handleClick(): void {
    countRef.current++
    console.log(countRef.current);
  }

  return (
    <div>
      <p>{countRef.current}</p>
      <button
        className="bg-bg-card rounded py-1 px-3
        cursor-pointer"
        onClick={handleClick}>Focus input</button>
    </div>
  )
}