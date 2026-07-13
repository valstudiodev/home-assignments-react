import { TitleHomework } from "@/components/fonts/Fonts";
// import { useEffect, useRef, useState } from "react";
import { SearchDashboard } from "../../components/searchDashboard/SearchDashboard";
import { SubtitleTask } from "../../components/fonts/Fonts";
import { Game } from "../../components/ticTacToe/Game";
// import Counter from "../../components/counter/Counter";
// import { PasswordVisibility } from "@/components";
// import { ProductSearch } from "../../components/useEffect/UseEffect";
// import { products } from "../../components/useEffect/UseEffect";
import BookingDashboard from "../../components/bookingDashboard/BookingDashboard";

export default function Homework3() {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <TitleHomework number={3} />

      <div className="homework-preview-area">

        {/* Task 7 */}
        {/* Задача 7. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент */}
        <SubtitleTask number={7} />
        <SearchDashboard />

        {/* Задача 10. Хрестики-нулики. З історією (можна повернутись назад) */}
        <SubtitleTask number={10} />
        <Game />

        {/* Задача 14. Розробити форму для бронювання номера у готелі (придумайте самі які мають бути поля) */}
        <SubtitleTask number={14} />
        <BookingDashboard />

        {/* ================= */}
        {/* <Counter /> */}
        {/* <Toggle /> */}
        {/* <PasswordVisibility /> */}
        {/* <ProductSearch items={products} /> */}
      </div>
    </div>
  );
}




