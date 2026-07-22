type FilterValue = string | number | boolean | null | undefined

type Selector<T> = (item: T) => FilterValue | FilterValue[]

export default function filterBy<T>(
  items: readonly T[],
  search: string,
  selector: Selector<T>,
): T[] {

  const query = search.trim().toLowerCase()

  if (!query) return [...items]

  return items.filter((item) => {
    const values = selector(item)
    const fields = Array.isArray(values) ? values : [values]

    return fields.some((field) =>
      String(field ?? '')
        .toLowerCase()
        .includes(query)
    )
  })
}