import { TitleHomework } from "@/components/fonts/Fonts";
// import { useEffect, useRef, useState } from "react";
// import { Greeting, Person, person, hobbiesList, RenderList, UserStatus, CardProductLaptop, Counter, CounterProf, SimpleInput } from "@/components/Test/Test";
// import { product, GREEN_APPLE_PRODUCT } from "@/constants/products/Test";
// import { CardProduct } from "@/components/Test";
import { Counter, InputFocus } from "@/components/useEffect/UseEffect";
import { SearchDashboard } from "../../components/searchDashboard/SearchDashboard";
import { SubtitleTask } from "../../components/fonts/Fonts";

export default function Homework3() {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <TitleHomework number={3} />

      <div className="homework-preview-area">
        {/* <Counter /> */}
        {/* <InputFocus /> */}

        {/* Task 7 */}
        {/* Задача 7. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент */}
        <SubtitleTask number={7} />
        <SearchDashboard />
      </div>
    </div>
  );
}




