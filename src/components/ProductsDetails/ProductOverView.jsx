import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FilterIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import Divider from "@mui/material/Divider";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import app from "../../firebaseConfig";
import { ref } from "firebase/database";
import { getDatabase } from "firebase/database";
import { get } from "firebase/database"; // Import Realtime Database module
// Import Firebase config file

// Styled components...
const FilterSortWrapper = styled("div")(({ theme }) => ({
  marginLeft: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Center horizontally
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));
const StyledElement = styled("div")(({ theme }) => ({
  // Shared styles

  // Add any other shared styles here
  "& h2, & p": {
    fontFamily: "Century Gothic, sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    // Styles for h2 and p elements
    color: "rgb(26, 26, 26)", // Example additional style
  },
  // You can add more selectors and styles as needed
}));

const FilterLabel = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
const StyledH3 = styled("h3")({
  margin: "10px",
  fontSize: "32px",
  fontFamily: "Playfair Display, serif",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%", // Ensure the container takes up full height
});
const StyledH2 = styled("h2")({
  fontSize: "14px",
  fontFamily: "Century Gothic, sans-serif",
  textAlign: "center",
  fontWeight: "400",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%", // Ensure the container takes up full height
});

const IconWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LikeButton = styled(IconButton)({
  // Styles for the like button
  color: "red", // Example additional style
  "&:hover": {
    backgroundColor: "transparent",
  },
});
const database = getDatabase(app);

const ResponsiveeGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = ref(database, "AdminData/products");

    get(productsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const productList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setProducts(productList);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FilterSortWrapper>
        <FilterLabel>Filter by:</FilterLabel>
        <IconWrapper>
          <IconButton color="primary" aria-label="filter">
            <FilterIcon fontSize="small" />
          </IconButton>
        </IconWrapper>
        <Divider orientation="vertical" flexItem />
        <IconWrapper>
          <IconButton color="primary" aria-label="sort">
            <SortIcon fontSize="small" />
          </IconButton>
        </IconWrapper>
        <FilterLabel>Sort by:</FilterLabel>
      </FilterSortWrapper>

      <StyledH3>Kurti</StyledH3>
      <StyledH2>149 Products</StyledH2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((product) => (
          <Grid item xs={2} sm={4} md={4} key={product.id}>
            <Item>
              {/* Use the first image URL from the imgUrl array */}
              <img
                src={product.imageUrls ? product.imageUrls[0] : ""}
                alt={product.name}
              />
              <StyledElement>
                <h2 className="pItems">{product.name}</h2>
                <p className="pItems">{product.description}</p>
                <LikeButton>
                  <FavoriteBorder />
                </LikeButton>
                <p className="pItems">Price: ${product.price}</p>
              </StyledElement>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveeGrid;
