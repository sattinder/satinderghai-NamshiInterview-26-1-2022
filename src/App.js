import { useEffect, useState } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carousalData, setCarousalData] = useState([
    {
      src: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/what-is-coding.png",
      alt: "coding1",
    },
    {
      src: "https://spaces-wp.imgix.net/2016/06/coding-in-the-classroom.png?auto=compress,format&q=50",
      alt: "coding2",
    },
    {
      src: "https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg",
      alt: "coding3",
    },
  ]);
  const [bodyData, setBodydata] = useState(["body1"]);

  useEffect(() => {
    window.addEventListener("scroll", _handleScroll);
    return () => {
      window.removeEventListener("scroll", _handleScroll);
    };
  }, [bodyData]);

  const _handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      const newBody = [...bodyData];
      newBody.push(`Body${newBody.length + 1}`);
      setBodydata(newBody);
    }
  };

  const _handleClickPrev = (slide) => {
    if (slide < currentSlide) {
      setCarousalData(carousalData.filter((it, idx) => idx <= slide));
    }
    setCurrentSlide(slide);
  };
  return (
    <div className="App">
      <div className="carousal-custom-wrapper">
        <Carousel
          onChange={_handleClickPrev}
          showThumbs={false}
          showIndicators={false}
        >
          {carousalData?.length > 0 &&
            carousalData.map(({ src, alt }, idx) => (
              <div key={idx}>
                <img src={src} alt={alt} />
              </div>
            ))}
        </Carousel>
      </div>
      <div className="body">
        {bodyData.map((item, idx) => (
          <div className="body-content" key={idx}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
