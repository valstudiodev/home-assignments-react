import { useState, useEffect } from "react";

export function TestGridLayout(): React.JSX.Element {
  return (
    <div className="parent">
      <div className="child bg-gray w-full h-100"></div>
      <div className="child bg-gray w-full h-100"></div>
      <div className="child bg-gray w-full h-100" ></div>
    </div>
  )
}



interface User {
  name: string;
  age: number;
}

export function UserProfile() {
  const [user, setUser] = useState<User>({ name: 'Alex', age: 30 });


  const handleMutateAge = () => {
    user.age += 1
    setUser(user)
  }

  const handleReset = () => {
    setUser((prev) => ({
      ...prev, age: 0
    }))
  }

  const handleImmutableAge = () => {
    setUser((prev) => (
      { ...prev, age: prev.age + 1 }
    ))
  }

  return (
    <div>
      <h2>{user.name}, {user.age} age</h2>
      <button className="bg-amber-600" onClick={handleMutateAge}>+1 age</button>
      <button className="bg-amber-950" onClick={handleImmutableAge}>+1 age</button>
      <button className="bg-bg-dark-light" onClick={handleReset}>Reset</button>
    </div>
  );
}



export function Timer(): React.JSX.Element {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1)

    }, 1000);

    return () => {
      clearInterval(intervalId)
    };
  }, []);


  return (
    <div>Time: {seconds} </div>
  )
}





// 1. Якщо це кастомний хук, він повертає boolean (або number), а не JSX
export function useScrollTracker(): number {
  const [scrollY, setscrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setscrollY(window.scrollY);
    };

    handleScroll(); // Перевірка при завантаженні

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}

// 2. Компонент кнопки використовує значення з хука
export function AddButton(): React.JSX.Element | null {
  const isScrolledPast50 = useScrollTracker();

  // if (scrollY <= 50) return null

  return (
    <>
      {scrollY > 50 && (
        <button className="bg-green-700 p-2">
          Button {isScrolledPast50 ? '(Scroll > 50px)' : ''}
        </button>
      )}
    </>
  );
}