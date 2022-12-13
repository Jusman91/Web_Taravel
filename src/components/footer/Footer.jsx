import React from 'react';
import './FooterStyles.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Logo from '../../asset/logo/p1.png';
import Logo2 from '../../asset/logo/l2.jpg';
import FooterData from '../footer/FooterData';

function Footer() {
	return (
		<section className='container-footer'>
			<div className='footer-up'>
				<div className='left'>
					<h6>Home ..... </h6>
					<div className='wrapper-logo'>
						<img src={Logo} alt='Logo' />
					</div>
				</div>
				<div className='icons-sosial-media'>
					<FaFacebookF />
					<FaTwitter />
					<FaInstagram />
				</div>
			</div>
			<div className='wrapper-link-in-footer'>
				<FooterData
					textHead='Travel.'
					text1='Flights'
					text2='Hotels'
					text3='Xperiences'
					text4='Tour Packages'
					text5='Corparate & MICE'
					text6='Hot Deals'
					text7='Smailing Platinum'
				/>
				<FooterData
					textHead='Popular.'
					text1='Jakarta - Melbourne ticket'
					text2='Jakarta - Sydney ticke'
					text3='Jakarta - Tokyo ticke'
					text4='Hotel in Hongkong'
					text5='Hotel in Macao'
					text6='Hotel in China'
					text7='Hotel in France'
				/>
				<FooterData
					textHead='Getting Started.'
					text1='Why Choose Us'
					text2='Help & Support'
					text3='Newsletter Subscription'
				/>
				<FooterData
					textHead='About.'
					text1='The Company'
					text2='Awards & Recognitions'
					text3='Contact Us'
				/>
				<FooterData
					textHead='Contact.'
					text1='Jl. Majapahit No.28, JKT 2922 0000 (Head Office)'
					text2='WhatsApp (Weekdays 09:00 - 16:30)'
					text3='Tour +62811xxxxxx'
					text4='Tiket +62813xxxxxxxx'
					text5='Cust. Care +62811xxxxxxxx'
				/>
			</div>
			<div>
				<img src={Logo2} alt='Logo' />
				<p>
					Copyright © 2022 NgakakTour. All rights reserved.
					Privacy Policy
				</p>
			</div>
		</section>
	);
}

export default Footer;
