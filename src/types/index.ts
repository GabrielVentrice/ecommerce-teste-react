export interface IInstallments {
  quantity: number
  value: number
}

export interface IProduct {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice: number
  price: number
  installments: IInstallments[]
}

export interface INewsLetter {
  name: string
  email: string
}
