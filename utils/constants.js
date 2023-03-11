export const APP_NAME = 'ReBALIty';
export const WA_NUM = '6287756614174';
export const WA_URL = `https://wa.me/${WA_NUM}`
export const ADDRESS = 'Jl. Surya Bhuana I B No. 5, Kerobokan Kaja, Kuta Utara, 80361';

export const getMeta = (lang) => {
    const titleEn = 'ReBALIty - Authentic and Unforgettable Travel Experiences in Bali';
    const titleId = 'ReBALIty - Pengalaman Perjalanan Otentik dan Tak Terlupakan di Bali';
    const descEn = "Discover the true essence of Bali with ReBALIty, a travel agency dedicated to showcasing the island's rich cultural heritage and stunning natural landscapes. Our customizable tour packages, designed by local experts, provide personalized and authentic travel experiences beyond the typical tourist spots. Choose ReBALIty as your travel partner in Bali for a warm and welcoming environment and unforgettable memories.";
    const descId = "Temukan esensi sejati Bali dengan ReBALIty, biro perjalanan yang didedikasikan untuk menampilkan warisan budaya pulau yang kaya dan pemandangan alam yang menakjubkan. Paket tur kami yang dapat disesuaikan, dirancang oleh para ahli lokal, memberikan pengalaman perjalanan yang dipersonalisasi dan otentik di luar tempat wisata pada umumnya. Pilih ReBALIty sebagai mitra perjalanan Anda di Bali untuk lingkungan yang hangat dan ramah serta kenangan yang tak terlupakan.";
    return lang === 'en' ? { title: titleEn, desc: descEn } : { title: titleId, desc: descId };
}