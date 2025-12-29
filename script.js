// Данные постов (можно заменить на загрузку с API)
const postsData = [
    {
        id: 1,
        author: "Angel",
        avatar: "https://via.placeholder.com/48",
        date: "2 часа назад",
        content: "Привет! Это мой первый пост в ленте. Здесь можно делиться мыслями, видео и фотографиями.",
        media: {
            type: "image",
            url: "https://via.placeholder.com/600x400"
        }
    },
    {
        id: 2,
        author: "Angel",
        avatar: "https://via.placeholder.com/48",
        date: "5 часов назад",
        content: "Поддержка видео в стиле YouTube Shorts! 🎬",
        media: {
            type: "video",
            url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    {
        id: 3,
        author: "Angel",
        avatar: "https://via.placeholder.com/48",
        date: "1 день назад",
        content: "Минималистичный дизайн в духе Vastlyra. Простота и элегантность."
    }
];

// Данные ссылок
const linksData = [
    {
        id: 1,
        title: "GitHub",
        description: "Мои проекты на GitHub",
        url: "https://github.com",
        icon: "github"
    },
    {
        id: 2,
        title: "LinkedIn",
        description: "Профессиональный профиль",
        url: "https://linkedin.com",
        icon: "linkedin"
    },
    {
        id: 3,
        title: "Twitter",
        description: "Следите за обновлениями",
        url: "https://twitter.com",
        icon: "twitter"
    },
    {
        id: 4,
        title: "Instagram",
        description: "Фото и истории",
        url: "https://instagram.com",
        icon: "instagram"
    },
    {
        id: 5,
        title: "Portfolio",
        description: "Мое портфолио",
        url: "#",
        icon: "portfolio"
    },
    {
        id: 6,
        title: "Email",
        description: "Свяжитесь со мной",
        url: "mailto:example@email.com",
        icon: "email"
    }
];

// Иконки SVG (можно расширить)
const icons = {
    github: `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
    portfolio: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    email: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
};

// Управление страницами
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const indicators = document.querySelectorAll('.indicator-dot');

function switchPage(index) {
    if (index < 0 || index >= pages.length) return;
    
    pages[currentPage].classList.remove('active');
    indicators[currentPage].classList.remove('active');
    
    currentPage = index;
    
    pages[currentPage].classList.add('active');
    indicators[currentPage].classList.add('active');
}

// Свайп навигация
let touchStartX = 0;
let touchEndX = 0;
let isSwiping = false;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isSwiping = true;
});

document.addEventListener('touchend', (e) => {
    if (!isSwiping) return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    isSwiping = false;
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentPage < pages.length - 1) {
            // Свайп влево - следующая страница
            switchPage(currentPage + 1);
        } else if (diff < 0 && currentPage > 0) {
            // Свайп вправо - предыдущая страница
            switchPage(currentPage - 1);
        }
    }
}

// Клик на правую часть экрана для переключения
document.addEventListener('click', (e) => {
    const windowWidth = window.innerWidth;
    const clickX = e.clientX;
    
    // Если клик в правой трети экрана
    if (clickX > windowWidth * 0.67 && currentPage < pages.length - 1) {
        switchPage(currentPage + 1);
    } else if (clickX < windowWidth * 0.33 && currentPage > 0) {
        switchPage(currentPage - 1);
    }
});

// Индикаторы страниц
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        switchPage(index);
    });
});

// Рендеринг постов
function renderPosts() {
    const feed = document.getElementById('posts-feed');
    
    postsData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        let mediaHTML = '';
        if (post.media) {
            if (post.media.type === 'video') {
                mediaHTML = `
                    <div class="video-container">
                        <video class="post-video" controls playsinline>
                            <source src="${post.media.url}" type="video/mp4">
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                `;
            } else if (post.media.type === 'image') {
                mediaHTML = `<img src="${post.media.url}" alt="Post image" class="post-image">`;
            }
        }
        
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.author}" class="post-avatar">
                <div>
                    <div class="post-author">${post.author}</div>
                    <div class="post-date">${post.date}</div>
                </div>
            </div>
            ${post.content ? `<div class="post-content">${post.content}</div>` : ''}
            ${mediaHTML ? `<div class="post-media">${mediaHTML}</div>` : ''}
        `;
        
        feed.appendChild(postElement);
    });
}

// Рендеринг ссылок
function renderLinks() {
    const grid = document.getElementById('links-grid');
    
    linksData.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.className = 'link-card';
        linkElement.href = link.url;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        
        const iconHTML = icons[link.icon] || icons.portfolio;
        
        linkElement.innerHTML = `
            <div class="link-icon">${iconHTML}</div>
            <div class="link-info">
                <div class="link-title">${link.title}</div>
                <div class="link-description">${link.description}</div>
            </div>
        `;
        
        grid.appendChild(linkElement);
    });
}

// Автопрокрутка видео при появлении в viewport (как в YouTube Shorts)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
            video.play().catch(() => {
                // Игнорируем ошибки автоплея (браузерные ограничения)
            });
        } else {
            video.pause();
        }
    });
}, observerOptions);

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    renderLinks();
    
    // Наблюдаем за видео для автоплея
    document.querySelectorAll('.post-video').forEach(video => {
        videoObserver.observe(video);
    });
});

