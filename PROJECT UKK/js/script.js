// ==========================================
// DATA - Destinations Database
// ==========================================
const destinationsData = [
    {
        id: 1,
        name: "Pantai Anyer",
        location: "Kabupaten Serang, Banten",
        lat: -6.1372,
        lng: 106.0049,
        category: "pantai",
        rating: 4.8,
        price: "Rp 15.000",
        hours: "24 Jam",
        description: "Pantai Anyer adalah salah satu pantai paling terkenal di Banten yang menawarkan keindahan pasir putih, air laut yang jernih, dan matahari terbenam yang memukau. Terletak di sepanjang garis pantai Laut Sunda, Anyer menjadi destinasi favorit untuk berlibur bersama keluarga.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800",
        badge: "Best Seller",
        facilities: ["Area Parkir", "Toilet", "Mushola", "Warung Makan", "Penginapan", "WC", "Posko Seguridad"],
        activities: ["Berenang", "Fotografi", "Menikmati Sunset", "BBQ di Pantai", "Volley Pantai"]
    },
    {
        id: 2,
        name: "Kawah Ratu",
        location: "Gunung Gede Pangrango, Banten",
        lat: -6.7000,
        lng: 106.9600,
        category: "gunung",
        rating: 4.7,
        price: "Rp 25.000",
        hours: "06.00 - 17.00",
        description: "Kawah Ratu adalah kawah indah yang terletak di ketinggian Gunung Gede Pangrango. Pemandangannya spektakuler dengan gradasi warna air di dalam kawah yang berubah-ubah seiring waktu.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        badge: null,
        facilities: ["Area Parkir", "Toilet", "Mushola", "Guide Lokal", "Posko Pemandu"],
        activities: ["Hiking", "Fotografi", "Berkemah", "Observasi Alam"]
    },
    {
        id: 3,
        name: "Pantai Carita",
        location: "Kabupaten Pandeglang, Banten",
        lat: -6.3792,
        lng: 105.9525,
        category: "pantai",
        rating: 4.6,
        price: "Rp 10.000",
        hours: "24 Jam",
        description: "Pantai Carita menawarkan garis pantai yang panjang dengan pemandangan Gunung Krakatau yang ikonik. Tempat ini sempurna untuk bersantai dan menikmati keindahan laut.",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
        badge: "Trending",
        facilities: ["Area Parkir", "Toilet", "Mushola", "Warung Makan", "Penginapan", "Speedboat"],
        activities: ["Berenang", "Snorkeling", "Berkunjung ke Krakatau", "Fotografi", "Berenang"]
    },
    {
        id: 4,
        name: "Pulau Umang",
        location: "Kabupaten Serang, Banten",
        lat: -6.1167,
        lng: 105.9333,
        category: "pantai",
        rating: 4.5,
        price: "Rp 50.000",
        hours: "08.00 - 20.00",
        description: "Pulau Umang adalah pulau kecil eksotis di perairan Serang yang memiliki resort mewah dengan fasilitas lengkap. Pulau ini menawarkan ketenangan dan pemandangan laut yang menakjubkan.",
        image: "https://images.unsplash.com/photo-1569323113927-7a4b248e6743?w=800",
        badge: null,
        facilities: ["Resort Mewah", "Restoran", "Kolam Renang", "Spa", "Bar", "Pantai Privat"],
        activities: ["Berenang", "SPA", "Fotografi", "Menikmati Makanan Laut", "Relaxing"]
    },
    {
        id: 5,
        name: "Pantai Sangiang",
        location: "Kabupaten Serang, Banten",
        lat: -6.3000,
        lng: 106.0000,
        category: "pantai",
        rating: 4.9,
        price: "Rp 20.000",
        hours: "06.00 - 18.00",
        description: "Pantai Sangiang adalah pantai tersembunyi yang menawarkan keindahan alam yang masih asri dengan air jernih berwarna tosca dan pasir putih yang lembut.",
        image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800",
        badge: "Adventure",
        facilities: ["Area Parkir", "Toilet", "Warung Makan", "Perahu"],
        activities: ["Snorkeling", "Berenang", "Berpetualang", "Fotografi", "Menikmati Alam"]
    },
    {
        id: 6,
        name: "Taman Nasional Ujung Kulon",
        location: "Kabupaten Pandeglang, Banten",
        lat: -6.7488,
        lng: 105.4231,
        category: "alam",
        rating: 4.8,
        price: "Rp 35.000",
        hours: "06.00 - 17.00",
        description: "Taman Nasional Ujung Kulon adalah rumah bagi badak Jawa, salah satu badak paling langka di dunia. Taman ini menawarkan keindahan alam liar yang memukau.",
        image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800",
        badge: null,
        facilities: ["Area Parkir", "Toilet", "Pemandu", "Perahu", "Warung Makan"],
        activities: ["Safari", "Birdwatching", "Fotografi Satwa", "Berkemah", "Treking"]
    },
    {
        id: 7,
        name: "Masjid Al-Mansur",
        location: "Kota Serang, Banten",
        lat: -6.1216,
        lng: 106.1536,
        category: "sejarah",
        rating: 4.7,
        price: "Gratis",
        hours: "24 Jam",
        description: "Masjid Al-Mansur adalah Masjid Agung bersejarah di Banten yang dibangun pada masa Sultan Maulana Hasanuddin. Masjid ini memiliki arsitektur yang indah dan bernilai sejarah tinggi.",
        image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800",
        badge: "History",
        facilities: ["Area Parkir", "Toilet", "Akomodasi Peziarah"],
        activities: ["Ziarah", "Fotografi Arsitektur", "Mengenal Sejarah", "Sholat"]
    },
    {
        id: 8,
        name: "Pantai Sawarna",
        location: "Kabupaten Lebak, Banten",
        lat: -6.5050,
        lng: 106.0725,
        category: "pantai",
        rating: 4.6,
        price: "Rp 15.000",
        hours: "24 Jam",
        description: "Pantai Sawarna terkenal dengan ombak yang cocok untuk surfing dan keindahan alam yang masih alami. Pantai ini menawarkan pengalaman berselancar yang seru.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        badge: "Surfing",
        facilities: ["Area Parkir", "Toilet", "Warung Makan", "Penyewaan Surf"],
        activities: ["Surfing", "Berenang", "Fotografi", "Menikmati Sunset"]
    }
];

