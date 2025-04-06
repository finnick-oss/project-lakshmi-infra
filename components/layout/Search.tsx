
export default function Search() {
	return (
		<>
			<div>
				<div className="header-search-form-wrapper">
					<div className="tx-search-close tx-close"><i className="fa-solid fa-xmark" /></div>
					<div className="header-search-container">
						<form role="search" className="search-form">
							<input type="search" className="search-field" placeholder="Search …" name="s" />
							<button type="submit" className="search-submit"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
								<path d="M13.7955 13.8111L19 19M16 8.5C16 12.6421 12.6421 16 8.5 16C4.35786 16 1 12.6421 1 8.5C1 4.35786 4.35786 1 8.5 1C12.6421 1 16 4.35786 16 8.5Z" stroke="#030E0F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
							</svg></button>
						</form>
					</div>
				</div>
				<div className="body-overlay" />
			</div>

		</>
	)
}
