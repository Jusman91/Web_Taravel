import XperiencesImg1 from '../../../asset/xperiences/x1.jpg';
import XperiencesImg2 from '../../../asset/xperiences/x2.jpg';
import XperiencesImg3 from '../../../asset/xperiences/x3.jpg';
import XperiencesImg4 from '../../../asset/xperiences/x4.jpg';
import XperiencesImg5 from '../../../asset/xperiences/x5.jpg';
import XperiencesImg6 from '../../../asset/xperiences/x6.jpg';
import XperiencesImg7 from '../../../asset/xperiences/x7.jpg';
import XperiencesImg8 from '../../../asset/xperiences/x8.jpg';
import XperiencesImg9 from '../../../asset/xperiences/x9.jpg';
import XperiencesImg10 from '../../../asset/xperiences/x10.jpg';
import XperiencesImg11 from '../../../asset/xperiences/x11.jpg';
import XperiencesImg12 from '../../../asset/xperiences/x12.jpg';

export const XperiencesData = (xperiences) => {
  const data = [
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg1,
      textHeading: 'Sydney BridgeClimb',
      text1: 'Sydney',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 1.636.519',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg2,
      textHeading: 'Blue Montains Nature and Wildlife Day Tour',
      text1: 'Sydney',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 1.422.185',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg3,
      textHeading: 'Hunter Valley Wine Tasting Tour',
      text1: 'Sydney',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 1.746.985',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg4,
      textHeading: 'Port Stephens Day Tour with Dolphing Watching. Sandboarding and Australian Wildlife',
      text1: 'Sydney',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 1.746.985',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg5,
      textHeading: 'Old Town Tuk Tuk Hop-On Hop-Off',
      text1: 'Bangkok',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 54.607',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg6,
      textHeading: 'Beijing Mutianyu Great Wall Admission Ticket',
      text1: 'Beijing',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 54.607',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg7,
      textHeading: 'Tokyo Tower Observatori Ticket',
      text1: 'Tokyo',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 136.842',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg8,
      textHeading: 'Korean Folk Village Admission Ticket',
      text1: 'Seoul',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 167.213',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    }
  ];
  const otherData = [
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg9,
      textHeading: 'Peak Tram Sky Pas: Tram Ticket',
      text1: 'Hong Kong',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 188.370',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg10,
      textHeading: 'Traditional Batik Fabric Drawing Class',
      text1: 'Yogyakarta',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 99.987',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg11,
      textHeading: 'Slow and Easy Hiking in Hida-Osaka',
      text1: 'Osaka',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 151.345',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    },
    {
      cNameContainer: 'wrapp-img',
      cName: 'desc',
      img1: XperiencesImg12,
      textHeading: 'Remarkables Ski Area Round-Trip',
      text1: 'Queenstown',
      text2: 'Starting from',
      currency: 'IDR',
      price: ' 342.957',
      btnClass: 'btn',
      wrapperbtn: 'wrapper-btn',
      btn: 'Check Xperiences',
    }
  ];
  if (xperiences) {
    return [...data, ...otherData]
  };
  return data;
};

export default XperiencesData