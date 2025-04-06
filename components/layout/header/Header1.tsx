import Link from 'next/link'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<header>
				<div className="header-area homepage1 header header-sticky d-none d-lg-block " id="header">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="header-top-area">
									<ul className="header-content">
										<li><Link href="/#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
											<path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z">
											</path>
										</svg> support@laxmiinfra.com</Link> <span> | </span></li>
										<li><Link href="/tel:(234)345-4574"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
											<path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z">
											</path>
										</svg> +91 987-654-3210</Link><span> | </span></li>
									</ul>
									
								</div>
								<div className="header-elements">
									<div className="site-logo">
										<Link href="/"><img src="/assets/img/logo/logo1.png" alt="laxmiinfra" /></Link>
									</div>
									<div className="main-menu">
										<ul>
											<li><Link href="/" className="plus">Home</Link>
											</li>
											<li><Link href="/about-us">About Us</Link></li>
											{/* <li><Link href="/#" className="plus">Pages <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/about-us">About Us</Link></li>
													<li><Link href="/our-service">Our Services</Link></li>
													<li><Link href="/pricing">Pricing</Link></li>
													<li><Link href="/contact">Contact Us</Link></li>
													<li><Link href="/faq">FAQ's</Link></li>
													<li><Link href="/privacy-policy">Privacy Policy</Link></li>
													<li><Link href="/loan-caculator">Loan Calculator</Link></li>
												</ul>
											</li> */}
											{/* <li><Link href="/#" className="plus">Listing <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/property-halfmap-grid">Property Half Grid</Link></li>
													<li><Link href="/property-halfmap-list">Property Half Map List</Link></li>
													<li><Link href="/topmap-grid">Property Top Map Grid</Link></li>
													<li><Link href="/topmap-list">Property Top Map List</Link></li>
													<li><Link href="/sidebar-grid">Find Sidebar Grid</Link></li>
													<li><Link href="/sidebar-list">Find Sidebar List</Link></li>
												</ul>
											</li> */}
											<li><Link href="/#" className="plus">Properties <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/property-details-v1">Property Details 01</Link></li>
													<li><Link href="/property-details-v2">Property Details 02</Link></li>
													{/* <li><Link href="/property-details-v3">Property Details 03</Link></li>
													<li><Link href="/property-details-v4">Property Details 04</Link></li> */}
												</ul>
											</li>
											<li><Link href="/#" className="plus">Dashboard <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/dashboard">Dashboard</Link></li>
													<li><Link href="/my-property">My Properties</Link></li>
													<li><Link href="/message">Message</Link></li>
													<li><Link href="/my-favorites">My Favourites</Link></li>
													<li><Link href="/reviews">Reviews</Link></li>
													<li><Link href="/my-profile">My Propfile</Link></li>
													<li><Link href="/add-property">Add Property</Link></li>
												</ul>
											</li>
											{/* <li><Link href="/#" className="plus">Blogs <i className="fa-solid fa-angle-down" /></Link>
												<ul className="dropdown-padding">
													<li><Link href="/blog">Blog Default</Link></li>
													<li><Link href="/blog-grid">Blog Grid</Link></li>
													<li><Link href="/blog-detail">Blog Post Details</Link></li>
												</ul>
											</li> */}
										</ul>
									</div>
									<div className="btn-area">
										<div className="search-icon header__search header-search-btn">
											<Link href="/#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
												<path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z">
												</path>
											</svg></Link>
										</div>
										<Link href="/property-halfmap-grid" className="theme-btn1">View Listing <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
											<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
										</svg></span><span className="arrow2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
											<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
										</svg></span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
