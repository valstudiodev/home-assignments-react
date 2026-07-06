import './Homework2.scss';
import React from 'react';
import { useState } from "react";
// ============== STYLES =============
import './Homework2.scss';
// ============== FONTS =============
import { TitleHomework, SubtitleTask } from "@/components/fonts/Fonts";
// ============== IMAGES / ICONS=============
import businessImg from "../../assets/img/cabine-flight.jpeg";
import clouds from "../../assets/img/clouds.jpg";
import { IconSmile } from "@/assets/icons/Icons";

// ============== CONSTANTS =============
import { images, workersList } from "../../constants/ConstantsTasks";


export default function Homework2() {

  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <TitleHomework number={2} />

      <div className="homework-preview-area py-5 w-full">
        {/* task 1 */}
        <SubtitleTask number={1} />
        <FormFieldUser users={users} />

        {/* task 2 */}
        <SubtitleTask number={2} />
        <TicketType />
        {/* task 3 */}
        <SubtitleTask number={3} />
        <TrainerCard items={images} />
        {/* <Counter /> */}

        {/* task 4 */}
        <SubtitleTask number={4} />
        <WorkersList workers={workersList} />

        {/* task 6 */}
        <SubtitleTask number={6} />
        <KitchenDashboard />

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

export function FormFieldUser({ users }: { users: User[] }): React.JSX.Element {
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
    <div className="p-4 border border-gray-700 rounded
     bg-zinc-900/50 mb-10 max-w-125 mx-auto">
      <FieldInput label="Login :" value={login} onChange={setLogin} type='text' placeholder="Enter the login..." />
      <FieldInput label="Password :" value={password} onChange={setPassword} type='password' placeholder="Enter the password..." />
      <SubmitButton title="Sumbit" onClick={handleSubmitClick} />

      {/* ===== status ===== */}
      {status === 'success' && (<MessageSmileImg />)}
      {status === 'ivan-error' && <StatusIvan />}
      {status === 'other-error' && <StatusOtherError text="Error" />}

    </div>
  )
}
// ================= INTERFACE =================
interface FieldInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: string
}
interface ButtonSubmitProps {
  title: string;
  onClick: () => void;
}
// ================= LOGIN INPUT =================
function FieldInput({ label, value, onChange, placeholder = '0', type }: FieldInputProps): React.JSX.Element {
  const inputId = React.useId()

  return (
    <div className="mb-4 flex items-center">
      <label htmlFor={inputId} className="mr-4 text-zinc-300 min-w-10">
        {label}
      </label>
      <input type={type}
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-zinc-800 rounded pl-2 
        text-white outline-none focus:ring-1 
        focus:ring-blue-500 p-2 flex-1"
      />
    </div>
  )
}
// ================= BUTTON SUBMIT =================
function SubmitButton({ title, onClick }: ButtonSubmitProps): React.JSX.Element {
  return (
    <button type="submit" onClick={onClick}
      className="bg-blue-800 px-5 py-2 rounded-2xl 
      mb-2 cursor-pointer hover:bg-blue-500 
      transition duration-300 w-full">
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


// ==========================================================================================================
// Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо
// 1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк,
//  то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
// 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.
// ==========================================================================================================

// ===================== types ================
type Drink = 'beer' | 'cognac' | 'juice'
type Snack = 'yes' | 'no' | null
type Newspaper = string
type TicketType = 'business' | 'economy';

// ============= interface ===============
interface TicketSelectorProps {
  ticketType: TicketType;
  onChange: (value: TicketType) => void;
}
// =============== main component ====================
export function TicketType() {
  const [ticket, setTicket] = useState<TicketType>('economy')

  const backgroundStyle = ticket === 'business'
    ? { backgroundImage: `url(${businessImg})`, backgroundColor: '#1a202c', backgroundSize: 'cover' }
    : { backgroundImage: `url(${clouds})`, backgroundColor: '#ebf8ff', backgroundSize: 'cover' }

  return (
    <div className="p-4 border border-gray-700
    max-w-125 mx-auto rounded bg-zinc-900/50 mb-10"
      style={backgroundStyle}
    >
      <TicketSelector ticketType={ticket} onChange={setTicket} />

      <div>
        {ticket === 'business' ? <BusinessOption /> : <EconomyOption />}
      </div>
    </div>
  )
}
// ============= TicketSelector =============
function TicketSelector({ ticketType, onChange }: TicketSelectorProps): React.JSX.Element {
  const selectId = React.useId()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as TicketType)
  }

  return (
    <select name="ticket-select" id={selectId}
      onChange={handleChange}
      value={ticketType}
      className='text-2xl font-semibold mb-5'>
      <option value="business" className='text-bg-dark'>Business</option>
      <option value="economy" className='text-bg-dark'>Economy</option>
    </select>
  )
}
// ============= BusinessOption =============
function BusinessOption(): React.JSX.Element {
  const [drink, setDrink] = useState<Drink>('beer')
  const [newspaper, setNewspaper] = useState<Newspaper>('')
  const [snack, setSnack] = useState<Snack>(null)

  return (
    <div className='flex flex-col gap-12'>
      <h3 className='text-white text-2xl font-bold 
      text-center uppercase bg-black/50 border py-1'>Options business-class</h3>
      {/* ===== newspaper ===== */}
      <div className='flex justify-between'>
        <label className='text-white border
        bg-black/50 font-bold text-xl p-2'>Choose a newspaper:</label>
        <input type="text"
          value={newspaper}
          onChange={(e) => setNewspaper(e.target.value)}
          placeholder="Newspaper name"
          className='bg-black/30 text-white 
          placeholder:text-white text-md rounded pl-1 
           border-bg py-1 placeholder:font-semibold'
        />
      </div>
      {/* ===== drink ===== */}
      <div className='flex items-center gap-3 justify-between'>
        <label className='text-white text-xl font-bold
        bg-black/50 p-2 border w-full'>Choose a drink:</label>
        <select value={drink} onChange={(e) => setDrink(e.target.value as Drink)}
          className='text-white font-semibold
          bg-black/30 p-2 border'>
          <option value="cognac">Cognac</option>
          <option value="juice">juice</option>
          <option value="beer">Beer</option>
        </select>
      </div>

      {/* =============== */}
      {drink === 'cognac' && (
        <div className='bg-black/30 p-2'>
          <p>Would you like a snack to go with your cognac?</p>
          <label htmlFor="">
            <input type="radio"
              name="snack"
              checked={snack === 'yes'}
              onChange={() => setSnack('yes')}
            /> Yes
          </label>

          <label htmlFor="">
            <input type="radio"
              name="snack"
              checked={snack === 'no'}
              onChange={() => setSnack('no')}
            /> No
          </label>
        </div>
      )}
    </div>
  )
}
// ============= EconomyOption =============
function EconomyOption(): React.JSX.Element {
  const [beer, setBeer] = useState<string>('light')
  const [chips, setChips] = useState<boolean>(false)

  return (
    <div className='flex flex-col gap-10'>
      <h3 className='text-white text-2xl font-bold 
      text-center uppercase bg-black/50 border py-1'>Economy Class Options</h3>

      {/* ===== beer ===== */}
      <div className='flex items-center gap-3'>
        <label htmlFor="drink-option" className='text-white border
        bg-black/50 font-bold text-xl p-2 w-full'>Type of beer:</label>
        <select name="drink" id="drink-option"
          value={beer}
          onChange={(e) => setBeer(e.target.value)}
          className='bg-black/50'
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="non-alcoholic">Non alcoholic</option>
        </select>
      </div>

      {/* ===== chips ===== */}
      <div className='bg-black/50 p-3 text-xl'>
        <label htmlFor="">
          <input type="checkbox"
            checked={chips}
            onChange={(e) => setChips(e.target.checked)}
          /> Want's chips?
        </label>
      </div>
    </div>
  )
}



