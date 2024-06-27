import React, { useState, useEffect } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import app from "../../firebaseConfig";
import {
  ref,
  getDatabase,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";
import { useNavigate } from "react-router-dom";

// Styled components...
const navHeight = 64; // Adjust according to your actual navbar height
const footerHeight = 64; // Adjust according to your actual footer height

const MainContent = styled(Box)(({ theme }) => ({
  marginTop: navHeight, // Adjust for navbar height
  marginBottom: footerHeight, // Adjust for footer height
}));

const FilterSortWrapper = styled("div")(({ theme }) => ({
  marginLeft: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const StyledH3 = styled("h3")({
  margin: "10px",
  fontSize: "32px",
  fontFamily: "Playfair Display, serif",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const StyledH2 = styled("h2")({
  fontSize: "14px",
  fontFamily: "Century Gothic, sans-serif",
  textAlign: "center",
  fontWeight: "400",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});
const ItemContainer = styled(Box)({
  position: "relative",
});

const ButtonContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LikeButton = styled(IconButton)({
  color: "red",
  "&:hover": {
    backgroundColor: "transparent",
  },
});


const database = getDatabase(app);

const ResponsiveGrid = ({ category }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const productsRef = ref(database, "AdminData/Products");

    const fetchData = async () => {
      try {
        const productsQuery = query(
          productsRef,
          orderByChild("category"),
          equalTo(category)
        );
        const snapshot = await get(productsQuery);
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
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };

    fetchData();
  }, [category]);
  const handleClick = (productId) => {
    navigate(`/product/${productId}`); // Redirect to product details page
  };

  return (
    <div>
      <MainContent>
        <Box sx={{ flexGrow: 1 }}>
          <FilterSortWrapper>
            <StyledH3>{category}</StyledH3>
            <StyledH2>{products.length} Products</StyledH2>
          </FilterSortWrapper>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.map((product) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={product.id}
                
              >
                <Item>
                  <ItemContainer>
                    <img
                      src={product.imageUrls ? product.imageUrls[0] : ""}
                      alt={product.name}
                    />
                    <ButtonContainer className="buttons">
                      <IconButton color="primary" aria-label="quick view">
                        Quick View
                      </IconButton>
                      <IconButton color="primary" aria-label="add to cart">
                        Add to Cart
                      </IconButton>
                    </ButtonContainer>
                  </ItemContainer>
                  <div>
                    <h2 className="pItems">{product.name}</h2>
                    <p className="pItems">{product.description}</p>
                    <LikeButton>
                      <FavoriteBorder />
                    </LikeButton>
                    <p className="pItems">Price: ${product.price}</p>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MainContent>
    </div>
  );
};

export default ResponsiveGrid;
