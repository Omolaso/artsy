import areWeThere from "./images/landing-page-images/image2.png";
import oloibiri from "./images/landing-page-images/image3.png";
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
import outBox from "./images/auction-slide/outBox.png";
import fallApart from "./images/auction-slide/fallApart.png";
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
import heart from "./images/utils/heart.svg";
import metaMask from "./images/wallets/MetaMask.png";
import walletConnect from "./images/wallets/WalletConnect.png";
import coinbase from "./images/wallets/Coinbase.png";
import phantom from "./images/wallets/Phantom.png";

export const wallets = [
  { name: "MetaMask", imgUrl: `${metaMask}` },
  { name: "WalletConnect", imgUrl: `${walletConnect}` },
  { name: "Coinbase", imgUrl: `${coinbase}` },
  { name: "Phantom", imgUrl: `${phantom}` },
];

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
    nameLowercase: "Philomena'22",
    id: 6,
    price: "$3.00",
    value: 3,
    creator: "Clearamane",
    size: "200ft",
    url: `${Philomena}`,
    category: "Editorials",
    madeIn: "Made in Italy",
    totalViews: "1.7k views",
    amount: 1,
  },
  {
    name: "BOOLEAN EGYPTIAN",
    nameLowercase: "Boolean Egyptian",
    id: 7,
    price: "$5.00",
    value: 5,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Egyptian}`,
    category: "Fashion",
    madeIn: "Made in Egypt",
    totalViews: "1k views",
    amount: 1,
  },
  {
    name: "BLANC",
    nameLowercase: "Blanc",
    id: 8,
    price: "$7.00",
    value: 7,
    creator: "Clearamane",
    size: "200ft",
    url: `${Blank}`,
    category: "Editorials",
    madeIn: "Made in South Africa",
    totalViews: "1.1k views",
    amount: 1,
  },
  {
    name: "ELLIPSIA",
    nameLowercase: "Ellipsia",
    id: 9,
    price: "$2.00",
    value: 2,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Elipsia}`,
    category: "Editorials",
    madeIn: "Made in Paraguay",
    totalViews: "1.8k views",
    amount: 1,
  },
  {
    name: "THE LAW MAKERS",
    nameLowercase: "The Law Makers",
    id: 10,
    price: "$3.00",
    value: 3,
    creator: "Clearamane",
    size: "200ft",
    url: `${LawMakers}`,
    category: "Museum",
    madeIn: "Made in USA",
    totalViews: "2.5k views",
    amount: 1,
  },
  {
    name: "VEIL",
    nameLowercase: "Veil",
    id: 11,
    price: "$6.00",
    value: 6,
    creator: "Clearamane",
    size: "200ft",
    url: `${Veil}`,
    category: "Fashion",
    madeIn: "Made in USA",
    totalViews: "1.2k views",
    amount: 1,
  },
  {
    name: "ALTERNATING",
    nameLowercase: "Alternating",
    id: 12,
    price: "$5.00",
    value: 5,
    creator: "Clearamane",
    size: "200ft",
    url: `${Alternating}`,
    category: "Optics",
    madeIn: "Made in Nigeria",
    totalViews: "3k views",
    amount: 1,
  },
  {
    name: "ROSEMARY",
    nameLowercase: "Rosemary",
    id: 13,
    price: "$4.00",
    value: 4,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Rosemary}`,
    category: "Fashion",
    madeIn: "Made in Italy",
    totalViews: "1.6k views",
    amount: 1,
  },
  {
    name: "BEVERLY",
    nameLowercase: "Beverly",
    id: 14,
    price: "$2.00",
    value: 2,
    creator: "Clearamane",
    size: "200ft",
    url: `${Berbely}`,
    category: "Nature",
    madeIn: "Made in Argentina",
    totalViews: "2k views",
    amount: 1,
  },
];

export const auctionSlide = [
  {
    name: "Sunset",
    bidPrice: "$4000",
    id: 15,
    imgUrl: `${auctionSlide1}`,
    creator: "Stormy Raily",
  },
  {
    name: "Crafty",
    bidPrice: "$3500",
    id: 16,
    imgUrl: `${auctionSlide2}`,
    creator: "Declar Grey",
  },
  {
    name: "Hanged",
    bidPrice: "$5000",
    id: 17,
    imgUrl: `${auctionSlide3}`,
    creator: "Ali Coman",
  },
  {
    name: "Eyo",
    bidPrice: "$2500",
    id: 18,
    imgUrl: `${Eyo}`,
    creator: "Stormy Raily",
  },
  {
    name: "Falling apart",
    id: 31,
    imgUrl: `${fallApart}`,
    creator: "Jacob Banks",
    date: "12.08.2022",
    bidPrice: "$5600",
    highestBid: "$9000",
    popular: true,
  },
  {
    name: "Out of the box",
    id: 30,
    imgUrl: `${outBox}`,
    creator: "Dan Murray",
    date: "12.08.2022",
    bidPrice: "$6500",
    highestBid: "$10000",
    popular: true,
  },
];

export const popularCreators = [
  {
    name: "Out of the box",
    id: 30,
    imgUrl: `${outBox}`,
    url2: `${heart}`,
    creator: "Dan Murray",
    date: "12.08.2022",
    bidPrice: "$6500",
    highestBid: "$10000",
    popular: true,
  },
  {
    name: "Falling apart",
    id: 31,
    imgUrl: `${fallApart}`,
    url2: `${heart}`,
    creator: "Jacob Banks",
    date: "12.08.2022",
    bidPrice: "$5600",
    highestBid: "$9000",
    popular: true,
  },
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
    inProgress: "upcoming",
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
  {
    name: "ROAD TO EGYPT",
    starts: "STARTS ON : 12:00 GMT . WEDNESDAY",
    about:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
    sn: "03",
    id: 78,
    url: `${Road}`,
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
    name: "Eyo : Eko For Show",
    creator: "Aliya Minat",
    date: "Nov 31 at 11am WAT",
    about:
      "Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.",
    id: 19,
    url: `${Eyo}`,
    auction: "UPCOMING",
    inProgress: "upcoming",
    value: 2,
    amount: 1,
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
    value: 5,
    amount: 1,
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
    value: 4,
    amount: 1,
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
    value: 12,
    amount: 1,
  },
  {
    name: "MONALISA REDEFINED",
    starts: "STARTS ON : 08:00 GMT . MONDAY",
    about:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
    sn: "01",
    id: 23,
    url: `${monalisa}`,
    creator: "Clearamane",
    value: 35,
    amount: 1,
  },
  {
    name: "Sink",
    starts: "STARTS ON : 10:00 GMT . FRIDAY",
    about:
      "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.",
    sn: "02",
    id: 24,
    url: `${Sink}`,
    creator: "Sam",
    amount: 1,
  },
  {
    name: "Mant",
    creator: "Luke",
    id: 25,
    url: `${slide1}`,
    amount: 1,
    value: 5,
  },
  {
    name: "Olive",
    creator: "Clearamane",
    id: 26,
    url: `${slide2}`,
    amount: 1,
    value: 8,
  },
  { name: "Mill", creator: "Sam", id: 27, url: `${slide3}`, amount: 1 },
  {
    name: "Are We There Yet?",
    creator: "Sam",
    id: 58,
    url: `${areWeThere}`,
    value: 10,
    amount: 1,
  },
  {
    name: "Young Guy",
    creator: "Ali Dawa",
    id: 1,
    url: `${homepageSlide1}`,
    value: 2,
    amount: 1,
  },
  {
    name: "Holding Flower",
    creator: "Tina Benson",
    id: 2,
    url: `${homepageSlide2}`,
    amount: 1,
  },
  {
    name: "Young Girl",
    creator: "Ali Dawa",
    id: 3,
    url: `${homepageSlide3}`,
    value: 41,
    amount: 1,
  },
  {
    name: "Kangaroo",
    creator: "Luke",
    id: 4,
    url: `${homepageSlide4}`,
    value: 20,
    amount: 1,
  },
  {
    name: "Fruit",
    creator: "Clearamane",
    id: 5,
    url: `${homepageSlide5}`,
    value: 15,
    amount: 1,
  },
  {
    name: "ROAD TO EGYPT",
    id: 28,
    price: "$10.00",
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Road}`,
    category: "Editorials",
    value: 100,
    amount: 1,
  },
  {
    name: "PHILOMENA'22",
    nameLowercase: "Philomena'22",
    id: 6,
    price: "$3.00",
    value: 3,
    creator: "Clearamane",
    size: "200ft",
    url: `${Philomena}`,
    category: "Editorials",
    madeIn: "Made in Italy",
    totalViews: "1.7k views",
    amount: 1,
  },
  {
    name: "BOOLEAN EGYPTIAN",
    nameLowercase: "Boolean Egyptian",
    id: 7,
    price: "$5.00",
    value: 5,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Egyptian}`,
    category: "Fashion",
    madeIn: "Made in Egypt",
    totalViews: "1k views",
    amount: 1,
  },
  {
    name: "BLANC",
    nameLowercase: "Blanc",
    id: 8,
    price: "$7.00",
    value: 7,
    creator: "Clearamane",
    size: "200ft",
    url: `${Blank}`,
    category: "Editorials",
    madeIn: "Made in South Africa",
    totalViews: "1.1k views",
    amount: 1,
  },
  {
    name: "ELLIPSIA",
    nameLowercase: "Ellipsia",
    id: 9,
    price: "$2.00",
    value: 2,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Elipsia}`,
    category: "Editorials",
    madeIn: "Made in Paraguay",
    totalViews: "1.8k views",
    amount: 1,
  },
  {
    name: "THE LAW MAKERS",
    nameLowercase: "The Law Makers",
    id: 10,
    price: "$3.00",
    value: 3,
    creator: "Clearamane",
    size: "200ft",
    url: `${LawMakers}`,
    category: "Museum",
    madeIn: "Made in USA",
    totalViews: "2.5k views",
    amount: 1,
  },
  {
    name: "VEIL",
    nameLowercase: "Veil",
    id: 11,
    price: "$6.00",
    value: 6,
    creator: "Clearamane",
    size: "200ft",
    url: `${Veil}`,
    category: "Fashion",
    madeIn: "Made in USA",
    totalViews: "1.2k views",
    amount: 1,
  },
  {
    name: "ALTERNATING",
    nameLowercase: "Alternating",
    id: 12,
    price: "$5.00",
    value: 5,
    creator: "Clearamane",
    size: "200ft",
    url: `${Alternating}`,
    category: "Optics",
    madeIn: "Made in Nigeria",
    totalViews: "3k views",
    amount: 1,
  },
  {
    name: "ROSEMARY",
    nameLowercase: "Rosemary",
    id: 13,
    price: "$4.00",
    value: 4,
    creator: "Ali Dawa",
    size: "200ft",
    url: `${Rosemary}`,
    category: "Fashion",
    madeIn: "Made in Italy",
    totalViews: "1.6k views",
    amount: 1,
  },
  {
    name: "BEVERLY",
    nameLowercase: "Beverly",
    id: 14,
    price: "$2.00",
    value: 2,
    creator: "Clearamane",
    size: "200ft",
    url: `${Berbely}`,
    category: "Nature",
    madeIn: "Made in Argentina",
    totalViews: "2k views",
    amount: 1,
  },
  {
    name: "Sunset",
    bidPrice: "$4000",
    id: 15,
    imgUrl: `${auctionSlide1}`,
    creator: "Stormy Raily",
    amount: 1,
  },
  {
    name: "Crafty",
    bidPrice: "$3500",
    id: 16,
    imgUrl: `${auctionSlide2}`,
    creator: "Declar Grey",
    amount: 1,
  },
  {
    name: "Hanged",
    bidPrice: "$5000",
    id: 17,
    value: 7,
    imgUrl: `${auctionSlide3}`,
    creator: "Ali Coman",
    amount: 1,
  },
  {
    name: "Falling apart",
    id: 31,
    imgUrl: `${fallApart}`,
    creator: "Jacob Banks",
    date: "12.08.2022",
    bidPrice: "$5600",
    highestBid: "$9000",
    value: 9,
    popular: true,
    amount: 1,
  },
  {
    name: "Out of the box",
    id: 30,
    imgUrl: `${outBox}`,
    value: 8,
    creator: "Dan Murray",
    date: "12.08.2022",
    bidPrice: "$6500",
    highestBid: "$10000",
    popular: true,
    amount: 1,
  },
  {
    name: "Oloibiri",
    id: 60,
    imgUrl: `${oloibiri}`,
    creator: "Dan Murray",
    date: "12.08.2022",
    bidPrice: "$6500",
    highestBid: "$20000",
    popular: true,
    value: 2,
    amount: 1,
  },
];
