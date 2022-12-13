import FlightImg1 from '../../../asset/flights/f1.jpg';
import FlightImg2 from '../../../asset/flights/f2.jpg';
import FlightImg3 from '../../../asset/flights/f3.jpg';
import FlightImg4 from '../../../asset/flights/f4.jpg';
import FlightImg5 from '../../../asset/flights/f5.jpg';
import FlightImg6 from '../../../asset/flights/f6.jpg';
import FlightImg7 from '../../../asset/flights/f7.jpg';
import FlightImg8 from '../../../asset/flights/f8.jpg';
import FlightImg9 from '../../../asset/flights/f9.jpg';
import FlightImg10 from '../../../asset/flights/f10.jpg';
import FlightImg11 from '../../../asset/flights/f11.jpg';
import FlightImg12 from '../../../asset/flights/f12.jpg';

export const useField = (flights) => {
  const data = [
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg1,
      textHeading: 'Jakarta - Denpasar',
      text1: 'The Island of the Gots',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 872.747',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg2,
      textHeading: 'Jakarta - Denpasar',
      text1: 'The Island of the Gots',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 872.747',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg3,
      textHeading: 'Jakarta - Singapore',
      text1: 'Unique small city',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 872.539',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg4,
      textHeading: 'Jakarta - Kuala Lumpur',
      text1: 'The capital city of the Malaysia',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 948.187',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg5,
      textHeading: 'Jakarta - Bangkok',
      text1: 'The city of Angels',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 864.767',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg6,
      textHeading: 'Jakarta - Bejing',
      text1: 'A cultural hub of china',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 4.550.363',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg7,
      textHeading: 'Jakarta - Tokyo',
      text1: "The world's most populous",
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 4.714.302',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg8,
      textHeading: 'Jakarta - Seoul',
      text1: 'The citu of the future',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 3.183.420',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
  ];
  const otherData = [
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg9,
      textHeading: 'Jakarta - Honglkong',
      text1: 'Where East meets West',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 2.341.970',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg10,
      textHeading: 'Jakarta - Yogyakarta',
      text1: 'traditional arts and cultural heritage',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 603.731',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg11,
      textHeading: 'Jakarta - Osaka',
      text1: "Jepang nation's kitchen",
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 6.484.353',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: FlightImg12,
      textHeading: 'Jakarta - Queenstown',
      text1: 'The adventure capital of the world',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 8.141.141',
      btnClass: 'btn',
      btn: 'Check Flights',
    },
  ];
  if (flights) {
    return [...data, ...otherData];
  }
  return data;
};

export default useField