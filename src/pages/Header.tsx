import {
  Box,
  Typography,
} from "@mui/material"

import homeImage from "../assets/home-img.jpg"

const contactInfo = {
  branches: [
    {
      label: "الفرع الأول",
      address:
        "الفرع الأول: الجزائر - شارع مستفى ابن غزوان ـ بداخل شارع مركز فنيسيا",
      phones: [
        "07809093559",
        "07705664133",
      ],
    },
    {
      label: "الفرع الثاني",
      address: "الفرع الثاني: مجمع الأمل السكني 1",
      phones: [
        "07755555902",
        "07888309991",
      ],
    },
  ],
  socials: [
    // "@akelahelna",
    // "facebook.com/akelahelna",
    // "instagram.com/akelahelna",
  ],
  emails: [
    "info@akelahelna.com",
  ],
}

export default function Header() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mb: 8,
      }}
    >
      <Box
        component="img"
        src={homeImage}
        alt="مأكولات أهلنا"
        sx={{
          width: {
            xs: "220px",
            sm: "300px",
            md: "360px",
          },
          maxWidth: "80%",
          height: "auto",
          display: "block",
          mx: "auto",
          mb: 3,
          borderRadius: "50%",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
          },
          gap: 1.5,
          width: "min(100%, 680px)",
          mx: "auto",
          direction: "rtl",
        }}
      >
        {contactInfo.branches.map(
          (branch) => (
            <BranchContact
              key={branch.address}
              label={branch.label}
              address={branch.address}
              phones={branch.phones}
            />
          )
        )}
        {/* <ContactItem
          label="التواصل"
          value={contactInfo.socials.join(",")}
        /> */}
        <ContactItem
          label="البريد"
          value={contactInfo.emails.join(",")}
        />
      </Box>
    </Box>
  )
}

type BranchContactProps = {
  label: string
  address: string
  phones: string[]
}

function BranchContact({
  label,
  address,
  phones,
}: BranchContactProps) {
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        px: {
          xs: 1.5,
          sm: 2,
        },
        py: 1.25,
        border: "1px solid rgba(244, 163, 64, 0.45)",
        borderRadius: 1,
      }}
    >
      <Typography
        sx={{
          color: "#f4a340",
          fontWeight: 700,
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
          },
          mb: 0.75,
        }}
      >
        {label}
      </Typography>
      <ContactItem
        label="العنوان"
        value={address}
      />
      <ContactItem
        label="الهاتف"
        value={phones.join(" / ")}
      />
    </Box>
  )
}

type ContactItemProps = {
  label: string
  value: string
}

function ContactItem({
  label,
  value,
}: ContactItemProps) {
  return (
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        py: 0.35,
      }}
    >
      <Typography
        component="span"
        sx={{
          color: "#f4a340",
          fontWeight: 700,
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
          },
          display: "inline-block",
          ml: 1,
        }}
      >
        {label}
      </Typography>
      <Typography
        component="span"
        sx={{
          color: "white",
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
          },
          lineHeight: 1.7,
          overflowWrap: "anywhere",
          textAlign: "center",
        }}
      >
        {value}
      </Typography>
    </Box>
  )
}