// ==========================================
// Blog data (external sources)
// ==========================================
const blogsData = [
    {
        title: "5 Tips Berkunjung ke Pantai Anyer",
        date: "15 Jan 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        snippet: "Persiapkan perjalananmu ke Anyer dengan tips-tips berguna berikut...",
        url: "https://www.suara.com/news/2025/06/27/100122/5-tips-liburan-ke-pantai-anyer-anti-terjebak-macet-saat-libur-sekolah"
    },
    {
        title: "Keindahan Sunset di Pantai Carita",
        date: "12 Jan 2026",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
        snippet: "Mari kita explore keindahan sunset yang memukau di Pantai Carita...",
        url: "https://www.tripadvisor.co.id/LocationPhotoDirectLink-g3400871-d1187536-i255571961-Carita_Beach-Anyer_Banten_Province_Java.html"
    },
    {
        title: "Petualangan di Taman Nasional Ujung Kulon",
        date: "10 Jan 2026",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
        snippet: "Temukan pengalaman tak terlupakan di habitat badak Jawa...",
        url: "https://telusuri.id/petualangan-di-taman-nasional-ujung-kulon/"
    }
];

// helper to render blog cards
function renderBlogs() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = blogsData.map(blog => `
        <article class="blog-card">
            <div class="blog-image">
                <img src="${blog.image}" alt="${blog.title}">
                <span class="blog-date">${blog.date}</span>
            </div>
            <div class="blog-content">
                <h3>${blog.title}</h3>
                <p>${blog.snippet}</p>
                <a href="${blog.url}" class="read-more" target="_blank" rel="noopener noreferrer">
                    Baca Selengkapnya <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </article>
    `).join('');
}

