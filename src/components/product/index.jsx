/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const Product = (props) => {
  const [productData, setProductData] = useState();
  const [isAdded, setIsadded] = useState(false);

  useEffect(() => {
    setProductData(props.item);
  }, [props.item]);

  const addToCart = () => {
    setIsadded(true);
  };

  return (
    <div className="productThumb">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}

      {productData !== undefined && (
        <>
          <Link to={`/product/${productData.id}`}>
            <div className="imgWrapper">
              <div className="p-4 wrapper mb-3">
                <img
                  src={productData.catImg + "?im=Resize=(420,420)"}
                  className="w-100"
                  alt=""
                />
              </div>

              <div className="overlay transition">
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Link className="cursor" tooltip="Add to Wishlist">
                      <FavoriteBorderOutlinedIcon />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="cursor" tooltip="Compare">
                      <CompareArrowsOutlinedIcon />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="cursor" tooltip="Quick View">
                      <RemoveRedEyeOutlinedIcon />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <div className="info">
            <span className="d-block catName">{productData.brand}</span>
            <h4 className="title">
              <Link>{productData.productName}</Link>
            </h4>
            <Rating
              name="half-rating-read"
              value={parseFloat(productData.rating)}
              precision={0.5}
              readOnly
            />
            <span className="brand d-block text-g">
              By <Link className="text-g">{productData.brand}</Link>
            </span>

            <div className="d-flex align-items-center mt-3">
              <div className="d-flex align-items-center w-100">
                <span className="price text-g font-weight-bold">
                  Rs {productData.price}
                </span>{" "}
                <span className="oldPrice ml-auto">
                  Rs {productData.oldPrice}
                </span>
              </div>
            </div>

            <Button
              className="w-100 transition mt-3"
              onClick={() => addToCart(productData)}
            >
              <ShoppingCartOutlinedIcon />
              {isAdded === true ? "Added" : "Add"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
