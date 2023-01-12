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
import DaysContainer from './itinerary_container/DaysContainer';
import TermsConditionsContainer from './itinerary_container/TermsConditionsContainer';

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
						{details.detailsTour.heroImg.map(
							(item, idx) => (
								<div className='wrapper-img-hero-tour-details'>
									<img
										key={idx}
										src={item}
										alt='hero_destinations'
									/>
								</div>
							),
						)}
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
						{details.detailsTour.heroImg.map(
							(item, idx) => (
								<div className='photos'>
									<img key={idx} src={item} alt='' />
								</div>
							),
						)}
						<button>More Photos</button>
					</div>
				</div>
				<div className='wrapper_title_desc'>
					<div className='left_title'>
						<BsFillHeartFill className='icons-details' />
						<BsFillHeartFill className='icons-details' />
						<BsFillHeartFill className='icons-details' />

						<h3>{details.textHeading}</h3>
						<p>{details.detailsTour.country}</p>
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
						{}
						<li className='td-i_list'>
							<div>
								<IoMdPaperPlane className='td-i' />
							</div>
							<h5>FfafAG fgawfa</h5>
						</li>
					</ul>
				</div>
				<div className='container-includ-item'>
					<div className='wrapper-includ-item'>
						<div className='includ-item-img'>
							<img
								src={details.detailsTour.heroImg[2]}
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
								src={details.detailsTour.heroImg[1]}
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
						<>
							{details.detailsTour.itinerary.day1.map(
								(item, idx) => (
									<DaysContainer key={idx} days={item} />
								),
							)}
						</>
					)}
					{days === 'day2' && (
						<>
							{details.detailsTour.itinerary.day2.map(
								(item, idx) => (
									<DaysContainer key={idx} days={item} />
								),
							)}
						</>
					)}
					{days === 'day3' && (
						<>
							{details.detailsTour.itinerary.day3.map(
								(item, idx) => (
									<DaysContainer key={idx} days={item} />
								),
							)}
						</>
					)}
					{days === 'day4' && (
						<>
							{details.detailsTour.itinerary.day4.map(
								(item, idx) => (
									<DaysContainer key={idx} days={item} />
								),
							)}
						</>
					)}
					{days === 'day5' && (
						<>
							{details.detailsTour.itinerary.day5.map(
								(item, idx) => (
									<DaysContainer key={idx} days={item} />
								),
							)}
						</>
					)}

					{days === 'terms&conditions' && (
						<>
							{details?.detailsTour.itinerary.termsConditions.map(
								(item, idx) => (
									<TermsConditionsContainer
										key={idx}
										TesCons={item}
									/>
								),
							)}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default TourDetails;