// ==========================================
// DOM Elements
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // global visitor logging
    (function logVisit() {
        const today = new Date().toISOString().split('T')[0];
        const log = JSON.parse(localStorage.getItem('visitLog') || '{}');
        log[today] = (log[today] || 0) + 1;
        localStorage.setItem('visitLog', JSON.stringify(log));
    })();

    // Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (!navbar) return;
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
        });
    });

    // ==========================================
    // Login Page Functionality
    // ==========================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            
            // Basic validation
            if (username.length < 3) {
                showError('usernameError', 'Username minimal 3 karakter');
                return;
            }
            if (password.length < 6) {
                showError('passwordError', 'Password minimal 6 karakter');
                return;
            }
            
            // admin credentials (hard‑coded for demo)
            const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };

            if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
                // admin login
                alert('Selamat datang, Admin!');
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('isAdmin', 'true');
                localStorage.setItem('username', username);
                window.location.href = 'admin.html';
                return;
            }

            // check against saved users
            const user = loginUser(username, password);
            const attemptLog = JSON.parse(localStorage.getItem('loginLog') || '[]');
            if (!user) {
                showError('passwordError', 'Username atau password salah');
                attemptLog.push({ user: username, time: new Date().toISOString(), success: false });
                localStorage.setItem('loginLog', JSON.stringify(attemptLog));
                return;
            }
            
            // login success
            attemptLog.push({ user: username, time: new Date().toISOString(), success: true });
            localStorage.setItem('loginLog', JSON.stringify(attemptLog));
            alert(`Selamat datang, ${username}! 🎉\nLogin berhasil!`);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            window.location.href = 'index.html';
        });
    }

    // registration page handling
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('regUsername').value.trim();
            const password = document.getElementById('regPassword').value;
            const confirm = document.getElementById('regPasswordConfirm').value;

            if (username.length < 3) {
                showError('regUsernameError', 'Username minimal 3 karakter');
                return;
            }
            if (password.length < 6) {
                showError('regPasswordError', 'Password minimal 6 karakter');
                return;
            }
            if (password !== confirm) {
                showError('regPasswordConfirmError', 'Password tidak cocok');
                return;
            }

            const result = registerUser(username, password);
            if (!result.success) {
                showError('regUsernameError', result.message);
                return;
            }
            // registration successful, ask user to login
            alert('Pendaftaran berhasil! Silakan login.');
            window.location.href = 'login.html';
        });
    }

    // Toggle Password Visibility for any field with adjacent .toggle-password icon
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling || this.nextElementSibling;
            if (!input) return;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    });

    // ==========================================
    // Destinations Page Functionality
    // ==========================================
    const destinationGrid = document.getElementById('destinationGrid');
    if (destinationGrid) {
        renderDestinations(destinationsData);
        
        // Filter functionality
        const categoryFilter = document.getElementById('categoryFilter');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        if (categoryFilter) categoryFilter.addEventListener('change', filterDestinations);
        if (searchBtn) searchBtn.addEventListener('click', filterDestinations);
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    filterDestinations();
                }
            });
        }
    }

    // render blogs if section is present
    if (document.getElementById('blogGrid')) {
        renderBlogs();
    }

    // ==========================================
    // Detail Page Functionality
    // =========================================
    // We rely on one of the detail page elements existing (hero or mainImage) to trigger
    // loading the detail data. The helper function itself guards against missing nodes.
    if (document.getElementById('detailHero') || document.getElementById('mainImage')) {
        loadDestinationDetail();
    }

    // ==========================================
    // Contact Form Functionality
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // build mailto link using dedicated address
            const to = 'infobantentourism@gmail.com';
            const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
            const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // open user's mail client
            window.location.href = mailto;

            // optionally show confirmation
            alert(`Terima kasih, ${name}! 📧\nKlien email Anda akan terbuka untuk mengirim pesan.`);

            // Reset form
            contactForm.reset();
            contactForm.dataset._contactHandled = 'true';
        });
    }

    // ==========================================
    // ==========================================
    // Newsletter Form (handled later globally)
    // ==========================================

    // ==========================================
    // Gallery Lightbox
    // ==========================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            openLightbox(imgSrc);
        });
    });

    // ==========================================
    // Smooth Scroll for Navigation Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ==========================================
    // Scroll Animation
    // ==========================================
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.destination-card, .blog-card, .gallery-item');
        
        elements.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            
            if (isVisible) {
                el.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// ==========================================
// Helper Functions
// ==========================================

// Show error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = '#e74c3c';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        
        setTimeout(() => {
            errorElement.textContent = '';
        }, 3000);
    }
}

