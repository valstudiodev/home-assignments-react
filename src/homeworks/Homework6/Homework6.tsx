import { Input } from "@/UI/index";
import { TestUseFetch } from "@/api/TestUseFetch";
import { ProductsPage } from "@/components/productsPage/ProductsPage";
import { Search } from "@/UI/search/Search";

export default function Honework6(): React.JSX.Element {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <div className="homework-preview-area flex flex-col items-center">




        {/* <TestUseFetch /> */}
        {/* <ProductsPage /> */}

        <ProductsPage />

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