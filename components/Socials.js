import Link from 'next/link';
import { BsThreeDots } from 'react-icons/hi';
import {
	RiFacebookBoxFill,
	RiInstagramFill,
	RiLinkedinFill,
	RiGithubFill,
	
} from 'react-icons/ri';

import {BsFillArrowRightSquareFill} from 'react-icons/bs';

const Socials = () => {
	return (
		<div className='flex items-center gap-x-5 text-lg'>
			<Link
				href='https://facebook.com/abdulmateenzwl'
				target='_blank'
				className='primary-color-hover transition-all duration-300 scale-[170%]'
			>
				<RiFacebookBoxFill />
			</Link>
			<Link
				href='https://instagram.com/abdulmateenzwl'
				target='_blank'
				className='primary-color-hover transition-all duration-300 scale-[170%]'
			>
				<RiInstagramFill />
			</Link>
			<Link
				href={'https://linkedin.com/in/abdulmateenzwl'}
				target='_blank'
				className='primary-color-hover transition-all duration-300 scale-[170%]'
			>
				<RiLinkedinFill />
			</Link>
			<Link
				href='https://github.com/abdulmateenzwl'
				target='_blank'
				className='primary-color-hover transition-all duration-300 scale-[170%]'
			>
				<RiGithubFill />
			</Link>
			<Link
				href='https://connect.abdulmateenzwl.com'
				target='_blank'
				className='primary-color-hover transition-all duration-300 '
			>
				<BsFillArrowRightSquareFill />
			</Link>
		</div>
	);
};

export default Socials;
