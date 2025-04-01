import { ReactNode } from "react";
import { Typography, SxProps, Box, Chip } from "@mui/material";
import { Theme } from "@mui/material/styles"; // Import Theme type
import StarIcon from "@mui/icons-material/Star";

interface HeadingProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
interface IconTagProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

export const Heading3 = ({ children, sx }: HeadingProps) => (
  <Typography
    variant="h3"
    sx={{
      color: "#23a6f0",
      width: 128,
      height: 24,
      fontWeight: 900,
      fontSize: 16,
      letterSpacing: 1,
      padding: 0,

      ...sx,
    }}
  >
    {children}
  </Typography>
);

export const Heading1 = ({ children, sx }: HeadingProps) => (
  <Typography
    variant="h4"
    sx={{
      color: "#252b42",
      fontWeight: 900,
      mt: 2,
      letterSpacing: 0.2,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export const Paragraph = ({ children, sx }: HeadingProps) => (
  <Typography
    sx={{
      fontSize: 14,
      color: "#666",
      maxWidth: 600,
      mt: 2,
      fontWeight: 400,
      letterSpacing: 0.5,
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export const InfoSpan = ({ children, sx }: HeadingProps) => (
  <span
    style={{
      overflow: "hidden",
      width: 27,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    }}
  >
    {children}
  </span>
);

export const IconTag = ({ children, sx, onClick }: IconTagProps) => (
  <Box
    onClick={onClick}
    sx={{
      backgroundColor: "rgba(255, 255, 255, 1)",
      padding: "6px 6px",
      borderRadius: "50%",
      ...sx,
    }}
  >
    {children}
  </Box>
);
export const Rating = ({ children, sx }: HeadingProps) => (
  <Chip
    icon={<StarIcon style={{ width: 18, color: "#FFD700" }} />}
    label={children}
    sx={{
      marginLeft: 10,
      marrginTop: 20,
      width: 90,
      height: 30,
      textAlign: "center",
      color: "white",

      borderRadius: "20px",
      zIndex: 5,
      fontWeight: 300,
      boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.1)",
      fontSize: "18px",
      backgroundColor: "#252B42",
      ...sx,
    }}
  />
);
