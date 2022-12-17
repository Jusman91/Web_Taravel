import '../search/SearchListData.css';

function SearchListData(props) {
	return (
		<>
			<div className={props.cName}>
				<div className='icons'>
					<props.icon />
				</div>
				<h6 className='label'>{props.label}</h6>
			</div>
		</>
	);
}
export default SearchListData;
