export type MenuIngredient = {
  ingredient_id: number
  ingredient_name_ar: string
  price: string
}

export type MenuItem = {
  id: number
  name_ar: string
  description_ar: string
  price: string
  image: string | null
  ingredients: MenuIngredient[]
  label_ar: string | null
}

export type Menu = {
  id: number
  name_ar: string
  items: MenuItem[]
}