import { Fragment, React, useEffect, useState } from "react";
import { CgMouse } from "react-icons/cg";
import { FaArrowCircleUp } from "react-icons/fa"
import "./Home.css";
import ImageSlider from "../../component/ImageSlider/ImageSlider.js";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import image1 from "../../images/slide1.jpg";
import image2 from "../../images/slide2.jpg";
import image3 from "../../images/slide3.jpg";
import image4 from "../../images/slide4.jpg";
import image5 from "../../images/slide5.jpg";
import image6 from "../../images/slide6.jpg";
import { Button } from "@material-ui/core";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="JKSeafoods" />
          <div className="banner">
            <ImageSlider
              images={[image1, image2, image3, image4, image5, image6]}
            >
              <div
                className="banner-part"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#fff",
                }}
              >
                <h1>Special Tasty Dried Fish</h1>
                <p>At your Doorsteps</p>
                <a href="#container">
                  <button>
                    <CgMouse />
                  </button>
                </a>
              </div>
            </ImageSlider>
          </div>
          <body>
            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">
              {products &&
                products.map((product) => <ProductCard product={product} />)}
            </div>
          </body>
          <div className="topScroll">
          <Button>
              <FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}/>
          </Button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
