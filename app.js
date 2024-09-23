const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const legalInformation = document.querySelector('.demo-dropdown');
const dropdownMenu = legalInformation.querySelector('ul');

// Hamburger menüsü açılıp kapanma işlemi
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Sayfa kaydırıldığında başlık arka plan rengi
document.addEventListener('scroll', () => {
    header.style.backgroundColor = window.scrollY > 250 ? '#29323c' : 'transparent';
});

// Menü elemanlarına tıklanma olayı
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// Dropdown menüsü için açılma ve kapanma fonksiyonu
function toggleDropdown(shouldOpen) {
    if (shouldOpen) {
        legalInformation.classList.add('active');
        dropdownMenu.style.display = 'block'; // Aç
    } else {
        legalInformation.classList.remove('active');
        dropdownMenu.style.display = 'none'; // Kapat
    }
}

// Başlangıçta menüyü gizle
dropdownMenu.style.display = 'none';

// Fare ile üzerine gelince açılmasını sağla
legalInformation.addEventListener('mouseenter', () => {
    toggleDropdown(true);
});

legalInformation.addEventListener('mouseleave', () => {
    toggleDropdown(false);
});

// Menü öğelerine tıklanma olayı
dropdownMenu.querySelectorAll('li a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation(); // Tıklama olayını durdur
        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('.hamburger').addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown-content');
    const isOpen = dropdown.style.display === 'block';

    // Menü durumunu kontrol et
    dropdown.style.display = isOpen ? 'none' : 'block';

    // Menü kapandığında sayfa yenileme işlemini
    if (isOpen) {
        setTimeout(() => {
            // Sayfayı yenilemeden önce mevcut hash'i kaydet
            const currentHash = window.location.hash;
            window.location.reload(); // Sayfayı yenile
            // Sayfa yüklendikten sonra aynı hash'e git //todo
            window.location.hash = currentHash;
        }, 450);
    } else {
        dropdown.style.position = 'absolute';
        dropdown.style.left = '0';
        dropdown.style.top = '100%';
        dropdown.style.width = 'auto';
        dropdown.style.maxWidth = '300px';
    }
});

// Pencereden boyut değişikliğinde dropdown'u kapat
window.addEventListener('resize', function () {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = 'none'; // Ekran boyutu değiştiğinde dropdown'u kapat
});

// Dropdown icindeki ogelere tiklandiginda menuyu kapat
const dropdownItems = document.querySelectorAll('.dropdown-content a');
dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.style.display = 'none'; // Tıkladığında kapat
        // Sayfayi yenile
        setTimeout(() => {
            // Mevcut hash'i kaydet ve sayfayi yenile
            const currentHash = window.location.hash;
            window.location.reload(); // Sayfayı yenile
            // Sayfa yüklendikten sonra aynı hash'e git
            window.location.hash = currentHash;
        }, 300); //delay
    });
});







