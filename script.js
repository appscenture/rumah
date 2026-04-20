const hamburger = document.getElementById('hamburger')
const navMenu = document.querySelector('#nav-menu')
const navLinks = document.querySelectorAll('.nav-link');

// Hamburger menu toggle
hamburger.addEventListener('click', function() {
    this.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden')
        hamburger.classList.remove('hamburger-active')
    })
})

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if( !hamburger.contains(e.target) && !navMenu.contains(e.target) ) {
        navMenu.classList.add('hidden')
        hamburger.classList.remove('hamburger-active')
    }
})

// Highlight active section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

window.onscroll = function() {
    const nav = document.querySelector('#nav')
    const fixedNav = nav.offsetTop;

    if ( window.pageYOffset > fixedNav ) {
        nav.classList.add('navbar-fixed')
        
    }
    else {
        nav.classList.remove('navbar-fixed')
    }
}

const button = document.getElementById('btn')
const form = document.querySelector('form')

window.addEventListener('DOMContentLoaded', function() {
    const visitDate = document.querySelector('#visit-date')
    if (visitDate) {
        visitDate.min = new Date().toISOString().split('T')[0]
    }
})

form.addEventListener('submit', function(e) {
    const inputName = document.querySelector('#name').value.trim();
    const inputDate = document.querySelector('#visit-date').value.trim();
    const inputCity = document.querySelector('#city').value.trim();
    const inputMessage = document.querySelector('#message').value.trim();

    if ( !inputName || !inputDate || !inputCity || !inputMessage ) {
        e.preventDefault()
        Swal.fire({
            title: 'Oops!',
            text: 'Mohon isi semua kolom agar kami dapat menjadwalkan kunjungan.',
            icon: 'error',
            showConfirmButton : true,
            confirmButtonText: 'OK'
        })
        return
    }

    e.preventDefault()
    const whatsappText = `Saya tertarik dengan Rumah Sitorus Ciganjur.\nNama: ${inputName}\nKota Asal: ${inputCity}\nTanggal kunjungan: ${inputDate}\nCatatan: ${inputMessage}`
    const whatsappUrl = `https://wa.me/6285889338867?text=${encodeURIComponent(whatsappText)}`
    window.open(whatsappUrl, '_blank')
})

const galleryThumbs = document.querySelectorAll('[data-gallery-thumb]')
const galleryMain = document.getElementById('gallery-main')

galleryThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        galleryThumbs.forEach((item) => item.classList.remove('active'))
        thumb.classList.add('active')
        galleryMain.src = thumb.src
    })
})

