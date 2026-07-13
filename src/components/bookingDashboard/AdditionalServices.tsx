import { AdditionalServicesProps } from "./typesBookingDashboard";

export function AdditionalServices({ values, onChange }: AdditionalServicesProps): React.JSX.Element {
  return (
    <fieldset className="section-services flex flex-col">
      <legend className="section-services__title
      section-room__title text-2xl mb-3 underline">
        3. Додаткові послуги та побажання
      </legend>

      <div className="form-checkbox ">
        <label className="flex items-center gap-2">
          <input type="checkbox"
            checked={values.includeBreakfast}
            onChange={(e) => onChange('includeBreakfast', e.target.value)}
          />
          Включити щоденний сніданок
        </label>
      </div>

      <div className="form-checkbox">
        <label className="flex items-center gap-2">
          <input type="checkbox"
            checked={values.airportTransfer}
            onChange={(e) => onChange('airportTransfer', e.target.value)}
          />
          Потрібен трансфер з аеропорту
        </label>
      </div>

      {/* =============== */}
      {values.airportTransfer && (
        <div className="form-group conditional-field">
          <label>Очікуваний час прибуття:</label>
          <input type="time"
            value={values.arrivalTime}
            onChange={(e) => onChange('arrivalTime', e.target.value)}
          />
        </div>
      )}

      {/* =============== */}
      <div className="form-group flex flex-col gap-3">
        <label>Особливі побажання (необов'язково):</label>
        <textarea name="" id=""
          value={values.specialRequests}
          onChange={(e) => onChange('specialRequests', e.target.value)}
          placeholder="Наприклад: тихий номер, високий поверх..."
          className="border p-3 rounded"
        >

        </textarea>
      </div>

    </fieldset>
  )
} 