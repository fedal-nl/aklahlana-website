import Header from "./Header"
import {useEffect, useState} from "react"

import {Container} from "@mui/material"
import {fetchMenus} from "../services/menu"

import type {Menu} from "../types/menu"
import MenuCategory from "../components/MenuCategory"

export default function HomePage() {
  const [menus, setMenus] =
    useState<Menu[]>([])

  useEffect(() => {
    async function load() {
      const data =
        await fetchMenus()

      setMenus(data)
    }

    load()
  }, [])

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 8,
      }}
    >
        <Header />
      {menus.map(
        (menu) => (
          <MenuCategory
            key={menu.id}
            menu={menu}
          />
        )
      )}
    </Container>
  )
}