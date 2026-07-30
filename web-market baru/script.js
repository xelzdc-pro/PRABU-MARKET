// Smooth scrolling effect untuk navigasi internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') { // Hanya scroll jika bukan link kosong
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Konsol log sederhana untuk memastikan JS bekerja
console.log("Website PRABU MARKET berhasil dimuat. Selamat menikmati!");