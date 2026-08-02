// import { Input } from "@/UI/index";
// import { TestUseFetch } from "@/api/TestUseFetch";
import { ProductsPage } from "@/components/productsPage/ProductsPage";
// import { Search } from "@/UI/search/Search";
import { SubtitleTask, TitleHomework } from "@/components/fonts/Fonts";
import { Calculator } from "@/homeworks/Homework6/calculator";
import { } from "@/homeworks/Homework6/useWindowSize/components/WindowSizeInfo";
import { WindowSizeInfo } from "@/homeworks/Homework6";
// =============
import { App, App2 } from "@/homeworks/Homework6/calculator/Test";
import { Parent, TestApp, AppCallback } from "@/homeworks/Homework6/dataGrid/Test";
import { SearchDachboard } from "@/components/useDeferred/UseDererred";
import Search from "@/homeworks/Homework6/useDebounce/components/Search";
import DataGrid from "@/homeworks/Homework6/dataGrid/components/DataGrid";
import HooksTestLab from "@/components/Test/textHooksOrders/TestUseHooks";



export default function Homework6(): React.JSX.Element {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <div className="homework-preview-area flex flex-col items-center">
        <TitleHomework number={6} />


        {/* Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo
          Створіть компонент-калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B. 
          Також є окремий компонент ResultDisplay, який відображає A + B. Обгорніть ResultDisplay у React.memo(). 
          Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay. 
          Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший 
          незалежний стан у батьківському компоненті (наприклад, лічильник, що не впливає на A чи B).
        */}
        {/* <SubtitleTask number={1} /> */}
        {/* <Calculator /> */}


        {/* Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI 
          Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
          DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
          GridRow (обгорнутий у React.memo) відображає один рядок даних.
          Використайте useDeferredValue для пошукового запиту та/або параметрів сортування.
          Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
          Використайте useCallback для функцій-обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.
          Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.
        */}
        {/* <SubtitleTask number={2} /> */}
        {/* <DataGrid /> */}



        {/* Задача 3. useWindowSize – розмір вікна браузера
          Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера. 
          Він повинен оновлюватися при зміні розміру вікна.
          Створіть компонент, який відображає поточні розміри вікна браузера (ширина x висота), використовуючи useWindowSize. 
          На основі розмірів відображати іконки монітора, планшета або телефона.
        */}
        {/* <SubtitleTask number={3} /> */}
        {/* <WindowSizeInfo /> */}



        {/* Задача 4. useDebounce – відкладений виклик функції
          Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах. 
          Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.
          Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, 
          а з невеликою затримкою (наприклад, 500мс) після зупинки введення, використовуючи useDebounce.
        */}
        {/* <SubtitleTask number={4} /> */}
        {/* <Search /> */}



        {/* ========================= tests ========================= */}
        <HooksTestLab />

        {/* <App2 /> */}
        {/* <Parent /> */}
        {/* <TestApp /> */}

        {/* <SearchDachboard /> */}

        {/* <TestUseFetch /> */}
        {/* <ProductsPage /> */}

        {/* <ProductsPage /> */}

        {/* ================= input ================= */}
        {/* <Input
          label="Електронна пошта"
          type="email"
          placeholder="name@example.com" required /> */}
        {/* <Input
          label="Пошук"
          leftIcon={<span>🔍</span>}
          helperText="Введіть мінімум 3 символи для початку пошуку"
        /> */}
        {/* <Input
          label="Пароль"
          type="password"
          error="Пароль має містити щонайменше 8 символів"
        /> */}
      </div>
    </div>
  )
}