// ---------- user helpers ----------
function getUsers() {
    try {
        const raw = localStorage.getItem('users');
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function registerUser(username, password) {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
        return { success: false, message: 'Username sudah digunakan' };
    }
    users.push({ username, password });
    saveUsers(users);
    return { success: true };
}

function loginUser(username, password) {
    const users = getUsers();
    return users.find(u => u.username === username && u.password === password);
}

// Render destinations cards
function renderDestinations(data) {
    const grid = document.getElementById('destinationGrid');
    if (!grid) return;
    
    grid.innerHTML = data.map(dest => `
        <div class="destination-card" data-category="${dest.category}">
            <div class="card-image">
                <img src="${dest.image}" alt="${dest.name}">
                ${dest.badge ? `<div class="card-badge">${dest.badge}</div>` : ''}
            </div>
            <div class="card-content">
                <h3>${dest.name}</h3>
                <p><i class="fas fa-map-marker"></i> ${dest.location}</p>
                <p class="description">${dest.description.substring(0, 100)}...</p>
                <div class="card-footer">
                    <span class="rating">
                        <i class="fas fa-star"></i> ${dest.rating}
                    </span>
                    <a href="detail.html?id=${dest.id}" class="btn-detail">
                        Lihat Detail <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter destinations
function filterDestinations() {
    const category = document.getElementById('categoryFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = destinationsData.filter(dest => {
        const matchesCategory = category === 'all' || dest.category === category;
        const matchesSearch = dest.name.toLowerCase().includes(searchTerm) || 
                            dest.location.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    renderDestinations(filtered);
    
    if (filtered.length === 0) {
        document.getElementById('destinationGrid').innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3>Destinasi Tidak Ditemukan</h3>
                <p style="color: #999;">Coba kata kunci atau filter yang berbeda</p>
            </div>
        `;
    }
}

// Load destination detail
function loadDestinationDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    
    const destination = destinationsData.find(d => d.id === id) || destinationsData[0];
    
    // Update hero
    const detailHeroEl = document.getElementById('detailHero');
    if (detailHeroEl) detailHeroEl.style.backgroundImage = `url('${destination.image}')`;

    const destinationTitleEl = document.getElementById('destinationTitle');
    if (destinationTitleEl) destinationTitleEl.textContent = destination.name;

    const destinationLocationEl = document.getElementById('destinationLocation');
    if (destinationLocationEl) destinationLocationEl.innerHTML = `<i class="fas fa-map-marker"></i> ${destination.location}`;

    // Update main content
    const mainImageEl = document.getElementById('mainImage');
    if (mainImageEl) mainImageEl.src = destination.image;

    const destinationDescEl = document.getElementById('destinationDesc');
    if (destinationDescEl) destinationDescEl.textContent = destination.description;

    // Update info
    const detailRatingEl = document.getElementById('detailRating');
    if (detailRatingEl) detailRatingEl.textContent = destination.rating;

    const detailHoursEl = document.getElementById('detailHours');
    if (detailHoursEl) detailHoursEl.textContent = destination.hours;

    const detailPriceEl = document.getElementById('detailPrice');
    if (detailPriceEl) detailPriceEl.textContent = destination.price;

    // Update facilities
    const facilitiesList = document.getElementById('facilitiesList');
    if (facilitiesList) {
        facilitiesList.innerHTML = destination.facilities.map(fac => `
            <li><i class="fas fa-check"></i> ${fac}</li>
        `).join('');
    }

    // Update activities
    const activitiesList = document.getElementById('activitiesList');
    if (activitiesList) {
        activitiesList.innerHTML = destination.activities.map(act => `
            <li><i class="fas fa-check"></i> ${act}</li>
        `).join('');
    }
    
    // Update map with coordinates if available
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        if (destination.lat != null && destination.lng != null) {
            mapContainer.innerHTML = `
                <iframe
                    src="https://maps.google.com/maps?q=${destination.lat},${destination.lng}&z=14&output=embed"
                    width="100%" height="250" style="border:0;"
                    allowfullscreen="" loading="lazy">
                </iframe>
            `;
        } else {
            mapContainer.innerHTML = `
                <div class="map-placeholder">
                    <i class="fas fa-map-marked-alt"></i>
                    <p>Peta Tidak Tersedia</p>
                </div>
            `;
        }
    }

