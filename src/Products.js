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
import Rosemary from "./images/market-place/Philomena.png";
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
    id: 1,
    price: "$3.90",
    creator: "Clearamane",
    size: "200ft",
    url: `${Philomena}`,
  },
  {
    name: "BOOLEAN EGYPTIAN",
    id: 2,
    price: "$5.00",
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Egyptian}`,
  },
  {
    name: "BLANC",
    id: 3,
    price: "$3.00",
    creator: "Clearamane",
    size: "200ft",
    url: `${Blank}`,
  },
  {
    name: "ELLIPSIA",
    id: 4,
    price: "$2.50",
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Elipsia}`,
  },
  {
    name: "THE LAW MAKERS",
    id: 5,
    price: "$3.00",
    creator: "Clearamane",
    size: "200ft",
    url: `${LawMakers}`,
  },
  {
    name: "VEIL",
    id: 6,
    price: "$3.90",
    creator: "Clearamane",
    size: "200ft",
    url: `${Veil}`,
  },
  {
    name: "ALTERNATING",
    id: 7,
    price: "$5.00",
    creator: "Clearamane",
    size: "200ft",
    url: `${Alternating}`,
  },
  {
    name: "ROSEMARY",
    id: 8,
    price: "$3.00",
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Rosemary}`,
  },
  {
    name: "BEVERLY",
    id: 9,
    price: "$2.50",
    creator: "Clearamane",
    size: "200ft",
    url: `${Berbely}`,
  },
];

export const auctionSide = [
  { bidPrice: "$4000", id: 1, url: `${auctionSlide1}` },
  { bidPrice: "$3500", id: 2, url: `${auctionSlide2}` },
  { bidPrice: "$5000", id: 3, url: `${auctionSlide3}` },
  { bidPrice: "$2500", id: 4, url: `${auctionSlide4}` },
];

export const drops = [
  {
    name: "Eyo : Eko For Show",
    creator: "Aliya Minat",
    date: "Nov 31 at 11am WAT",
    about:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    url: `${Wrap}`,
    auction: "ENDED",
    inProgress: false,
  },
];
