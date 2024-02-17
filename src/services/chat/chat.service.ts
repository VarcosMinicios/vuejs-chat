export const setErrorImg = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target.src === '/src/assets/user.svg') return
  target.src = '/src/assets/user.svg'
}
