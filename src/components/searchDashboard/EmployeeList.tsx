import { EmployeeListProps, Employee } from "./types";


export function EmployeeList({ items }: EmployeeListProps): React.JSX.Element {
  if (items.length === 0) {
    return <p>Працівників не знайдено</p>
  }

  return (
    <ul className="employee-list flex 
    flex-col gap-4 ">
      {items.map((employee: Employee) => (
        <li key={employee.id} className="employee-item
         py-1 px-1 rounded border-b border-gray-300
         last:border-b-0">
          <div className="employee-info flex
          items-center gap-4">
            <h3 className="employee-title"> {employee.name} - </h3>
            <p className="employeee-text">
              {employee.position} - <span>{employee.department}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}