{/*import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NewArrivals = ({ headerText, data }) => {
  return (
    <div>
      {console.log("this is new Arrivals")}
      <div
        style={{ textAlign: "center", margin: "0 auto", maxWidth: "1200px" }}
      >
        <Typography variant="h5" gutterBottom style={{ position: "relative" }}>
          <hr
            style={{
              position: "absolute",
              width: "100%",
              top: "50%",
              zIndex: -1,
            }}
          />
          <span style={{ backgroundColor: "white", padding: "0 10px" , fontStyle: "Playfair Display"}}>
            {headerText}
          </span>
          <hr
            style={{
              position: "absolute",
              width: "100%",
              top: "50%",
              zIndex: -1,
            }}
          />
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            overflowX: "auto",
          }}
        >
          {data.map((product) => (
            <div
              key={product.id}
              style={{ flex: "0 0 auto", margin: "0 10px" }}
            >
              <Card sx={{ maxWidth: 200 }}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <CardContent>
                  <Typography variant="subtitle1" component="h2">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}
                  </Typography>
                  <IconButton
                    aria-label="like"
                    style={{ border: "1px solid red", borderRadius: "50%" }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
*/}
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material";
import "../css/NewArrivals.css"; // Import CSS file
const LikeButton = styled(IconButton)({
  // Styles for the like button
  color: "red", // Example additional style
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const NewArrivals = ({ headerText, pTag, data }) => {
  return (
    <div>
      <div className="section-header">
        <Typography variant="h5" gutterBottom>
          
          <span>{headerText}</span>
          
          <p>{pTag}</p>
        </Typography>
        <div className="product-container">
          {data.map((product) => (
            <div key={product.id} className="product-card">
              <Card sx={{ maxWidth: 200 }}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
                <CardContent>
                  <Typography variant="subtitle1" component="h2" className="product-name">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="product-price">
                    {product.price}
                  </Typography>
                  <LikeButton>
                  <FavoriteBorder />
                </LikeButton>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;