//  data
import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { BsGit, BsGithub } from 'react-icons/bs';
import { TbBrandVscode, TbBrandVisualStudio, TbSql } from 'react-icons/tb';
import {
	SiNodedotjs,
	SiExpress,
	SiNextdotjs,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiCplusplus,
	SiCsharp,
} from 'react-icons/si';

const aboutData = [
	{
		title: 'skills',
		info: [
			{
				title: 'Front End Development',
				icons: [<FaHtml5 />, <FaCss3 />, <FaReact />, <SiNextdotjs />],
			},
			{
				title: 'Back End Development',
				icons: [<DiMongodb />, <SiExpress />, <SiNodedotjs />, <TbSql />],
			},
			{
				title: 'Tools',
				icons: [
					<BsGit />,
					<BsGithub />,
					<TbBrandVscode />,
					<TbBrandVisualStudio />,
				],
			},
			{
				title: 'Languages',
				icons: [<SiCplusplus />, <SiCsharp />, <FaJs />],
			},
			{
				title: 'UI/UX Design',
				icons: [<SiAdobeillustrator />, <SiAdobephotoshop />, <FaFigma />],
			},
		],
	},
	{
		title: 'experience',
		info: [
			{
				title: 'MERN Stack Intern - Tiers Limited',
				stage: 'June - August 2023',
			},
			{
				title: 'ACM Web FellowShip - ACM UET Lahore',
				stage: 'August 2023 - Present',
			},
			{
				title: 'Web Security Intern - Bytewise Ltd',
				stage: 'March - July 2023',
			},
		],
	},
	{
		title: 'Education',
		info: [
			{
				title: 'University of Engineering and Technology, Lahore',
				stage: '2021-2025',
			},
			{
				title: 'Intermedia Pre-Engineering - PGC Zafarwal',
				stage: '2021',
			},
		],
	},
];

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

//counter
import CountUp from 'react-countup';

const About = () => {
	const [index, setIndex] = useState(0);
	console.log(index);
	return (
		<div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
			<Circles />
			<motion.div
				variants={fadeIn('right', 0.2)}
				initial='hidden'
				animate='show'
				exit='hidden'
				className='hidden xl:flex absolute -bottom-[100px] -left-[17%] h-[80vh] '
			>
				<Avatar />
			</motion.div>
			{/* text */}
			<div className='container overflow-auto-sm mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
				<div className='flex-1 flex flex-col justify-center'>
					<motion.h2
						variants={fadeIn('right', 0.2)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='h4 text-3xl xl:text-5xl font-bold mb-4 xl:mb-8 z-10'
					>
						Captivating <span className='primary-color'>Stories</span> & <br />
						Magnificent Designs.
					</motion.h2>
					<motion.p
						variants={fadeIn('right', 0.4)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='max-w-[500px] z-10 mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify'
					>
						2 year ago, I began Feelancing as a developer. Since then , I've
						done remote work for agencies, counsulted for startups, amd
						collaborated on digital products for buisness and consumer use.
					</motion.p>
					{/* counters */}
					<motion.div
						variants={fadeIn('right', 0.6)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
					>
						<div className='flex flex-1 xl:gap-x-6'>
							{/* experience */}
							<div className='relative flex-1 after:w[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
								<div className='text-2xl xl:text-4xl font-extrabold primary-color mb-2 '>
									<CountUp start={0} end={2} duration={8} /> +
								</div>
								<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
									Years of Experience
								</div>
							</div>
							{/* Clients */}
							<div className='relative flex-1 after:w[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
								<div className='text-2xl xl:text-4xl font-extrabold primary-color mb-2 '>
									<CountUp start={0} end={10} duration={8} /> +
								</div>
								<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
									Satisfied Clients
								</div>
							</div>
							{/* Projects */}
							<div className='relative flex-1 after:w[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
								<div className='text-2xl xl:text-4xl font-extrabold primary-color mb-2 '>
									<CountUp start={0} end={15} duration={8} /> +
								</div>
								<div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
									Finished Projects
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* info */}
				<motion.div
					variants={fadeIn('left', 0.4)}
					initial='hidden'
					animate='show'
					exit='hidden'
					className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
				>
					<div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className={` ${
										index === itemIndex &&
										'primary-color after:w-[100%] after:transition-all after:duration-300 '
									} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
									onClick={() => setIndex(itemIndex)}
								>
									{item.title}
								</div>
							);
						})}
					</div>
					<div className=' py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
						{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
								>
									<div className='font-light mb-2 md:mb-0'>{item.title}</div>
									<div className='hidden md:flex'>-</div>
									<div>{item.stage}</div>
									<div className='flex gap-x-4'>
										{item.icons?.map((icon, itemIndex) => {
											return (
												<div className='text-2xl text-white primary-color-hover'>
													{icon}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
