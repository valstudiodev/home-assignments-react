import { RoomSelectionProps } from './typesBookingDashboard'

export function RoomSelection({ values, errors, onChange }: RoomSelectionProps): React.JSX.Element {
  return (
    <fieldset className="section-room flex flex-col-start gap-2">
      <legend className='section-room__title text-2xl mb-3
      underline'>
        1. Інформація про проживання
      </legend>

      <div className="form-group flex items-center
      wrap gap-2 justify-between">
        <label htmlFor="check-in-date">Дата заїзду:</label>
        <input type="date"
          id="check-in-date"
          value={values.checkInDate}
          onChange={(e) => onChange('checkInDate', e.target.value)}
          className='border rounded pl-2 after:text-white'
        />
        {errors.checkInDate && (<span className="error">{errors.checkInDate}</span>)}
      </div>
      <div className="form-group flex items-center
      wrap gap-2">
        <label htmlFor="check-out-date">Дата виїзду:</label>
        <input type="date"
          id="check-out-date"
          value={values.checkOutDate}
          onChange={(e) => onChange('checkOutDate', e.target.value)}
          className='border rounded pl-2 after:text-white'
        />
        {errors.checkOutDate && (<span className='error'>{errors.checkOutDate}</span>)}
      </div>
      <div className="form-group flex items-center
      wrap gap-2">
        <label htmlFor="type-of-room">Тип номера:</label>
        <select name="type-of-room" id="type-of-room"
          value={values.roomType}
          className='border rounded pl-2 after:text-white'
          onChange={(e) => onChange('roomType', e.target.value)}>
          <option value="standart">Standart</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
          <option value="president">President</option>
        </select>
      </div>
      <div className="form-group flex items-center
      wrap gap-2">
        <label htmlFor="adult">Дорослі (18+):</label>
        <input type="number"
          id="adults"
          name="adults"
          value={values.adults}
          onChange={(e) => onChange('adults', JSON.parse(e.target.value))}
          className='border pl-3 rounded w-12.5 text-center'
        />
      </div>
      <div className="form-group flex items-center
      wrap gap-2 justify-between">
        <label htmlFor="children"
          className='grow'>Children:</label>
        <input type="number"
          name="children"
          id="children"
          value={values.children}
          onChange={(e) => onChange('children', JSON.parse(e.target.value))}
          className='border pl-3 rounded w-12.5 text-center'
        />
      </div>
    </fieldset>
  )
}