import {} from 'react-icons/rx';

import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
	return (
		<div className='h-full bg-primary/30 flex items-center'>
			<Circles />
			<div className='container mx-auto'>
				<div className='flex overflow-auto-sm flex-col xl:flex-row gap-x-8 max-h-[60vh] my-auto'>
					<div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='h2 xl:mt-8'
						>
							My Service <span className='primary-color'>.</span>{' '}
						</motion.h2>
						<motion.p
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-justify'
						>
							Unlock the Full Potential of Your Vision: Experience a Diverse
							Array of Professional Solutions Catered to Meet Your Unique Needs
							and Goals.
						</motion.p>
					</div>
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial='hidden'
						animate='show'
						exit='hidden'
						className='w-full xl:max-w-[65%]'
					>
						<ServiceSlider />
					</motion.div>
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default Services;
