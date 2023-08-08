// data

import { BsFillArrowRightSquareFill } from 'react-icons/bs';

const workSlides = {
	slides: [
		{
			images: [
				{
					title: 'NoteBook',
					path: '/notebook.jpg',
					// live_link: 'https://newsbytes.abdulmateenzwl.com',
					code_link: 'https://github.com/abdulmateenzwl/News-Bytes',
				},
				{
					title: 'Text Analyzer',
					path: '/Text Analyzer.jpg',
					live_link: 'https://text-analyzer.abdulmateenzwl.com',
					code_link: 'https://github.com/AbdulMateenzwl/Text-Analyzer',
				},
				{
					title: 'News Bytes',
					path: '/NewsBytes.jpg',
					// live_link: 'https://newsbytes.abdulmateenzwl.com',
					code_link: 'https://github.com/abdulmateenzwl/News-Bytes',
				},
				{
					title: 'Connect Me',
					path: '/Connect me.jpg',
					live_link: 'https://connect.abdulmateenzwl.com',
					code_link: 'https://github.com/AbdulMateenzwl/Connect-Me',
				},
			],
		},
		{
			images: [
				{
					title: 'Ecommerce Store',
					path: '/shophub.jpg',
					code_link: 'https://github.com/AbdulMateenzwl/Ecommerce-Store',
					live_link: 'https://shophub.abdulmateenzwl.com',
				},
				{
					title: 'Old Portfolio',
					path: '/Old Portfolio.jpg',
					live_link: 'https://old-portfolio.abdulmateenzwl.com',
					code_link: 'https://github.com/abdulmateenzwl/old-portfolio',
				},
				{
					title: 'title',
					path: '/thumb3.jpg',
					code_link: '',
					live_link: '',
				},
			],
		},
	],
};

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';

import { Pagination } from 'swiper';

import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className='h-[280px] sm:h-[480px]'
		>
			{workSlides.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
							{slide.images.map((image, index) => {
								return (
									<div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
										<div className='flex items-center justify-center relative overflow-hidden group'>
											<Image
												className='rounded-2xl'
												src={image.path}
												width={500}
												height={300}
												alt=''
											/>
											<div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-2xl overflow-hidden'>
												<div className='flex items-center gap-x-2 text-[10px] sm:text-[14px] tracking-[2px]  w-full '>
													<p className='w-full text-[10px] sm:text-[19px] text-center mt-2 text-white'>
														{image.title}
													</p>
												</div>
												<div className='absolute bottom-0 translate-y-full group-hover:-translate-y-[100%] group-hover:md:-translate-y-[250%]  transition-all duration-300 flex items-center justify-center w-full'>
													<div className='flex items-center gap-x-2 text-[10px] sm:text-[14px] tracking-[2px] w-min'>
														{image.code_link && (
															<a href={image.code_link} target='_blank'>
																<button className='bg-[#251458] hover:bg-[#4b3491] text-white font-bold py-2 px-4 rounded-full'>
																	Code
																</button>
															</a>
														)}
														{image.live_link && (
															<a href={image.live_link} target='_blank'>
																<button className='bg-[#251458] hover:bg-[#4b3491] text-white font-bold py-2 px-4 rounded-full'>
																	Live
																</button>
															</a>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
							<div className=' items-center justify-center flex h-full'>
								<a href='https://github.com/abdulmateenzwl'>
									<BsFillArrowRightSquareFill className='text-4xl text-accent' />
								</a>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
