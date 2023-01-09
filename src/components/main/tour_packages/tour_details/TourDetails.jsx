import './TourDetails.css';
import TourPackages from '../../../../routes/TourPackages';
import TourData from '../TourData';
import { IoMdPaperPlane } from 'react-icons/io';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
import {
	GiNightSleep,
	GiMeal,
	GiBackpack,
} from 'react-icons/gi';
import PrevArrow from '../../../hero/arrow/PrevArrow';
import NextArrow from '../../../hero/arrow/NextArrow';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const TourDetails = () => {
	const { id } = useParams();
	const data = TourData(TourPackages);

	const [days, setDays] = useState('day1');

	const details = data.find((p) => p.textHeading === id);
	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		cssEase: 'linear',
	};
	return (
		<>
			<div className='container-details'>
				<div className='wrapper-heros'>
					<Slider {...settings}>
						<div className='wrapper-img-hero-tour-details'>
							<img
								src={details.detailsTour.heroImg.heroImg1}
								alt=''
							/>
						</div>
						<div className='wrapper-img-hero-tour-details'>
							<img
								src={details.detailsTour.heroImg.heroImg2}
								alt=''
							/>
						</div>
						<div className='wrapper-img-hero-tour-details'>
							<img
								src={details.detailsTour.heroImg.heroImg3}
								alt=''
							/>
						</div>
					</Slider>
				</div>
				<div className='list-container-details'>
					<div>
						<ul className='list-details'>
							<li>HIGHLIGHTS</li>
							<li>DEPARTURE DATE</li>
							<li>ITINERARY</li>
							<li>TOUR POLICY</li>
						</ul>
					</div>
					<div className='wrapper-photos'>
						<div className='photos'>
							<img
								src={details.detailsTour.heroImg.heroImg1}
								alt=''
							/>
						</div>
						<div className='photos'>
							<img
								src={details.detailsTour.heroImg.heroImg2}
								alt=''
							/>
						</div>
						<div className='photos'>
							<img
								src={details.detailsTour.heroImg.heroImg3}
								alt=''
							/>
						</div>
						<button>More Photos</button>
					</div>
				</div>
				<div className='wrapper_title_desc'>
					<div className='left_title'>
						<BsFillHeartFill className='icons-details' />
						<BsFillHeartFill className='icons-details' />
						<BsFillHeartFill className='icons-details' />

						<h3>{details.textHeading}</h3>
						<p>{details.text}</p>
					</div>
					<div className='right_desc'>
						<p>{details.detailsTour.desc}</p>
					</div>
				</div>
				<div>
					<ul className='container_icon_td'>
						<li className='td-i_list'>
							<div>
								<GiNightSleep className='td-i' />
							</div>
							<h5>4 Nights</h5>
							<p>accomodation</p>
						</li>
						<li className='td-i_list'>
							<div>
								<GiMeal className='td-i' />
							</div>
							<h5>9 Meals</h5>
							<p>4 hot buffet breakfasts</p>
							<p>3 lunches</p>
							<p>2 dinners</p>
						</li>
						<li className='td-i_list'>
							<div>
								<GiBackpack className='td-i' />
							</div>
							<h5>On-trip Transport</h5>
							<p>Bus</p>
						</li>
						<li className='td-i_list'>
							<div>
								<FaMapMarkedAlt className='td-i' />
							</div>
							<h5>1 Country | 2 Cities</h5>
							<p>Thailand (Bangkok, Pattaya)</p>
						</li>
						<li className='td-i_list'>
							<div>
								<IoMdPaperPlane className='td-i' />
							</div>
							<h5>Flight Included</h5>
						</li>
					</ul>
				</div>
				<div className='container-includ-item'>
					<div className='wrapper-includ-item'>
						<div className='includ-item-img'>
							<img
								src={details.detailsTour.heroImg.heroImg3}
								alt='destination'
							/>
						</div>
						<div className='includ-item-list'>
							<h6>What's Included</h6>
							<h4>Sightseeing Highlights</h4>
							<ul>
								{details.detailsTour.includ.sightseeing.map(
									(item, idx) => (
										<li key={idx}>{item}</li>
									),
								)}
							</ul>
						</div>
					</div>
					<div className='wrapper-includ-item-reverse'>
						<div className='includ-item-img'>
							<img
								src={details.detailsTour.heroImg.heroImg1}
								alt='destination'
							/>
						</div>
						<div className='includ-item-list'>
							<h6>What's Included</h6>
							<h4>Sightseeing Highlights</h4>
							<ul>
								{details.detailsTour.includ.travel.map(
									(item, idx) => (
										<li key={idx}>{item}</li>
									),
								)}
							</ul>
						</div>
					</div>
				</div>
				<div className='container-itinerary'>
					<h3>Your Itinerary</h3>
					<div className='itnerary-list'>
						<ul>
							<li
								onClick={() => setDays('day1')}
								className={days === 'day1' ? 'active' : ''}>
								Day 1
							</li>
							<li
								onClick={() => setDays('day2')}
								className={days === 'day2' ? 'active' : ''}>
								Day 2
							</li>
							<li
								onClick={() => setDays('day3')}
								className={days === 'day3' ? 'active' : ''}>
								Day 3
							</li>
							<li
								onClick={() => setDays('day4')}
								className={days === 'day4' ? 'active' : ''}>
								Day 4
							</li>
							<li
								onClick={() => setDays('day5')}
								className={days === 'day5' ? 'active' : ''}>
								Day 5
							</li>
							<li
								onClick={() => setDays('terms&conditions')}
								className={
									days === 'terms&conditions'
										? 'active'
										: ''
								}>
								Terms & Conditions
							</li>
						</ul>
					</div>
					{days === 'day1' && (
						<div className='days'>
							<h3>Mengunjungi Force Face Buddha</h3>
							<figure>
								<img
									src={details.detailsTour.heroImg.heroImg2}
									alt='Destiantions'
								/>
								<figcaption>
									Anda akan dijemput di Bandara Bangkok
									untuk diantar langsung menuju tempat
									wisata <b>Wat Arun </b>melewati{' '}
									<b>Chao Praya</b>. Dilanjutkan perjalanan
									mengunjungi <b>Four Face Buddha</b>
									&nbsp;dan berbelanja di <b>MBK Mall. </b>
									Kemudian, diantar menuju hotel untuk
									beristirahat.
								</figcaption>
							</figure>
						</div>
					)}
					{days === 'day2' && (
						<div className='days'>
							<h3>Jalan-jalan ke Nongnooch village</h3>
							<figure>
								<img
									src={details.detailsTour.heroImg.heroImg2}
									alt='Destiantions'
								/>
								<figcaption>
									Setelah sarapan pagi, Anda langsung
									diantar menuju{' '}
									<b>Honey Bee Farm, Laser Budha, </b>
									dan<b> Nongnooch Village. </b>Setelah
									makan makan, Anda diantar ke hotel untuk
									beristirahat.
								</figcaption>
							</figure>
						</div>
					)}
					{days === 'day3' && (
						<div className='days'>
							<h3>Mengunjungi Pattaya Floating Market</h3>
							<figure>
								<img
									src={details.detailsTour.heroImg.heroImg2}
									alt='Destiantions'
								/>
								<figcaption>
									Setelah sarapan, kita akan mengantar Anda
									menuju <b>Erawadee Herb. </b>Lalu, makan
									siang (biaya sendiri). Setelah itu, Anda
									akan mengunjungi{' '}
									<b>Pattaya Floating Market</b>. Makan
									malam di <b>Pattaya City Point</b> dan
									diantar kembali ke hotel untuk
									beristirahat.
								</figcaption>
							</figure>
						</div>
					)}
					{days === 'day4' && (
						<div className='days'>
							<h3>
								Jalan-jalan ke Asiatique The River Front
							</h3>
							<figure>
								<img
									src={details.detailsTour.heroImg.heroImg2}
									alt='Destiantions'
								/>
								<figcaption>
									Sarapan di hotel, lalu langsung diajak
									untuk mengunjungi{' '}
									<b>Art in Paradise Pattaya</b>
									Setelah makan siang, perjalanan
									dilanjutkan menuju Kota Bangkok. Di tengah
									perjalanan, Anda akan mengunjungi{' '}
									<b>Dried Food Snack Shop </b>dan{' '}
									<b>Asiatique The River Front</b>. Makan
									malam (biaya sendiri). Setelah makan
									malam, diantar kembali menuju hotel.
								</figcaption>
							</figure>
						</div>
					)}
					{days === 'day5' && (
						<div className='days'>
							<h3>Pulang ke Indonesia</h3>
							<figure>
								<img
									src={details.detailsTour.heroImg.heroImg2}
									alt='Destiantions'
								/>
								<figcaption>
									Sarapan di hotel, langsung menuju{' '}
									<b>Damnuen Saduak Floating Market.</b>
									Setelah makan siang, Anda memiliki program{' '}
									<i>free</i>di <b>Platinum </b>sampai
									waktunya diantar ke <i>airport</i>untuk
									kembali ke kota asal.
								</figcaption>
							</figure>
						</div>
					)}
					{days === 'terms&conditions' && (
						<div className='terms_conditions'>
							<h5>
								<b>Harga Minimum 6 Pax / Twin Share:</b>
							</h5>
							<div>
								<div className='minPrice'>
									<h5>
										<b>Hotel</b>
										<p>
											BKK : Zayn Hotel Bangkok or Similiar
										</p>
										<p>
											PTY : So Boutique Jomtien Beach
											Pattaya or Similiar
										</p>
									</h5>
									<h5>
										<b>Pax</b>
										<p>IDR 8.800.000</p>
										<p>IDR 8.800.000</p>
									</h5>
								</div>
								<div className='conditions'>
									<h5>
										<b>
											*Harga dapat berubah sewaktu-waktu
											tanpa pemberitahuan sebelumnya
										</b>
									</h5>
									<h5>
										<b>
											*Kami belum melakukan pembookingan
											apapun
										</b>
									</h5>
								</div>
								<div>
									<h5>
										<b>Biaya Tour Belum Termasuk:</b>
									</h5>
									<ul>
										<li>Biaya keperluan pribadi</li>
										<li>
											Tips guide & driver USD 5/Pax/Day
										</li>
										<li>Optional tour</li>
										<li>Extra makanan dan minuman</li>
									</ul>
								</div>
								<div>
									<h5>
										<b>Catatan:</b>
									</h5>
									<ul>
										<li>
											Untuk melihat keindahan <i>sunrise</i>
											tergantung pada cuaca.
										</li>
										<li>
											Valid hanya untuk tamu domestik.
										</li>
										<li>
											Tidak berlaku pada waktu{' '}
											<i>
												high season/peak season/long weekend
											</i>
											.
										</li>
										<li>
											Harga dapat berubah sewaktu-waktu
											mengikuti ketersediaan <i>seat </i>
											yang ada.
										</li>
										<li>Berlkau sampai Maret 2023.</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default TourDetails;
