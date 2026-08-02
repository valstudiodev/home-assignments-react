import { Product } from "@/homeworks/Homework6/dataGrid/types";
import { COLUMNS } from "@/homeworks/Homework6/dataGrid/data/dataProduct";
import { GridHeaderProps } from "@/homeworks/Homework6/dataGrid/types/types";
import { MoveUp, MoveDown } from "lucide-react";
import { memo } from "react";

function SortButtons({ sortConfig, onSort }: GridHeaderProps<Product>): React.JSX.Element {
  console.log('-----Sort buttons render-----');

  return (
    <div className="actions flex
     items-center gap-2 max-[420px]:flex-wrap">
      {COLUMNS.map((column) => {
        const isActive = sortConfig?.key === column.key;

        const SortIcon =
          isActive && sortConfig?.direction === "asc"
            ? MoveUp
            : MoveDown;

        return (
          <button
            key={column.key}
            className="
              bg-lightgrey
              text-center
              text-black
              w-full cursor-pointer
              px-4 py-2
              hover:bg-amber-100
              hover-base
              font-semibold
              inline-flex
              items-center
              gap-2
            "
            onClick={() => onSort(column.key)}
          >
            {column.label}

            {isActive && (
              <SortIcon size={16} />
            )}
          </button>
        );
      })}
    </div>
  )
}

export default memo(SortButtons) as <T>(props: GridHeaderProps<T>) => React.JSX.Element