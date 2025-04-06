'use client'
import Slider from "react-slick"
import Link from 'next/link'

export default function Hero2() {
	const settings1 = {
		autoplay: true,
		autoplaySpeed: 2500,
		speed: 2500,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: false,
		pauseOnDotsHover: true,
		cssEase: 'linear',
		fade: true,
		draggable: true,
	}
	return (
		<>

			<div>
				<Slider {...settings1} className="hero2-slider-sectionarea">
					<div className="hero2-slider-area">
						<img src="/assets/img/elements/elements1.png" alt="housebox" className="elements1" />
						<img src="/assets/img/elements/elements2.png" alt="housebox" className="elements2" />
						<img src="/assets/img/all-images/hero/hero2-img1.png" alt="housebox" className="hero2-img1" />
						<div className="img1">
							<img src="/assets/img/all-images/hero/hero2-img2.png" alt="housebox" />
						</div>
						<div className="container">
							<div className="row">
								<div className="col-lg-5">
									<div className="hero2-header">
										<h5>Discover Your Ideal Property Today!</h5>
										<div className="space20" />
										<h1>Elegant Homes For Elevated Lifestyles</h1>
										<div className="space20" />
										<div className="btn-area1">
											<Link href="/property-details-v1" className="theme-btn3">Find Your Dream Home Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
					<div className="hero2-slider-area">
						<img src="/assets/img/elements/elements1.png" alt="housebox" className="elements1" />
						<img src="/assets/img/elements/elements2.png" alt="housebox" className="elements2" />
						<img src="/assets/img/all-images/hero/hero2-img1.png" alt="housebox" className="hero2-img1" />
						<div className="img1">
							<img src="/assets/img/all-images/hero/hero2-img3.png" alt="housebox" />
						</div>
						<div className="container">
							<div className="row">
								<div className="col-lg-5">
									<div className="hero2-header">
										<h5>Discover Your Ideal Property Today!</h5>
										<div className="space20" />
										<h1>Elegant Homes For Elevated Lifestyles</h1>
										<div className="space20" />
										<div className="btn-area1">
											<Link href="/property-details-v1" className="theme-btn3">Find Your Dream Home Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
					<div className="hero2-slider-area">
						<img src="/assets/img/elements/elements1.png" alt="housebox" className="elements1" />
						<img src="/assets/img/elements/elements2.png" alt="housebox" className="elements2" />
						<img src="/assets/img/all-images/hero/hero2-img1.png" alt="housebox" className="hero2-img1" />
						<div className="img1">
							<img src="/assets/img/all-images/hero/hero2-img4.png" alt="housebox" />
						</div>
						<div className="container">
							<div className="row">
								<div className="col-lg-5">
									<div className="hero2-header">
										<h5>Discover Your Ideal Property Today!</h5>
										<div className="space20" />
										<h1>Elegant Homes For Elevated Lifestyles</h1>
										<div className="space20" />
										<div className="btn-area1">
											<Link href="/property-details-v1" className="theme-btn3">Find Your Dream Home Now <span className="arrow1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
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
				</Slider>
			</div>
		</>
	)
}
