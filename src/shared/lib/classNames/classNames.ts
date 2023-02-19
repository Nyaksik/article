type Mods = Record<string, boolean | undefined>

export default function (className: string, mods: Mods = {}, add: string[] = []): string {
  return [className, ...add, ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([mod]) => mod)].join(' ')
}