// Load related destinations
    const relatedGrid = document.getElementById('relatedGrid');
    if (relatedGrid) {
        const related = destinationsData
            .filter(d => d.id !== destination.id)
            .slice(0, 3);
        
        relatedGrid.innerHTML = related.map(dest => `
            <div class="destination-card">
                <div class="card-image">
                    <img src="${dest.image}" alt="${dest.name}">
                </div>
                <div class="card-content">
                    <h3>${dest.name}</h3>
                    <p><i class="fas fa-map-marker"></i> ${dest.location}</p>
                    <p class="description">${dest.description.substring(0, 80)}...</p>
                    <div class="card-footer">
                        <span class="rating">
                            <i class="fas fa-star"></i> ${dest.rating}
                        </span>
                        <a href="detail.html?id=${dest.id}" class="btn-detail">
                            Lihat Detail <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ==========================================
// Lightbox Functions
// ==========================================
function openLightbox(imageSrc) {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    lightbox.innerHTML = `
        <img src="${imageSrc}" style="max-width: 90%; max-height: 90%; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
        <button style="
            position: absolute;
            top: 20px;
            right: 30px;
            background: none;
            border: none;
            color: white;
            font-size: 2.5rem;
            cursor: pointer;
            transition: transform 0.3s ease;
        " onclick="closeLightbox()">&times;</button>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Close on click outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key (register handler so it can be removed)
    window._lightboxKeyHandler = function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    };
    document.addEventListener('keydown', window._lightboxKeyHandler);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = 'auto';
            // remove key handler if set
            if (window._lightboxKeyHandler) {
                document.removeEventListener('keydown', window._lightboxKeyHandler);
                try { delete window._lightboxKeyHandler; } catch (e) { window._lightboxKeyHandler = null; }
            }
        }, 300);
    }
}

// ==========================================
// Typing Effect for Hero Section
// ==========================================
function typeWriter(element, text, speed = 100) {
    if (!element) return;
    
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
const heroSubtitle = document.querySelector('.hero-content p');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    // Start typing after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 50);
        }, 1000);
    });
}

// ==========================================
// Scroll Progress Indicator
// ==========================================
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        width: 0%;
        background: linear-gradient(90deg, #00a8cc, #ff6b35);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = isFinite(scrollTop) && scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// ==========================================
// Booking Button Functionality
// ==========================================
const bookButtons = document.querySelectorAll('.btn-book');
if (bookButtons && bookButtons.length) {
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
        const destinationTitleEl = document.getElementById('destinationTitle');
        const priceEl = document.getElementById('detailPrice');
        const destinationTitle = destinationTitleEl ? destinationTitleEl.textContent : 'Destinasi';
        const price = priceEl ? priceEl.textContent : '';
        
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'booking-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                padding: 40px;
                border-radius: 15px;
                text-align: center;
                max-width: 400px;
                animation: fadeInUp 0.4s ease;
            ">
                <i class="fas fa-check-circle" style="
                    font-size: 4rem;
                    color: #00a8cc;
                    margin-bottom: 20px;
                "></i>
                <h2 style="color: #1a1a2e; margin-bottom: 15px;">Booking Berhasil!</h2>
                <p style="color: #6c757d; margin-bottom: 10px;">${destinationTitle}</p>
                <p style="font-size: 1.5rem; font-weight: bold; color: #ff6b35;">${price}</p>
                <p style="color: #999; font-size: 0.9rem; margin-top: 20px;">Tim kami akan menghubungi Anda segera.</p>
                <button onclick="this.closest('.booking-modal').remove()" style="
                    margin-top: 25px;
                    padding: 12px 40px;
                    background: #00a8cc;
                    color: white;
                    border: none;
                    border-radius: 25px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                ">Tutup</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = 'auto';
            }
        });
        });
    });
}

// ==========================================
// Preloader
// ==========================================
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #00a8cc, #008bad);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    `;
    
    preloader.innerHTML = `
        <div class="spinner" style="
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        "></div>
        <h2 style="color: white; font-size: 1.5rem;">Banten Tourism</h2>
        <p style="color: rgba(255,255,255,0.8);">Memuat...</p>
    `;
    
    document.body.appendChild(preloader);
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 1500);
    });
}

// Initialize preloader
createPreloader();

