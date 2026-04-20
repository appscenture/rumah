const hamburger = document.getElementById('hamburger')
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', function() {
    this.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

document.addEventListener('click', function(e) {
    if( !hamburger.contains(e.target) && !navMenu.contains(e.target) ) {
        navMenu.classList.add('hidden')
        hamburger.classList.remove('hamburger-active')
    }
})

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

form.addEventListener('submit', function(e) {
    const inputName = document.querySelector('#name').value;
    const inputEmail = document.querySelector('#email').value;
    const textarea = document.querySelector('#massage').value;

    if( !inputName || !inputEmail || !textarea ) {
        Swal.fire({
            title: 'Oops!',
            text: 'kolomnya harap diisi semua',
            icon: 'error',
            showConfirmButton : true,
            confirmButtonText: 'OK'
        })
        
            e.preventDefault()
    }

    else {
        Swal.fire({
            title: 'Yeay',
            text: 'Permintaanmu sedang kami proses!',
            icon: 'success',
            showConfirmButton : true,
            confirmButtonText: 'OK'
        })
    }
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

