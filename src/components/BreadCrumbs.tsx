import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export const BreadCrumbs = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        marginBottom: "1rem",
      }}
    >
      <Link underline="hover" color="inherit" href="/">
        Therapeutic Area
      </Link>
      <Link underline="hover" color="inherit" href="/">
        Disease
      </Link>
      <Link underline="hover" color="inherit" href="/">
        Details
      </Link>
    </Breadcrumbs>
  );
};