// ==========================================================================================================
// Задача 3. Елемент тренажера англійської. Виводимо зображення елемента і слово. 
// Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. 
// Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то відтворюємо фразу «Невірно, 
// спробуйте ще раз» (і додаємо червону рамку).
// ==========================================================================================================

type StatusTrainerCard = 'idle' | 'success' | 'error'
interface DisplayCardProps {
  imgUrl: string,
  word: string,
  message: string,
  translation: string,
  status: StatusTrainerCard
}
interface FormCardProps {
  value: string,
  onChange: (value: string) => void,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  status: string,
}
type TrainerItem = {
  id: number | string,
  word: string,
  translation: string,
  imgUrl: string,
}
interface TrainerCardProps {
  items: TrainerItem[],
}

export function TrainerCard({ items }: TrainerCardProps): React.JSX.Element {
  const [status, setStatus] = useState<StatusTrainerCard>('idle')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')
  const [feedbackMessage, setFeedbackMessage] = useState<string>('')

  const currentItem = items[currentIndex]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const correctInput = inputValue.trim().toLowerCase()
    const correctAnswer = currentItem.translation.trim().toLowerCase()

    if (correctInput === correctAnswer) {
      setStatus('success')
      setFeedbackMessage('Well done!')
    } else {
      setStatus('error')
      setFeedbackMessage('Incorrect, try again.')
    }
  }

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setInputValue('')
      setStatus('idle')
      setFeedbackMessage('')
    }
  }

  if (!currentItem) return <p>Тренажер порожній або завершений</p>

  const formatImgUrl = (path: string) => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    return `${baseUrl}${path.replace(/^\//, '')}`;
  };


  return (
    <div className={`trainer-card trainer-card--${status} 
    mx-auto max-w-125 mb-10 p-2`}>
      <TrainerDisplay
        imgUrl={formatImgUrl(currentItem.imgUrl)}
        word={currentItem.word}
        translation={currentItem.translation}
        message={feedbackMessage}
        status={status}
      />
      <TrainerForm
        value={inputValue}
        onChange={setInputValue}
        onSubmit={handleSubmit}
        status={status}
      />

      {status === 'success' && currentIndex < items.length - 1 && (
        <button onClick={handleNext} className="trainer-card__next-btn
        bg-amber-900 rounded-2xl py-1 px-5 w-full
        cursor-pointer hover:bg-amber-700 transition-all
        duration-300">
          Next
        </button>
      )}

    </div>
  )
}

