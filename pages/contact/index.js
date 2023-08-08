import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

import emailjs from 'emailjs-com';

import { useEffect, useRef, useState } from 'react';

const Contact = () => {
	const form = useRef();

	const [errorbox, setErrorBox] = useState('hidden');
	const [successbox, setSuccesBox] = useState('hidden');

	function sendEmail(e) {
		e.preventDefault();
		try {
			emailjs
				.sendForm(
					'service_1vkmouj',
					'template_4q0ep8b',
					form.current,
					'fmPapZS26wJ00rWUQ'
				)
				.then(
					(result) => {
						e.target.reset();
						if (successbox === 'hidden') {
							setSuccesBox('flex');
							setTimeout(() => {
								setSuccesBox('hidden');
							}, 8000);
						}
					},
					(error) => {
						if (errorbox === 'hidden') {
							setErrorBox('flex');
							setTimeout(() => {
								setErrorBox('hidden');
							}, 8000);
						}
					}
				);
		} catch (error) {
			if (errorbox === 'hidden') {
				setErrorBox('flex');
				setTimeout(() => {
					setErrorBox('hidden');
				}, 8000);
			}
		}
		
	}

	return (
		<>
			<div className='h-full bg-primary/30 '>
				<div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full  '>
					<div className='max-h-[60vh] overflow-auto-sm flex flex-col w-full max-w-[700px] '>
						<motion.h2
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='h2 text-center mb-12'
						>
							Let's <span className='text-accent'>Connect.</span>
						</motion.h2>
						<motion.form
							ref={form}
							onSubmit={sendEmail}
							variants={fadeIn('up', 0.5)}
							initial='hidden'
							animate='show'
							exit='hidden'
							className='flex-1 flex flex-col gap-6 w-full mx-auto'
						>
							<div className='flex gap-x-6 w-full'>
								<input
									type='text'
									name='from_name'
									placeholder='name'
									className='input'
									required
								/>
								<input
									type='text'
									name='email_id'
									placeholder='email'
									className='input'
									id='email'
									required
								/>
							</div>
							<input
								type='text'
								placeholder='Subject'
								className='input'
								name='subject'
								id='subject'
								required
							/>
							<textarea
								cols='30'
								rows='10'
								placeholder='message'
								className='textarea'
								name='message'
								id='message'
								required
							></textarea>
							<div
								class={`${errorbox} items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800`}
								role='alert'
							>
								<svg
									class='flex-shrink-0 inline w-4 h-4 mr-3'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
								</svg>
								<span class='sr-only'>Info</span>
								<div>
									<span class='font-medium'>Error!</span> There is Some Error
									while sending message right now. Please Contact on
									<div className='text-blue-500'>
										Email :{' '}
										<a href='mailto:abdulmateenzwl@gmail.com' target='_blank'>
											{' '}
											abdulmateenzwl@gmail.com
										</a>
										<br />
										<a
											href='https://connect.abdulmateenzwl.com'
											className='text-blue-500'
										>
											Other ways to contact me . . .
										</a>
									</div>
								</div>
							</div>
							<div
								class={`${successbox} items-center p-4 mb-4 text-sm text-blue-500 rounded-lg bg-green-50 dark:bg-gray-800 `}
								role='alert'
							>
								<svg
									class='flex-shrink-0 inline w-4 h-4 mr-3'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
								</svg>
								<span class='sr-only'>Info</span>
								<div>
									Your message has been send succesfuly.
									<div className='text-blue-500'>
										Email :{' '}
										<a href='mailto:abdulmateenzwl@gmail.com' target='_blank'>
											{' '}
											abdulmateenzwl@gmail.com
										</a>
										<br />
										<a
											href='https://connect.abdulmateenzwl.com'
											className='text-blue-500'
										>
											Contact me faster . . .
										</a>
									</div>
								</div>
							</div>
							<div className='flex justify-center'>
								<button
									type='submit'
									className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden border-primary-group group'
								>
									<span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
										Lets talk
									</span>
									<BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] ' />
								</button>
							</div>
						</motion.form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
