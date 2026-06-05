import {
  Box,
  Typography,
} from "@mui/material"

export default function Header() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 8,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#f4a340",
          fontWeight: "bold",
        }}
      >
        مأكولات أهلنا
      </Typography>

      <Typography
        variant="h6"
        sx={{
          color: "white",
          mt: 2,
        }}
      >
        أطيب المأكولات العراقية
      </Typography>
    </Box>
  )
}