function TrainerDisplay({ imgUrl, word, translation, message, status }: DisplayCardProps): React.JSX.Element {
  return (
    <div className="trainer-display mb-2">
      <div className={`trainer-display__immage-container ${status}`}>
        <img className="trainer-display__image" src={imgUrl} alt={translation} />
      </div>

      <p className="trainer-display__word 
      text-center text-3xl text-bg-dark font-bold
      capitalize bg-white/50 py-3
      ">
        {word}
      </p>

      {status === 'success' && (
        <p className="trainer-display__word-reveal bg-white/20 text-center py-2">English: <strong>{word}</strong></p>
      )}

      {status === 'success' && (
        <p className="trainer-display__translation text-center py-2 bg-black/10">Ukrainian: {translation}</p>
      )}

      {message && (
        <div className={`trainer-display__message ${status} 
        bg-green-900 text-center font-bold text-2xl py-2`}>
          {message}
        </div>)
      }

    </div>
  )
}

function TrainerForm({ value, onChange, onSubmit, status }: FormCardProps): React.JSX.Element {
  const inputId = React.useId()

  return (
    <form action="" className="trainer-form
    flex items-center gap-3 bg-white/5 border 
    border-bg-card p-3 mb-5" onSubmit={onSubmit}>
      <input type="text"
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введіть переклад..."
        disabled={status === 'success'}
        className="trainer-form__input w-full
        pl-3 py-2"
      />

      <button type="submit"
        disabled={!value.trim()}
        className="trainer-form__button bg-blue-700
        py-2 px-10 rounded-2xl font-semibold cursor-pointer
        hover:bg-blue-500 transition-all duration-300"
      >
        Check
      </button>
    </form>
  )
}

// ==========================================================================================================
// 4. Вивести список як маркований список з елементами у форматі (name: salary)
// ==========================================================================================================
interface WorkerItem {
  id: string;
  name: string;
  salary: number;
}
interface WorkersListProps {
  workers: WorkerItem[]
}
export function WorkersList({ workers }: WorkersListProps): React.JSX.Element {
  return (
    <ul className='workers-list max-w-125
    bg-bg-card mx-auto p-4 flex flex-col
    gap-5 mb-10'>
      {workers.map((worker, index) => (
        <li key={`${worker.id}-${index}`}
          className="workers-list__item bg-bg-dark
          pl-3 py-3">
          {worker.name}: {worker.salary}
        </li>
      ))}
    </ul>
  )
}



// ==========================================================================================================
// Задача 6. Задача. На кухню поступають замовлення. Спочатку ми додаємо їх у список “Очікують на виконання”, 
// якщо повар береться робити — замовлення переходить у список “Виконуються”,   якщо замовлення виконано — переходить 
// у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці
// ==========================================================================================================
type OrderStatus = 'pending' | 'cooking' | 'ready'
interface Order {
  id: string,
  title: string,
  status: OrderStatus,
}
interface AddDishProps {
  onAdd: (dishName: string) => void;
}
interface PendingColumnProps {
  items: Order[],
  onCook: (id: string, nextStatus: 'cooking') => void,
}
interface CookingColumnProps {
  items: Order[],
  onReady: (id: string, nextStatus: 'ready') => void,
}
interface ReadyColumnProps {
  items: Order[],
  onServe: (id: string) => void
}