// ==========================================
// Scroll Reveal Animation
// ==========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.destination-card, .blog-card, .info-item, .gallery-item');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.classList.add('revealed');
            }
        });
    };
    
    // Add CSS for reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .destination-card, .blog-card, .info-item, .gallery-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .destination-card.revealed, .blog-card.revealed, .info-item.revealed, .gallery-item.revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

initScrollReveal();

// ==========================================
// Lazy Loading for Images
// ==========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// Newsletter Form Handler (global, safe attach)
// ==========================================
const newsletterFormsGlobal = document.querySelectorAll('.newsletter-form');
if (newsletterFormsGlobal && newsletterFormsGlobal.length) {
    newsletterFormsGlobal.forEach(form => {
        if (form.dataset._newsletterHandled) return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';

            if (email && validateEmail(email)) {
                alert(`🎉 Berhasil!\n\nEmail ${email} telah berlangganan newsletter Banten Tourism.\nAnda akan mendapatkan informasi terbaru tentang destinasi Banten.`);
                if (emailInput) emailInput.value = '';
            } else {
                alert('❌ Email tidak valid!\nMasukkan email yang benar.');
            }
        });
        form.dataset._newsletterHandled = 'true';
    });
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ==========================================
// Contact Form Handler
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm && !contactForm.dataset._contactHandled) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('❌ Form tidak lengkap!\nMohon isi semua data.');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('❌ Email tidak valid!\nMasukkan email yang benar.');
            return;
        }
        
        // Success
        alert(`✅ Pesan Terkirim!\n\nNama: ${name}\nSubjek: ${subject}\n\nTerima kasih telah menghubungi kami.\nTim Banten Tourism akan merespons dalam 24 jam.`);
        
        // Reset form
        contactForm.reset();
        contactForm.dataset._contactHandled = 'true';
    });
}

// ==========================================
// Share Functionality
// ==========================================
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const platform = this.classList[1];
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        const destTitleEl = document.getElementById('destinationTitle');
        const destinationTitle = destTitleEl ? destTitleEl.textContent : document.title;
        
        let shareUrl;
        
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${title} ${url}`;
                break;
            case 'instagram':
                alert('📸 Untuk berbagi ke Instagram, silakan simpan gambar dan upload manual!');
                return;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    });
});

// ==========================================
// Counter Animation for Stats
// ==========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const hasPlus = target.includes('+');
        const hasM = target.includes('M');
        const isDecimal = target.includes('.');
        
        let finalValue;
        if (hasM) {
            finalValue = parseFloat(target.replace('M', '')) * 1000000;
        } else {
            finalValue = parseFloat(target.replace(/[^0-9.]/g, ''));
        }
        
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            let currentValue = finalValue * easeOut;
            
            if (hasM) {
                counter.textContent = (currentValue / 1000000).toFixed(1) + 'M';
            } else if (isDecimal) {
                counter.textContent = currentValue.toFixed(1);
            } else {
                counter.textContent = Math.floor(currentValue);
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animation
animateCounters();

// ==========================================
// Back to Top Button
// ==========================================
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00a8cc, #008bad);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(0, 168, 204, 0.4);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button based on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

createBackToTopButton();

// ==========================================
// Toast Notification System
// ==========================================
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    const colors = {
        success: '#2ecc71',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 15px;
        z-index: 2000;
        animation: slideInRight 0.4s ease;
        max-width: 350px;
    `;
    
    toast.innerHTML = `
        <i class="fas ${icons[type]}" style="color: ${colors[type]}; font-size: 1.5rem;"></i>
        <span style="color: #333; font-weight: 500;">${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.4s ease forwards';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 4000);
}

// Add toast animations
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(toastStyle);

// ==========================================
// Search Functionality
// ==========================================
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', debounce(function() {
        filterDestinations();
    }, 300));
}

// Debounce helper function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// URL Parameter Handler for Detail Page
// ==========================================
function handleURLParams() {
    const params = new URLSearchParams(window.location.search);
    
    // Handle destination parameter
    const destParam = params.get('destination');
    if (destParam) {
        const destination = destinationsData.find(d => 
            d.name.toLowerCase().replace(/\s+/g, '-') === destParam
        );
        if (destination) {
            window.location.href = `detail.html?id=${destination.id}`;
        }
    }
    
    // Handle login redirect
    const redirect = params.get('redirect');
    if (redirect && localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = redirect;
    }
}

// Initialize URL parameter handling
handleURLParams();

// ==========================================
// Session Management
// ==========================================
function checkSession() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const username = localStorage.getItem('username');
    
    // redirect if on admin page but not admin
    if (window.location.pathname.endsWith('admin.html') && !isAdmin) {
        window.location.href = 'admin-login.html';
        return;
    }

    if (isLoggedIn === 'true' && username) {
        // Update UI for logged in user
        const loginButtons = document.querySelectorAll('.btn-login-nav, .btn-login');
        loginButtons.forEach(btn => {
            if (btn.href && btn.href.includes('login.html')) {
                btn.innerHTML = `<i class="fas fa-user"></i> ${username}`;
                btn.href = '#';
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    showToast(`Halo, ${username}! 👋`, 'success');
                });
            }
        });
    }
}

// Check session on page load
checkSession();

// ==========================================
// Logout Functionality
// ==========================================
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('username');
    showToast('Anda telah logout 👋', 'info');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

// ==========================================
// Page Transition Effects
// ==========================================
function initPageTransitions() {
    const links = document.querySelectorAll('a:not([href^="#"]):not([href^="mailto"]):not([href^="tel"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if external link or same page
            if (href.startsWith('http') || href.startsWith('#') || !href) {
                return;
            }
            
            e.preventDefault();
            
            // Create transition overlay
            const overlay = document.createElement('div');
            overlay.className = 'page-transition';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #00a8cc, #008bad);
                z-index: 9999;
                animation: pageTransitionIn 0.5s ease forwards;
            `;
            
            document.body.appendChild(overlay);
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
    
    // Add transition animations
    const transitionStyle = document.createElement('style');
    transitionStyle.textContent = `
        @keyframes pageTransitionIn {
            from {
                transform: scaleY(0);
                transform-origin: top;
            }
            to {
                transform: scaleY(1);
                transform-origin: top;
            }
        }
    `;
    document.head.appendChild(transitionStyle);
}

