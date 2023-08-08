import { Sora } from '@next/font/google';

const sora = Sora({
	subsets: ['latin-ext'],
	variable: '--font-sora',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});
import Head from 'next/head';
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({ children }) => {
	return (
		<div
			className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
		>
			<Head>
				<link rel="icon" href="/favicon.svg" sizes="any" />
				<title>Abdul Mateen's Portfolio</title>
				<meta
					name='description'
					content='Explore my captivating portfolio showcasing a fusion of web development, graphic design, and problem-solving. Immerse yourself in a world of innovative projects and creative solutions.'
				/>
			</Head>
			<TopLeftImg />
			<Nav />
			<Header />
			{children}
		</div>
	);
};

export default Layout;
