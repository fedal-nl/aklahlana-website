export type MenuIngredient = {
  ingredient_id: number
  ingredient_name_ar: string
  price: string
}

export type Branch = {
  id: number
  name: string
  location: string
  is_active: boolean
}

export type MenuItem = {
  id: number
  name_ar: string
  description_ar: string
  price: string
  image: string | null
  ingredients: MenuIngredient[]
  label_ar: string | null
  branches: Branch[]
}

export type Menu = {
  id: number
  name_ar: string
  items: MenuItem[]
}
