import monalisa from "./images/landing-page-images/image4.png";
import slide1 from "./images/landing-page-images/image5.svg";
import slide2 from "./images/landing-page-images/image6.svg";
import slide3 from "./images/landing-page-images/image7.svg";
import homepageSlide1 from "./images/homepage-slide/slide1.png";
import homepageSlide2 from "./images/homepage-slide/slide2.png";
import homepageSlide3 from "./images/homepage-slide/slide3.png";
import homepageSlide4 from "./images/homepage-slide/slide4.png";
import homepageSlide5 from "./images/homepage-slide/slide5.png";
import auctionSlide1 from "./images/auction-slide/slide1.png";
import auctionSlide2 from "./images/auction-slide/slide2.png";
import auctionSlide3 from "./images/auction-slide/slide3.png";
import auctionSlide4 from "./images/auction-slide/slide4.png";
import Philomena from "./images/market-place/Philomena.png";
import Egyptian from "./images/market-place/Egyptian.png";
import Blank from "./images/market-place/Blank.png";
import Elipsia from "./images/market-place/Elipsia.png";
import Berbely from "./images/market-place/Bervely.png";
import LawMakers from "./images/market-place/LawMakers.png";
import Alternating from "./images/market-place/Alternating.png";
import Veil from "./images/market-place/Veil.png";
import Rosemary from "./images/market-place/Rosemary.png";
import Road from "./images/market-place/Road.png";
import Eyo from "./images/drops/Eyo.png";
import Ginger from "./images/drops/ginger.png";
import Sink from "./images/drops/sink.png";
import Wrap from "./images/drops/wrap.png";

export const homepageSlide = [
  { name: "Young Guy", id: 1, url: `${homepageSlide1}` },
  { name: "Holding Flower", id: 2, url: `${homepageSlide2}` },
  { name: "Young Girl", id: 3, url: `${homepageSlide3}` },
  { name: "Kangaroo", id: 4, url: `${homepageSlide4}` },
  { name: "Fruit", id: 5, url: `${homepageSlide5}` },
];

export const marketPlaceGrid = [
  {
    name: "PHILOMENA'22",
    id: 6,
    price: "$3.00",
    value: 3,
    creator: "Clearamane",
    size: "200ft",
    url: `${Philomena}`,
    category: "Editorials",
  },
  {
    name: "BOOLEAN EGYPTIAN",
    id: 7,
    price: "$5.00",
    value: 5,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Egyptian}`,
    category: "Fashion",
  },
  {
    name: "BLANC",
    id: 8,
    price: "$7.00",
    value: 7,
    creator: "Clearamane",
    size: "200ft",
    url: `${Blank}`,
    category: "Editorials",
  },
  {
    name: "ELLIPSIA",
    id: 9,
    price: "$2.00",
    value: 2,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Elipsia}`,
    category: "Editorials",
  },
  {
    name: "THE LAW MAKERS",
    id: 10,
    price: "$3.00",
    value: 3,
    creator: "Clearamane",
    size: "200ft",
    url: `${LawMakers}`,
    category: "Art & Museum",
  },
  {
    name: "VEIL",
    id: 11,
    price: "$6.00",
    value: 6,
    creator: "Clearamane",
    size: "200ft",
    url: `${Veil}`,
    category: "Fashion",
  },
  {
    name: "ALTERNATING",
    id: 12,
    price: "$5.00",
    value: 5,
    creator: "Clearamane",
    size: "200ft",
    url: `${Alternating}`,
    category: "Optics",
  },
  {
    name: "ROSEMARY",
    id: 13,
    price: "$4.00",
    value: 4,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Rosemary}`,
    category: "Fashion",
  },
  {
    name: "BEVERLY",
    id: 14,
    price: "$2.00",
    value: 2,
    creator: "Clearamane",
    size: "200ft",
    url: `${Berbely}`,
    category: "Nature",
  },
];

export const auctionSlide = [
  { name: "Sunset", bidPrice: "$4000", id: 15, url: `${auctionSlide1}` },
  { name: "Crafty", bidPrice: "$3500", id: 16, url: `${auctionSlide2}` },
  { name: "Hanged", bidPrice: "$5000", id: 17, url: `${auctionSlide3}` },
  { name: "Huwai", bidPrice: "$2500", id: 18, url: `${auctionSlide4}` },
];

export const drops = [
  {
    name: "Eyo : Eko For Show",
    creator: "Aliya Minat",
    date: "Nov 31 at 11am WAT",
    about:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    id: 19,
    url: `${Eyo}`,
    auction: "UPCOMING",
    inProgress: null,
  },
  {
    name: "Ginger Suburbs",
    creator: "Tina Benson",
    date: "Aug 21 at 11am WAT",
    about:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    id: 20,
    url: `${Ginger}`,
    auction: "LIVE NOW",
    inProgress: true,
  },
  {
    name: "Sink",
    creator: "Aliya Minat",
    date: "Nov 31 at 11am WAT",
    about:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    id: 21,
    url: `${Sink}`,
    auction: "ENDED",
    inProgress: false,
  },
  {
    name: "Wrapped '99",
    creator: "Aliya Minat",
    date: "Nov 31 at 11am WAT",
    about:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    id: 22,
    url: `${Wrap}`,
    auction: "ENDED",
    inProgress: false,
  },
];

export const exhibitionSlide = [
  {
    name: "MONALISA REDEFINED IN STYLE",
    starts: "STARTS ON : 08:00 GMT . MONDAY",
    about:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
    sn: "01",
    id: 23,
    url: `${monalisa}`,
  },
  {
    name: "Sink",
    starts: "STARTS ON : 10:00 GMT . FRIDAY",
    about:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
    sn: "02",
    id: 24,
    url: `${Sink}`,
  },
];

export const homepageCarousel = [
  { name: "slide1", id: 25, url: `${slide1}` },
  { name: "slide2", id: 26, url: `${slide2}` },
  { name: "slide3", id: 27, url: `${slide3}` },
];

//ALL IMAGES
export const allProducts = [
  {
    name: "ROAD TO EGYPT",
    id: 28,
    price: "$10.00",
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Road}`,
    category: "Editorials",
  },
];
