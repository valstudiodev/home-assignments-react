import { TitleHomework } from "@/components/fonts/Fonts";
// import { useEffect, useRef, useState } from "react";
import { SearchDashboard } from "../../components/searchDashboard/SearchDashboard";
import { SubtitleTask } from "../../components/fonts/Fonts";

export default function Homework3() {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <TitleHomework number={3} />

      <div className="homework-preview-area">

        {/* Task 7 */}
        {/* Задача 7. Динамічний пошук. Є список працівників і поле пошуку. При введенні відображаються усі, які містять вказаний фрагмент */}
        <SubtitleTask number={7} />
        <SearchDashboard />
      </div>
    </div>
  );
}




