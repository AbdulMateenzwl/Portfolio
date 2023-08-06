import {
	RxCrop,
	RxPencil2,
	RxDesktop,
	RxReader,
	RxRocket,
	RxArrowTopRight,
} from 'react-icons/rx';

import { BiBrain } from 'react-icons/bi';
import { MdWebAsset } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
	{
		icon: <MdWebAsset />,
		title: 'Web Development',
		description:
			'Skilled web developer crafting interactive sites with a focus on user-centric design and functionality.',
	},
	{
		icon: <RxDesktop />,
		title: 'Desktop Development',
		description:
			'Experienced in desktop application development with a focus on creating efficient and user-friendly software.',
	},
	{
		icon: <RxPencil2 />,
		title: 'Graphic Design',
		description:
			'Passionate graphic designer creating visually captivating designs for digital and print media.',
	},
	{
		icon: <BiBrain />,
		title: 'Problem Solving',
		description:
			'Resourceful problem solver adept at analyzing challenges and delivering innovative solutions with precision.',
	},
];

const ServiceSlider = () => {
	return (
		<Swiper
			breakpoints={{
				320: {
					slidesperView: 1,
					spaceBetween: 15,
				},
				640: {
					slidesperView: 3,
					spaceBetween: 15,
				},
			}}
			freeMode={false}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Pagination]}
			className='h-[240px] sm:h-[340px]'
		>
			{serviceData.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='bg-[rgba(65,47,123,1.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '>
							<div className='text-4xl primary-color mb-4 '>{item.icon}</div>
							<div className='mb-8'>
								<div className='mb-2 text-lg'>{item.title}</div>
								<p className='max-w-[350px] leading-normal text-justify'>
									{item.description}
								</p>
							</div>
							<div className='text-3xl'>
								<RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default ServiceSlider;