export function KitchenDashboard(): React.JSX.Element {
  const [orders, setOrders] = useState<Order[]>([])


  const addOrder = (dishTitle: string): void => {
    const newDish: Order = {
      id: Date.now().toString(),
      title: dishTitle,
      status: 'pending'
    }

    setOrders([...orders, newDish])
  }

  const moveOrder = (dishId: string, nextStatus: OrderStatus): void => {
    setOrders(
      orders.map((dish) => {
        if (dish.id === dishId)
          return { ...dish, status: nextStatus }
        else
          return dish
      })
    )
  }

  const deleteOrder = (dishId: string): void => {
    setOrders(
      orders.filter(dish => dish.id !== dishId)
    )
  }

  return (
    <div className='kitchen-dashboard bg-bg-card p-4 rounded-2xl 
    text-primary max-w-300 mx-auto'>
      <FormAddDish onAdd={addOrder} />

      <div className='kitchen-dashboard__columns  grid grid-cols-3 gap-4'>
        <PandingDishColumn items={orders.filter(dish => dish.status === 'pending')} onCook={moveOrder} />
        <CookingDishColumn items={orders.filter(dish => dish.status === 'cooking')} onReady={moveOrder} />
        <ReadyDishColumn items={orders.filter(dish => dish.status === 'ready')} onServe={deleteOrder} />
      </div>
    </div>
  )
}

function FormAddDish({ onAdd }: AddDishProps): React.JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputValue.trim()) {
      onAdd(inputValue.trim())
      setInputValue('')
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}
      className='form-add-dish flex items-center
      gap-3 mb-10 max-w-md mx-auto'>
      <input type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Введіть назву страви...'
        className='flex-1 border border-border p-3
        rounded-lg placeholder-primary focus:border-blue-500'
      />
      <button type='submit'
        className='bg-blue-600 hover:bg-blue-500 
        transition-all duration-300 text-primary px-6 py-2
        rounded-lg cursor-pointer'>
        Add
      </button>
    </form>
  )
}

function PandingDishColumn({ items, onCook }: PendingColumnProps): React.JSX.Element {
  return (
    <div className='kitchen-column kitchen-column--pending'>
      <h2 className='kitchen-column__title 
      text-lg text-primary font-bold mb-4 text-center'>
        Очікують на виконання
      </h2>

      <ul className='kitchen-column__list'>
        {items.map((dish) => (
          <li key={dish.id} className='kitchen-column__item
          flex justify-between items-center bg-slate-900/50
          mb-2 rounded-md p-3 border border-border h-15'>
            <span className='capitalize'>{dish.title}</span>
            <button type='button' onClick={() => onCook(dish.id, 'cooking')}
              className='bg-amber-500/10 hover:bg-amber-500
              border border-amber-500/30 transition-all rounded-md
              px-4 py-2 cursor-pointer font-semibold'>
              Готувати
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CookingDishColumn({ items, onReady }: CookingColumnProps): React.JSX.Element {
  return (
    <div className='kitchen-column kitchen-column--cooking'>
      <h2 className='kitchen-column__title
      text-lg text-primary font-bold mb-4 text-center'>
        Виконуються
      </h2>

      <ul className='kitchen-column__list'>
        {items.map((dish) => (
          <li key={dish.id} className='kitchen-column__item
          flex justify-between items-center bg-slate-900/50
          mb-2 rounded-md p-3 border border-border h-15'>
            <span>{dish.title}</span>
            <button type='button' onClick={() => onReady(dish.id, 'ready')}
              className='bg-blue-500/10 hover:bg-blue-500 
              text-blue-400 border border-blue-500/30 
              hover:text-white font-semibold text-sm px-4 py-2 
              rounded-md transition-all cursor-pointer '>
              Приготовано
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ReadyDishColumn({ items, onServe }: ReadyColumnProps): React.JSX.Element {
  return (
    <div className='kitchen-column kitchen-column--ready'>
      <h2 className='kitchen-column__title
      text-lg text-primary font-bold mb-4 text-center'>
        Готові до виносу
      </h2>

      <ul className='kitchen-column__list'>
        {items.map((dish) => (
          <li key={dish.id} className='kitchen-column__item
          flex justify-between items-center bg-slate-900/50
          mb-2 rounded-md gap- p-3 border border-border h-15'>
            <span>{dish.title}</span>
            <button type='button' onClick={() => onServe(dish.id)}
              className='bg-emerald-500/10 hover:bg-emerald-500 
              text-emerald-400 border border-emerald-500/30 
              hover:text-slate-950 font-medium text-sm px-3 py-2 
              rounded-md transition-all cursor-pointer'>
              Подано
            </button>
          </li>
        ))}
      </ul>
    </div>
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




// =============================== counter ======================================
// function Counter() {
//   const [count, setCount] = useState<number>(0)

//   return (
//     <div className="border rounded p-4 text-white bg-bg-card">
//       <h3>Локальний лічильник</h3>
//       <p>Кліки: {count}</p>
//       <button className="bg-amber-500 rounded-2xl
//         border p-3" onClick={() => setCount(count + 1)}>
//         Додати
//       </button>
//     </div>
//   )
// }