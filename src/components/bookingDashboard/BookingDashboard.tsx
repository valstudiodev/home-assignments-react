import React, { useState } from "react";
import { BookingFormState } from "./typesBookingDashboard";
import { initialBookingState } from "./Data";
import { RoomSelection, GuestaContacts, AdditionalServices, PaymentMethod } from "./index";
import './style.scss';

// ===============================================================================================
// Задача 14. Розробити форму для бронювання номера у готелі (придумайте самі які мають бути поля)
// ===============================================================================================
export default function BookingDashboard(): React.JSX.Element {
  const [formData, setFormData] = useState<BookingFormState>(initialBookingState)
  const [error, setError] = useState<Partial<Record<keyof BookingFormState, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  function handleChange(name: keyof BookingFormState, value: BookingFormState[keyof BookingFormState]): void {
    if (error[name]) {
      setError(prevError => ({ ...prevError, [name]: '' }))
    }

    setFormData(prevData => ({
      ...prevData, [name]: value
    }))
  }

  function validateForm(): boolean {
    const localErrors: Partial<Record<keyof BookingFormState, string>> = {}

    if (!formData.fullName.trim()) {
      localErrors.fullName = "Будь ласка, вкажіть прізвище та ім'я";
    }

    if (!formData.email.includes('@')) {
      localErrors.email = "Некоректний формат пошти";
    }

    setError(localErrors)

    return Object.keys(localErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault()

    if (isSubmitting === true) return

    if (validateForm() === false) {
      console.log("Форма містить помилки, відправка скасована");
      return
    }

    setIsSubmitting(true)

    try {
      const sanitizedData = {
        ...formData,
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        specialRequests: formData.specialRequests.trim()
      }

      const response = await fetch("https://api.example.com/v1/bookings", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(sanitizedData)
      })

      if (response.ok === false) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Помилка сервера');
      }

      const result = await response.json()
      console.log('Бронювання успішно створено!', result);

      setFormData(initialBookingState)
      alert('Ваш номер успішно заброньовано!')

      // const sanitizedData = { ...formData }; 

      // await new Promise(resolve => setTimeout(resolve, 1500));

      // const result = { success: true, id: "fake-booking-id-123" };
      // console.log('Бронювання успішно створено!', result);

      // setFormData(initialBookingState);

      // setTimeout(() => {
      //   alert('Ваш номер успішно заброньовано!');
      // }, 3000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Невідома помилка'
      console.log('Критична помилка при відправці:', errorMessage);

      setError(prev => ({
        ...prev,
        submitError: "Не вдалося надіслати форму. Спробуйте пізніше або перевірте з'єднання."
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="booking-form
    bg-bg p-10 text-gray flex-col-start
    gap-5">
      <h2 className="booking-form__title
      text-4xl text-center mb-5 underline">
        Форма бронювання готелю
      </h2>

      <RoomSelection values={formData} errors={error} onChange={handleChange} />
      <GuestaContacts values={formData} errors={error} onChange={handleChange} />
      <AdditionalServices values={formData} onChange={handleChange} />
      <PaymentMethod values={formData} errors={error} onChange={handleChange} />

      <button type="submit"
        className="booking-form__submit-btn bg-bg-card
        py-1 px-4 rounded hover:bg-blue-950 hover-base
        cursor-pointer"
        onClick={handleSubmit}>
        Забронювати номер
      </button>
    </form>
  )
}