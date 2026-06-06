import {
  Box,
  Typography,
} from "@mui/material"

import type { MenuItem } from "../types/menu"
import splitter from "../assets/splitter.png"

type Props = {
  item: MenuItem
}

export default function MenuItemRow({
  item,
}: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "88px 20px minmax(0, 1fr)",
          sm: "120px 20px minmax(280px, 430px)",
        },
        columnGap: {
          xs: 2,
          sm: 3,
        },
        alignItems: "center",
        justifyContent: "center",
        width: "min(100%, 680px)",
        mx: "auto",
        minHeight: {
          xs: "56px",
          sm: "64px",
        },
        direction: "ltr",
      }}
    >
      {/* Price */}
      <Box
        sx={{
          textAlign: "left",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "1.5rem",
              md: "2rem",
            },
            fontWeight: 700,
            lineHeight: 1.35,
            whiteSpace: "nowrap",
          }}
        >
          {Number(item.price).toLocaleString(
            "ar-IQ"
          )}
        </Typography>
      </Box>

      {/* Decorative Splitter */}
      <Box
        component="img"
        src={splitter}
        alt=""
        sx={{
          width: "20px",
          height: "100%",
          minHeight: "inherit",
          objectFit: "cover",
          justifySelf: "center",
          alignSelf: "stretch",
          display: "block",
        }}
      />

      {/* Item Name */}
      <Box
        sx={{
          minWidth: 0,
          textAlign: "right",
          direction: "rtl",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "1.3rem",
              md: "2rem",
            },
            fontWeight: 600,
            lineHeight: 1.35,
          }}
        >
            {/* Display the label if it exists, otherwise display the name */}
            {item.label_ar ? item.label_ar : item.name_ar}
        </Typography>
      </Box>
    </Box>
  )
}
