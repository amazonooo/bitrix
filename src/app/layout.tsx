import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BitrixWidget from '@/components/shared/BitrixWidget'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
	metadataBase: new URL('https://kurs-auto.ru'),
	title: {
		default: 'УМЦ ВОА',
		template: '%s | УМЦ ВОА',
	},
	description: 'Автоматизация бизнеса посредством Bitrix24',
	alternates: {
		canonical: new URL('https://kurs-auto.online'),
	},
	openGraph: {
		title: 'УМЦ ВОА',
		description: 'Автоматизация бизнеса посредством Bitrix24',
		images: 'https://profpol.online/images/og-image.jpg',
		type: 'website',
		locale: 'en_US',
		url: 'https://kurs-auto.ru',
		siteName: 'Profpol',
	},
	robots: {
		index: true,
		follow: true,
	},
	keywords: [
		'bitrix24',
		'битрикс',
		'битрикс24',
		'bitrix',
		'бизнес',
		'business',
		'автоматизация бизнеса',
		'автоматизация продаж bitrix',
		'умц воа',
		'Умц воа',
		'УМЦ воа',
		'УМЦ ВОА',
		'аудит по битрикс',
		'аудит по bitrix',
		'внедрить bitrix',
		'внедрить битрикс',
		'Bitrix24',
		'Битрикс',
		'Битрикс24',
		'Bitrix',
		'Бизнес',
		'Business',
		'Автоматизация бизнеса',
		'Автоматизация продаж bitrix',
		'Аудит по битрикс',
		'Аудит по bitrix',
		'Внедрить bitrix',
		'Внедрить битрикс',
		'Внедрить Битрикс',
	],
	creator: 'amazonooo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<head>
				<meta
				// name='google-site-verification'
				// content='P1KrX2wMaM-1OHzgynJCl_g9_qBoZMMPTw6_FOH-99Y'
				/>
				<meta title='УМЦ ВОА' />
				<meta
					name='description'
					content='Автоматизация бизнеса посредством Bitrix24'
				/>
				<link rel='icon' href='/logo.png' sizes='any' />
			</head>
			<body
				className={`${geistSans.variable} antialiased min-h-screen overflow-x-hidden`}
			>
				<div className='flex flex-col min-h-screen relative'>
					<Header />
					<BitrixWidget />
					<main className='flex-1'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
