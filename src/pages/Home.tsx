import Header from "./Header"
import {
  useEffect,
  useMemo,
  useState,
} from "react"

import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material"
import {fetchMenus} from "../services/menu"

import type {
  Branch,
  Menu,
} from "../types/menu"
import MenuCategory from "../components/MenuCategory"

export default function HomePage() {
  const [menus, setMenus] =
    useState<Menu[]>([])
  const [selectedBranch, setSelectedBranch] =
    useState<Branch | null>(null)

  useEffect(() => {
    async function load() {
      const data =
        await fetchMenus()

      setMenus(data)
    }

    load()
  }, [])

  const branches = useMemo(
    () => getBranches(menus),
    [menus]
  )

  const selectedBranchMenus = useMemo(
    () => {
      if (!selectedBranch) {
        return []
      }

      return menus
        .map((menu) => ({
          ...menu,
          items: menu.items.filter(
            (item) =>
              item.branches.some(
                (branch) =>
                  branch.id ===
                  selectedBranch.id
              )
          ),
        }))
        .filter(
          (menu) =>
            menu.items.length > 0
        )
    },
    [
      menus,
      selectedBranch,
    ]
  )

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 8,
      }}
    >
      <Header />

      {selectedBranch ? (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              mb: 6,
              direction: "rtl",
            }}
          >
            <Typography
              sx={{
                color: "#f4a340",
                fontSize: {
                  xs: "1.3rem",
                  sm: "1.7rem",
                },
                fontWeight: 700,
              }}
            >
              {selectedBranch.location}
            </Typography>
            <Button
              type="button"
              onClick={() =>
                setSelectedBranch(null)
              }
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "#f4a340",
                fontWeight: 700,
                px: 3,
                "&:hover": {
                  borderColor: "white",
                  backgroundColor:
                    "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              تغيير الفرع
            </Button>
          </Box>

          {selectedBranchMenus.map(
            (menu) => (
              <MenuCategory
                key={menu.id}
                menu={menu}
              />
            )
          )}
        </>
      ) : (
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
          <Typography
            sx={{
              color: "#f4a340",
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
              },
              fontWeight: 700,
              mb: 3,
            }}
          >
            اختر الفرع
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2,
              width: "min(100%, 560px)",
              mx: "auto",
            }}
          >
            {branches.map(
              (branch) => (
                <Button
                  key={branch.id}
                  type="button"
                  onClick={() =>
                    setSelectedBranch(branch)
                  }
                  variant="contained"
                  sx={{
                    minHeight: "72px",
                    backgroundColor: "#f4a340",
                    color: "#073f56",
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.5rem",
                    },
                    fontWeight: 800,
                    borderRadius: 2,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#ffb45a",
                      boxShadow: "none",
                    },
                  }}
                >
                  {branch.location}
                </Button>
              )
            )}
          </Box>
        </Box>
      )}
    </Container>
  )
}

function getBranches(menus: Menu[]) {
  const branchesById =
    new Map<number, Branch>()

  menus.forEach((menu) => {
    menu.items.forEach((item) => {
      item.branches
        .filter((branch) => branch.is_active)
        .forEach((branch) => {
          branchesById.set(
            branch.id,
            branch
          )
        })
    })
  })

  return Array.from(
    branchesById.values()
  ).sort(
    (firstBranch, secondBranch) =>
      firstBranch.id - secondBranch.id
  )
}
