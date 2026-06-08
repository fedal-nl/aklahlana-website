import {
  Box,
  Typography,
} from "@mui/material"

import homeImage from "../assets/home-img.jpg"

const contactInfo = {
  addresses: [
    "الفرع الأول: الجزائر - شارع مستفى ابن غزوان ـ بداخل شارع مركز فنيسيا",
    "الفرع الثاني: مجمع الأمل السكني 1",
  ],
  phones: [
    "٠٧٨٠٩٠٩٣٥٥٩",
    "٠٧٧٠٥٦٦٤١٣٣",
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
        <ContactItem
          label="العنوان"
          value={contactInfo.addresses.join(" / ")}
        />
        <ContactItem
          label="الهاتف"
          value={contactInfo.phones.join(" / ")}
        />
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
        px: {
          xs: 1,
          sm: 2,
        },
        py: 0.75,
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
