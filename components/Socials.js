import Link from 'next/link';
import { BsThreeDots } from 'react-icons/hi';
import {
	RiFacebookBoxFill,
	RiInstagramFill,
	RiLinkedinFill,
	RiGithubFill,
	RiMore2Line,
} from 'react-icons/ri';

const Socials = () => {
	return (
		<div className='flex items-center gap-x-5 text-lg'>
			<Link
				href={'/'}
				className='primary-color-hover transition-all duration-300'
			>
				<RiFacebookBoxFill />
			</Link>
			<Link
				href={'/'}
				className='primary-color-hover transition-all duration-300'
			>
				<RiInstagramFill />
			</Link>
			<Link
				href={'/'}
				className='primary-color-hover transition-all duration-300'
			>
				<RiLinkedinFill />
			</Link>
			<Link
				href={'/'}
				className='primary-color-hover transition-all duration-300'
			>
				<RiGithubFill />
			</Link>
			<Link
				href={'/'}
				className='primary-color-hover transition-all duration-300'
			>
				<RiMore2Line />
			</Link>
		</div>
	);
};

export default Socials;
