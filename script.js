const Click = () => {
    const menu = document.getElementById('menu');
    const navMob = document.getElementById('nav-mob');

    const myclick=()=>{
        menu.classList.toggle('opened');
        menu.setAttribute('aria-expanded', 
        menu.classList.contains('opened'))
        navMob.classList.toggle('navi-mob'); // Menggunakan toggle tanpa mempertimbangkan status sebelumnya
        navMob.classList.toggle('scale-in-center')
    }
   myclick()

};


