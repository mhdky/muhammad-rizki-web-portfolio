const navDesktop = document.querySelector('.nav-desktop');
const profil = document.querySelector('.profil');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navDesktop.classList.add('opacity-60');
        navDesktop.classList.add('opacity-60');
        profil.classList.add('opacity-60');
        profil.classList.add('opacity-60');
        
    } else {
        navDesktop.classList.remove('opacity-60');
        navDesktop.classList.remove('opacity-60');
        profil.classList.remove('opacity-60');
        profil.classList.remove('opacity-60');
    }
});
navDesktop.addEventListener('mouseenter', () => {
    navDesktop.classList.add('shadow-xl');
    navDesktop.classList.add('shadow-black');
    profil.classList.add('shadow-xl');
    profil.classList.add('shadow-black');
    navDesktop.classList.add('opacity-100');
    profil.classList.add('opacity-100');
});
navDesktop.addEventListener('mouseleave', () => {
    navDesktop.classList.remove('shadow-xl');
    navDesktop.classList.remove('shadow-black');
    profil.classList.remove('shadow-xl');
    profil.classList.remove('shadow-black');
    navDesktop.classList.remove('opacity-100');
    profil.classList.remove('opacity-100');
});
profil.addEventListener('mouseenter', () => {
    navDesktop.classList.add('shadow-xl');
    navDesktop.classList.add('shadow-black');
    profil.classList.add('shadow-xl');
    profil.classList.add('shadow-black');
    navDesktop.classList.add('opacity-100');
    profil.classList.add('opacity-100');
});
profil.addEventListener('mouseleave', () => {
    navDesktop.classList.remove('shadow-xl');
    navDesktop.classList.remove('shadow-black');
    profil.classList.remove('shadow-xl');
    profil.classList.remove('shadow-black');
    navDesktop.classList.remove('opacity-100');
    profil.classList.remove('opacity-100');
});

const cardPortfolio = document.querySelectorAll('.card-portfolio');
const detailPortfolio = document.querySelectorAll('.detail-portfolio');
const body = document.querySelector('body');
const closeDetailPortfolio = document.querySelectorAll('.close-detail-portfolio');

for(let cP = 0; cP < cardPortfolio.length || cP < detailPortfolio.length || cP < closeDetailPortfolio; cP++) {
    cardPortfolio[cP].addEventListener('click', () => {
        detailPortfolio[cP].classList.add('flex-detail-portfolio');
        body.classList.add('overflow-hidden');
    });
    closeDetailPortfolio[cP].addEventListener('click', () => {
        detailPortfolio[cP].classList.remove('flex-detail-portfolio');
        body.classList.remove('overflow-hidden');
    });
}

const noLink = document.querySelectorAll('.no-link');
const masihPengembangan = document.querySelector('.masih-pengembangan');
const navMobile = document.querySelector('.nav-mobile');
const masihPengembanganDua = document.querySelector('.masih-pengembangan-dua');
for(let nL = 0; nL < noLink.length; nL++) {
    noLink[nL].addEventListener('click', () => {
        masihPengembangan.style.display = 'flex';
        masihPengembanganDua.style.transform = 'translateY(10%)';
        masihPengembanganDua.style.transition = '0.5s';
        body.classList.add('overflow-hidden');
        navMobile.classList.add('nav-mobile-hide');
    });
}
masihPengembangan.addEventListener('click', () => {
    masihPengembanganDua.style.transform = 'translateY(1000%)';
    masihPengembanganDua.style.transition = '0.5s';
    body.classList.remove('overflow-hidden');
    setTimeout(() => {
        masihPengembangan.style.display = 'none'
        navMobile.classList.remove('nav-mobile-hide');
    }, "100");
});

const noLinkDetail = document.querySelectorAll('.no-link-detail');
const masihPengembanganDetail = document.querySelector('.masih-pengembangan-detail');
const masihPengembanganDuaDetail = document.querySelector('.masih-pengembangan-dua-detail');
for(let nLD = 0; nLD < noLinkDetail.length; nLD++) {
    noLinkDetail[nLD].addEventListener('click', () => {
        masihPengembanganDetail.style.display = 'flex';
        masihPengembanganDuaDetail.style.transform = 'translateY(10%)';
        masihPengembanganDuaDetail.style.transition = '0.5s';
    });
}
masihPengembanganDetail.addEventListener('click', () => {
    masihPengembanganDuaDetail.style.transform = 'translateY(1000%)';
    masihPengembanganDuaDetail.style.transition = '0.5s';
    setTimeout(() => {
        masihPengembanganDetail.style.display = 'none';
    }, "100");
});

const d = new Date();
let year = d.getFullYear();
document.getElementById('copyright').innerHTML = year;