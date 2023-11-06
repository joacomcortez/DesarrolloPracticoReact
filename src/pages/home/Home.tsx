
import CarouselHome from "./homeComponents/CarouselHome/CarouselHome";
import FeatureCard from "./homeComponents/FeatureCards/FeatureCard";
import "./home.css";
const Home = () => {
  return (
    <>
      <CarouselHome />
      <div className="aboutUsContainer">
        <h3 className="title">About Us</h3>
        <p className="texto">
          We are a team of passionate individuals who love to create amazing
          things. Our mission is to provide high-quality services and products
          that exceed our customers' expectations.
        </p>
        <div className="features">
          <FeatureCard
            title={"Feature 1"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat id velit ut consectetur. Praesent vitae sem vitae sem ultricies."
            }
            image={
              "https://media.wired.com/photos/5932695958b0d64bb35d1674/master/w_1600%2Cc_limit/Johnny-II.jpg"
            }
          />
          <FeatureCard
            title={"Feature 2"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat id velit ut consectetur. Praesent vitae sem vitae sem ultricies."
            }
            image={
              "https://media.wired.com/photos/59326959edfced5820d1024f/master/w_960,c_limit/Noisy-Crachini.jpg"
            }
          />
          <FeatureCard
            title={"Feature 3"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat id velit ut consectetur. Praesent vitae sem vitae sem ultricies."
            }
            image={
              "https://media.wired.com/photos/593269589be5e55af6c24a9e/master/w_960,c_limit/Jonathan-Jones.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Home;
