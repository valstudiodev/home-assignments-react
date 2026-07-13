// import { SearchInputProps } from "./types";
import { useState, useRef, useEffect } from "react";
import { Employee } from "./types";
import { initialEmployees } from "../../data/DataTask3";
import { SearchInput } from "./SearchInput";
import { EmployeeList } from "./EmployeeList";

// =======================================================================
// Задача 7. Динамічний пошук. Є список працівників і поле пошуку. 
// При введенні відображаються усі, які містять вказаний фрагмент
// =======================================================================

export function SearchDashboard(): React.JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, []);

  const filteresEmployees = initialEmployees.filter((emp: Employee) => (
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <form className="filter-employees 
     bg-bg-card p-10 rounded-2xl mb-10">
      <SearchInput ref={inputRef} value={searchTerm} onChange={setSearchTerm} />
      <EmployeeList items={filteresEmployees} />
    </form>
  )
}