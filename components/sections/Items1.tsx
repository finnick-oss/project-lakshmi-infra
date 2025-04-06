'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { Settings } from 'react-slick'; // Import Settings type from react-slick

// Dynamically import Slider with SSR disabled
const Slider = dynamic(() => import('react-slick'), { ssr: false });

// Extend Settings interface to include ref
interface SliderSettings extends Settings {
	ref?: React.RefObject<any>;
}

const settings: SliderSettings = {
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	autoplay: true,
	autoplaySpeed: 4000,
	speed: 2000,
	vertical: true,
	verticalSwiping: true,
	slidesToShow: 1,
	responsive: [
		{ breakpoint: 1400, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true } },
		{ breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true } },
		{ breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		{ breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		{ breakpoint: 375, settings: { slidesToShow: 1, slidesToScroll: 1 } },
		{ breakpoint: 320, settings: { slidesToShow: 1, slidesToScroll: 1 } },
	],
};

const slides = [
	{
		location: '60002 Just Mead East Alfonso',
		title: 'Moon Light Villa',
		oldPrice: '$1,900,000',
		newPrice: '$1,800,000',
	},
	{
		location: '70003 West Lake District',
		title: 'Sunrise Cottage',
		oldPrice: '$2,100,000',
		newPrice: '$1,950,000',
	},
	{
		location: '80004 North Hill Estates',
		title: 'Starlit Mansion',
		oldPrice: '$3,000,000',
		newPrice: '$2,850,000',
	},
];

export default function Items1() {
	const sliderRef = useRef<any>(null); // You can refine this type if you have Slider's type definitions

	const handlePrev = () => {
		sliderRef.current?.slickPrev(); // Navigate to previous slide
	};

	const handleNext = () => {
		sliderRef.current?.slickNext(); // Navigate to next slide
	};

	return (
		<>
			<div
				className="items-section-area sp1"
				style={{
					backgroundImage: 'url(/assets/img/all-images/bg/bg2.png)',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundAttachment: 'fixed',
				}}
			>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4">
							<div className="item-header heading1">
								<h5 data-aos="fade-left" data-aos-duration={800}>
									Our Best Featured Item
								</h5>
								<div className="space20" />
								<h2 className="text-anime-style-3">Our Featured Items</h2>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>
									At LaxmiInfra, we’re redefining the way people find, sell, and invest in properties, our mission.
								</p>
								<div className="space28" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1000}>
									<Link href="/sidebar-grid" className="theme-btn1">
										See All Properties{' '}
										<span className="arrow1">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg>
										</span>
										<span className="arrow2">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
												<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-3" />
						<div className="col-lg-4">
							<Slider ref={sliderRef} {...settings} className="box-slider">
								{slides.map((slide, index) => (
									<div key={index} className="item-featured-boxarea">
										<h5>
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11.5L16 8L12.5 17.0021L11 13L7 11.5Z" />
												</svg>
											</span>{' '}
											{slide.location}
										</h5>
										<div className="space20" />
										<h2>{slide.title}</h2>
										<div className="space28" />
										<h3>
											<s>{slide.oldPrice}</s> {slide.newPrice}
										</h3>
										<div className="space28" />
										<div className="btn-area1">
											<Link href="/sidebar-grid" className="theme-btn1">
												Schedule Visit{' '}
												<span className="arrow1">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg>
												</span>
												<span className="arrow2">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor">
														<path d="M12 13H4V11H12V4L20 12L12 20V13Z" />
													</svg>
												</span>
											</Link>
										</div>
									</div>
								))}
							</Slider>
						</div>
						<div className="col-lg-1">
							<div className="testimonial-arrows">
								<div className="prev-arrow" onClick={handlePrev}>
									<button>
										<i className="fa-solid fa-angle-up" />
									</button>
								</div>
								<div className="next-arrow" onClick={handleNext}>
									<button>
										<i className="fa-solid fa-angle-down" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}