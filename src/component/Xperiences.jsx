import React from 'react';
import './ContentDataStyles.css';
import XperiencesImg1 from './../asset/xperiences/x1.jpg';
import XperiencesImg2 from './../asset/xperiences/x2.jpg';
import XperiencesImg3 from './../asset/xperiences/x3.jpg';
import XperiencesImg4 from './../asset/xperiences/x4.jpg';
import XperiencesImg5 from './../asset/xperiences/x5.jpg';
import XperiencesImg6 from './../asset/xperiences/x6.jpg';
import XperiencesImg7 from './../asset/xperiences/x7.jpg';
import XperiencesImg8 from './../asset/xperiences/x8.jpg';
import ContentData from './ContentData';

function Xperiences() {
	return (
		<>
			<section className='container-content'>
				<div className='head'>
					<h2>Xperiences</h2>
					<p>
						Hundreds of our travellers are going to this
						trips. Get the best Xperiences's Deal!
					</p>
				</div>
				<div className='wrapp-content'>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg1}
						textHeading='Sydney BridgeClimb'
						text1='Sydney'
						text2='Starting from'
						currency='IDR'
						price=' 1.636.519'
						btnClass='btn'
						btn='Check Xperiences'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg2}
						textHeading='Blue Montains Nature and Wildlife Day Tour'
						text1='Sydney'
						text2='Starting from'
						currency='IDR'
						price=' 1.422.185'
						btnClass='btn'
						btn='Check Xperiences'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg3}
						textHeading='Hunter Valley Wine Tasting Tour'
						text1='Sydney'
						text2='Starting from'
						currency='IDR'
						price=' 1.746.985'
						btnClass='btn'
						btn='Check Xperiences'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg4}
						textHeading='Port Stephens Day Tour with Dolphing Watching. Sandboarding and Australian Wildlife'
						text1='Sydney'
						text2='Starting from'
						currency='IDR'
						price=' 1.746.985'
						btnClass='btn'
						btn='Check Xperiences'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg5}
						textHeading='Old Town Tuk Tuk Hop-On Hop-Off'
						text1='Bangkok'
						text2='Starting from'
						currency='IDR'
						price=' 54.607'
						btnClass='btn'
						btn='Check Xperiences'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg6}
						textHeading='Beijing Mutianyu Great Wall Admission Ticket'
						text1='Beijing'
						text2='Starting from'
						currency='IDR'
						price=' 54.607'
						btnClass='btn'
						btn='Check Xperiences'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg7}
						textHeading='Tokyo Tower Observatori Ticket'
						text1='Tokyo'
						text2='Starting from'
						currency='IDR'
						price=' 136.842'
						btnClass='btn'
						btn='Check Xperiences'
					/>
					<ContentData
						cNameContainer='wrapp-img'
						cName='desc'
						img1={XperiencesImg8}
						textHeading='Korean Folk Village Admission Ticket'
						text1='Seoul'
						text2='Starting from'
						currency='IDR'
						price=' 167.213'
						btnClass='btn'
						btn='Check Xperiences'
					/>
				</div>
			</section>
		</>
	);
}

export default Xperiences;
