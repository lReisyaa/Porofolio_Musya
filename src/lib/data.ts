export const GITHUB_USER = 'lReisyaa';

export const profile = {
	name: 'Mosyarofah',
	tagline: 'Mahasiswa Teknik Informatika & Web Developer',
	email: 'mosyarofahsara@gmail.com',
	github: `https://github.com/${GITHUB_USER}`,
	instagram: 'https://instagram.com/syavandaa__', 
	linkedin: 'https://www.linkedin.com/in/mosya-rofah-9a08b4328',
	about: [
		'Saya Mosyarofah, mahasiswa Teknik Informatika yang memiliki ketertarikan besar pada pengembangan perangkat lunak, khususnya Web Development. Saya percaya bahwa website yang baik bukan hanya soal fungsi, tetapi juga bagaimana ia memberikan pengalaman yang nyaman bagi penggunanya.',
		'Perjalanan saya dimulai dari mempelajari logika pemrograman dasar menggunakan C++, yang melatih saya berpikir terstruktur. Seiring waktu, saya mulai mendalami pengembangan web dari nol dengan menguasai HTML, CSS, dan JavaScript. Saat ini, saya terus mengeksplorasi ekosistem frontend modern seperti React dan Next.js untuk membangun antarmuka web yang interaktif dan responsif.',
	],
};

export type Skill = { name: string; icon: string; };
export const skills: Skill[] = [
	{ name: 'C++',          icon: 'https://cdn.simpleicons.org/cplusplus/00599C' }, // <-- TAMBAHAN BARU
	{ name: 'Python',       icon: 'https://cdn.simpleicons.org/python/3776AB' },
	{ name: 'HTML & CSS',   icon: 'https://cdn.simpleicons.org/html5/E34F26' },
	{ name: 'JavaScript',   icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
	{ name: 'React',        icon: 'https://cdn.simpleicons.org/react/61DAFB' },
	{ name: 'Git & GitHub', icon: 'https://cdn.simpleicons.org/git/F05032' },
	{ name: 'MySQL',        icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
];

export type Project = { title: string; description: string; tags: string[]; url: string; image?: string; };
const repo = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

export const projects: Project[] = [
	{
		title: 'JotunColor Landing Page',
		description: 'Website landing page resmi untuk PT Distrindo Pratama Sejahtera. Menampilkan katalog cat, kalkulator kebutuhan, dan fitur cek stok.',
		tags: ['HTML, CSS, Javasript'],
		url: 'https://github.com/lReisyaa/project_web_jotun',
		image: '/jotun-color.png', 
	},
	{
		title: 'Distrindo Cat Katalog',
		description: 'Halaman katalog lengkap produk cat Jotun. Dilengkapi filter kategori (Interior, Eksterior, Kayu & Besi) dan tombol chat WhatsApp langsung.',
		tags: ['Laravel', 'Blade', 'Tailwind'],
		url: 'https://github.com/lReisyaa/distrindo-cat-web', 
		image: '/katalog-cat.png',
	},
	{
		title: 'Cuci Sepatu Bontang',
		description: 'Website layanan jasa cuci sepatu profesional di Bontang. Menampilkan daftar layanan, estimasi harga, dan integrasi pemesanan via WhatsApp.',
		tags: ['HTML'],
		url: 'https://github.com/tikaorenjuse/toko-sepatu', 
		image: '/cuci-sepatu.png',
	},
];