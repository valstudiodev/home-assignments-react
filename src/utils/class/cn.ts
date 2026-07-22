export function cn(...classes: Array<string | false | true | undefined>): string {
  return classes.filter(Boolean).join(' ')
}