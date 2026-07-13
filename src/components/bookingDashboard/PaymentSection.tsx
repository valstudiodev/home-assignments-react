import { error } from "node:console";
import { PaymentProps } from "./typesBookingDashboard";

export function PaymentMethod({ values, errors, onChange }: PaymentProps): React.JSX.Element {
  return (
    <fieldset className="section-payment">
      <legend className="section-payment
      section-room__title text-2xl mb-3 underline">
        4. Оплата та підтвердження
      </legend>

      <div className="form-group flex-col-start gap-1">
        <label className="form-group__subtitle
        text-xl">
          Спосіб оплати:
        </label>

        <label className="radio-label flex items-center
        gap-2">
          <input type="radio"
            name="paymentMethod"
            value='card'
            checked={values.paymentMethod === 'card'}
            onChange={() => onChange('paymentMethod', 'card')}
          />
          Карткою онлайн прямо зараз
        </label>

        <label className="radio-label flex items-center
        gap-2">
          <input type="radio"
            name="paymentMethod"
            value='on-check-in'
            checked={values.paymentMethod === 'on-check-in'}
            onChange={() => onChange('paymentMethod', 'on-check-in')}
          />
          При заселенні в готель
        </label>

        <div className="form-checkbox ">
          <label className="flex items-center
        gap-2">
            <input type="checkbox"
              checked={values.agreeToTerms}
              onChange={(e) => onChange('agreeToTerms', e.target.value)}
            />
            Я згоден з правилами бронювання та проживання в готелі
          </label>
          {errors.agreeToTerms && (<span className="error">{errors.agreeToTerms}</span>)}
        </div>

      </div>
    </fieldset>
  )
}