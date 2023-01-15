import '../filter_packages/FilterPackages.css';

function ResFilter(props) {
	return (
		<div
			onClick={props.setShowFilter}
			className='res-component-filter'>
			<button type='button'>Filter</button>
		</div>
	);
}

export default ResFilter;