initPageTransitions();

// ==========================================
// Form Validation Helpers
// ==========================================
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#eee';
        }
    });
    
    return isValid;
}

// ==========================================
// Local Storage Helpers
// ==========================================
const Storage = {
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove(key) {
        localStorage.removeItem(key);
    }
};

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%c🏝️ Banten Tourism', 'font-size: 30px; font-weight: bold; color: #00a8cc;');
console.log('%cDibuat dengan ❤️ untuk tugas UKK', 'font-size: 14px; color: #666;');
console.log('%cFitur: Login System, Destinations, Detail Page, Gallery, Contact Form', 'font-size: 12px; color: #999;');

// ==========================================
// Error Handling
// ==========================================
window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.message);
    
    // Don't show error for missing images
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
    }
});

// ==========================================
// Performance Monitoring
// ==========================================
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
    
    console.log(`%c⏱️ Performance: DOM Ready: ${domReadyTime}ms | Page Load: ${pageLoadTime}ms`, 
                'color: #2ecc71; font-size: 12px;');
});

// ==========================================
// Accessibility Features
// ==========================================

// Keyboard navigation for cards
document.querySelectorAll('.destination-card, .blog-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const link = this.querySelector('a');
            if (link) {
                link.click();
            }
        }
    });
});

// Skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#main';
skipLink.className = 'skip-link';
skipLink.textContent = 'Lewati ke konten utama';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #00a8cc;
    color: white;
    padding: 8px 15px;
    z-index: 9999;
    transition: top 0.3s;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Add skip link styles
const skipStyle = document.createElement('style');
skipStyle.textContent = `
    .skip-link:focus {
        top: 0 !important;
    }
`;
document.head.appendChild(skipStyle);

// ==========================================
// Dark Mode Support (Optional)
// ==========================================
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'darkModeToggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: #1a1a2e;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        // Save preference
        Storage.set('darkMode', isDark);
    });
    
    // Check saved preference
    if (Storage.get('darkMode')) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Uncomment to enable dark mode
// initDarkMode();

// ==========================================
// Service Worker Registration (PWA Support)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable PWA features
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed:', err));
    });
}

// ==========================================
// END OF JAVASCRIPT
// ==========================================
console.log('%c✅ All JavaScript loaded successfully!', 'color: #2ecc71; font-size: 14px; font-weight: bold;');