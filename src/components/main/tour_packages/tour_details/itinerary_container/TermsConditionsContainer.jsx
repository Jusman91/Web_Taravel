import '../TourDetails.css';

const TermsConditionsContainer = ({ TesCons }) => {
	return (
		<div>
			<div className='terms_conditions'>
				<h5>
					<b>{TesCons.priceDesc[0]}</b>
				</h5>
				<h5>
					<b>{TesCons.priceDesc[1]}</b>
				</h5>
				<div>
					<div className='minPrice'>
						<h5>
							<b>Hotel</b>
							<p>{TesCons.hotel[0]}</p>
							<p>{TesCons.hotel[1]}</p>
						</h5>
						<h5>
							<b>Pax</b>
							<p>{TesCons.pax}</p>
							<p>{TesCons.pax}</p>
						</h5>
					</div>
					<div className='conditions'>
						<h5>
							<b>{TesCons.desc1}</b>
						</h5>
						<h5>
							<b>{TesCons.desc2}</b>
						</h5>
					</div>
					<div>
						<h5>
							<b>Biaya Tour Belum Termasuk:</b>
						</h5>
						<ul>
							{TesCons.noInclude.map((item, idx) => (
								<li key={idx}>{item}</li>
							))}
						</ul>
					</div>
					<div>
						<h5>
							<b>Catatan:</b>
						</h5>
						<ul>
							{TesCons.note.map((item, idx) => (
								<li key={idx}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TermsConditionsContainer;
