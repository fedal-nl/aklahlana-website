import {
  Box,
  Typography,
} from "@mui/material"

import type {
  Menu,
} from "../types/menu"

import MenuItemRow from "./MenuItemRow"

type Props = {
  menu: Menu
}

export default function MenuCategory({
  menu,
}: Props) {
  return (
    <Box
      sx={{
        mb: 8,
      }}
    >
      <Typography
            variant="h3"
            sx={{
                textAlign: "center",
                color: "#f4a340",
                mb: 3,
                fontWeight: "bold",
                fontSize: {xs: "2.5rem", sm: "4rem"},
            }}      >
        {menu.name_ar}
      </Typography>

      {menu.items.map(
        (item) => (
          <MenuItemRow
            key={item.id}
            item={item}
          />
        )
      )}
    </Box>
  )
}
