import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  cleanUpproductDetails,
  decrement,
  getProductsDetail,
  increment,
  selectedProducts,
  addToCart,
  CleanUpProductCounter,
} from "../../features/products/ProductsSlice";
import Sidebar from "./Sidebar/Sidebar";
import {
  AddToCart,
  CustomButton,
  CustomSideBarGrid,
  Done,
  Price,
  ViewDetailsContainer,
} from "./ViewDetailsStyle";
import {
  AddRounded,
  RemoveRounded,
  AddShoppingCart,
} from "@mui/icons-material";
import DesAndReview from "../../components/DesAndReview/DesAndReview";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import Feed from "../../components/Feed/Feed";
import Footer from "../../components/Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";
import DoneIcon from '@mui/icons-material/Done';

const ViewDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails } = useSelector(selectedProducts);
  const { productCounter } = useSelector(selectedProducts);
  const { cart } = useSelector(selectedProducts);



  useEffect(() => {
    dispatch(getProductsDetail(`products/${id}`));
    return () => {
      dispatch(cleanUpproductDetails());
      dispatch(CleanUpProductCounter());
    };
  }, [dispatch, id]);

  const isExist = cart.find((ele) => (ele.id ===  productDetails.id));

  return (
    <>
      {productDetails.length === 0 ? (
        <LoadingPage />
      ) : (
        <ViewDetailsContainer>
          <Container>
            <Grid container spacing={2}>
              <CustomSideBarGrid item xs={3}>
                <Sidebar />
              </CustomSideBarGrid>
              <Grid item container columnSpacing={2} xs={12} sm={9} md={9}>
                <Grid item xs={12} md={5}>
                  <img
                    src={productDetails.image}
                    alt={productDetails.title}
                    className="img__detail"
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <h3>{productDetails.title}</h3>
                  <Price>${productDetails.price}</Price>
                  <article>{productDetails.description}</article>
                  <div className="count__button">
                    <div className={`count ${isExist ? 'notAllow' : ''}`}>
                      <CustomButton
                        disabled={isExist ? true : false}
                        size="small"
                        onClick={() => dispatch(increment())}
                      >
                        <AddRounded />
                      </CustomButton>
                      <span className="number">{productCounter}</span>
                      <CustomButton
                        disabled={isExist ? true : false}
                        size="small"
                        onClick={() => dispatch(decrement())}
                      >
                        <RemoveRounded />
                      </CustomButton>
                    </div>
                    <div className="add__to__cart">
                      {!isExist ? (
                        <AddToCart
                          variant="contained"
                          startIcon={<AddShoppingCart />}
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: productDetails.id,
                                title: productDetails.title,
                                price: productDetails.price,
                                description: productDetails.description,
                                category: productDetails.category,
                                image: productDetails.image,
                                quantity: productCounter,
                              })
                            )
                          }
                        >
                          ADD TO CART
                        </AddToCart>
                      ) : (
                        <Done variant="outlined" color='success' startIcon={<DoneIcon />} onClick={(e) => e.preventDefault()}>Added to cart</Done>
                      )}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <DesAndReview
                    description={productDetails.description}
                    title={productDetails.title}
                  />
                </Grid>
                <Grid item xs={12}>
                  <RelatedProducts />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Feed />
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </ViewDetailsContainer>
      )}
    </>
  );
};

export default ViewDetails;
