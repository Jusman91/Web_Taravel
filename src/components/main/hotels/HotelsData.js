import HotelImg1 from '../../../asset/hotels/h1.jpg';
import HotelImg2 from '../../../asset/hotels/h2.jpg';
import HotelImg3 from '../../../asset/hotels/h3.jpg';
import HotelImg4 from '../../../asset/hotels/h4.jpg';
import HotelImg5 from '../../../asset/hotels/h5.jpg';
import HotelImg6 from '../../../asset/hotels/h6.jpg';
import HotelImg7 from '../../../asset/hotels/h7.jpg';
import HotelImg8 from '../../../asset/hotels/h8.jpg';
import HotelImg9 from '../../../asset/hotels/h9.jpg';
import HotelImg10 from '../../../asset/hotels/h10.jpg';
import HotelImg11 from '../../../asset/hotels/h11.jpg';
import HotelImg12 from '../../../asset/hotels/h12.jpg';

export const HotelsData = (hotels) => {
  const data = [
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg1,
      textHeading: 'Park Hyatt Melbourne',
      text1: 'Melbourne',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 3.597.368',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg2,
      textHeading: 'The St. Regis Bali Resort',
      text1: 'kuta',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 8.129.214',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg3,
      textHeading: 'The Fullerton',
      text1: 'Singapore',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 4.104.698',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg4,
      textHeading: 'Grand Hyatt',
      text1: 'Kuala Lumpur',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 2.686.797',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg5,
      textHeading: 'W Bangkok',
      text1: 'Bangkok',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 3.212.412',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg6,
      textHeading: 'Waldorf Astoria',
      text1: 'Bejing',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 3.859.966',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg7,
      textHeading: 'Hilton Tokyo',
      text1: 'Tokyo',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 5.471.254',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg8,
      textHeading: 'JW Mariot',
      text1: 'Seoul',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 4.000.964',
      btnClass: 'btn',
      btn: 'Check Hotels',
    }
  ];
  const otherData = [
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg9,
      textHeading: 'Harbour Garnd',
      text1: 'Hong kong',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 1.656.351',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg10,
      textHeading: 'Jambuluwuk Malioboro',
      text1: 'Yogyakarta',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 640.450',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg11,
      textHeading: 'Rihga Royal Osaka',
      text1: 'Osaka',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 1.940.294',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: HotelImg12,
      textHeading: 'Hilton Resort and spa',
      text1: 'Queenstown',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 2.080.743',
      btnClass: 'btn',
      btn: 'Check Hotels',
    },
  ];
  if (hotels) {
    return [...data, ...otherData]
  }
  return data
};

export default HotelsData