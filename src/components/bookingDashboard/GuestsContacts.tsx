import { GuestContactsProps } from "./typesBookingDashboard";

export function GuestaContacts({ values, errors, onChange }: GuestContactsProps): React.JSX.Element {
  return (
    <fieldset className="section-contacts flex flex-col *:
    gap-2">
      <legend className="section-contacts__title
      section-room__title text-2xl mb-3 underline">
        2. Дані головного гостя
      </legend>

      <div className="form-group flex items-center
      wrap gap-2 justify-between">
        <label>Прізвище та ім'я:</label>
        <input type="text"
          placeholder="Jonh Smith"
          value={values.fullName}
          onChange={(e) => onChange('fullName', e.target.value)}
          className='border pl-3 rounded'
        />
        {errors.fullName && (<span className="error">{errors.fullName}</span>)}
      </div>

      <div className="form-group flex items-center
      wrap gap-2 justify-between">
        <label>Електронна пошта:</label>
        <input type="email"
          placeholder="example@mail.com"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          className='border pl-3 rounded'
        />
        {errors.email && (<span className="error">{errors.email}</span>)}
      </div>

      <div className="form-group flex items-center
      wrap gap-2 justify-between">
        <label>Номер телефону:</label>
        <input type="tel"
          placeholder="+1506..."
          value={values.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className='border pl-3 rounded'
        />
        {errors.phone && (<span className="error">{errors.phone}</span>)}
      </div>
    </fieldset>
  )
}