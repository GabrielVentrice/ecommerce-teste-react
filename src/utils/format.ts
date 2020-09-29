export function formatReais(price: number) {
  let text = price.toString()

  text = text.replace(/([0-9]{2})$/g, ',$1')

  if (text.length > 6) text.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

  return `R$ ${text}`
}
