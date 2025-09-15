// SocialBook - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initLikeButtons();
    initCommentButtons();
    initShareButtons();
    initSearchFunctionality();
    initMobileMenu();
    initPostCreation();
    initScrollEffects();
});

// Like Button Functionality
function initLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const post = this.closest('.post');
            const likesSpan = post.querySelector('.likes');
            const icon = this.querySelector('i');
            const text = this.querySelector('span');
            
            // Toggle like state
            if (this.classList.contains('liked')) {
                // Unlike
                this.classList.remove('liked');
                icon.className = 'far fa-thumbs-up';
                text.textContent = 'Like';
                
                // Update likes count
                const currentLikes = parseInt(likesSpan.textContent.match(/\d+/)[0]);
                likesSpan.textContent = `👍 ${currentLikes - 1}`;
            } else {
                // Like
                this.classList.add('liked');
                icon.className = 'fas fa-thumbs-up';
                text.textContent = 'Liked';
                
                // Update likes count
                const currentLikes = parseInt(likesSpan.textContent.match(/\d+/)[0]);
                likesSpan.textContent = `👍 ${currentLikes + 1}`;
            }
        });
    });
}

// Comment Button Functionality
function initCommentButtons() {
    const commentButtons = document.querySelectorAll('.comment-btn');
    
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const post = this.closest('.post');
            const commentsSpan = post.querySelector('.comments');
            
            // Simple comment count increment
            const currentComments = parseInt(commentsSpan.textContent.match(/\d+/)[0]);
            commentsSpan.textContent = `💬 ${currentComments + 1} comments`;
            
            // Show a simple alert for demo purposes
            alert('Comment feature would open here!');
        });
    });
}

// Share Button Functionality
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const post = this.closest('.post');
            const sharesSpan = post.querySelector('.shares');
            
            // Simple share count increment
            const currentShares = parseInt(sharesSpan.textContent.match(/\d+/)[0]);
            sharesSpan.textContent = `🔄 ${currentShares + 1} shares`;
            
            // Show a simple alert for demo purposes
            alert('Share feature would open here!');
        });
    });
}

// Search Functionality
function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    alert(`Searching for: "${searchTerm}"`);
                    // In a real app, this would trigger a search API call
                }
            }
        });
        
        // Add focus/blur effects
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 0 2px #1877f2';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = 'none';
        });
    }
}

// Mobile Menu Toggle
function initMobileMenu() {
    // Create mobile menu button
    const header = document.querySelector('.header-container');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 20px;
        color: #1c1e21;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
    `;
    
    // Insert mobile menu button
    header.insertBefore(mobileMenuBtn, header.firstChild);
    
    // Toggle sidebar on mobile
    mobileMenuBtn.addEventListener('click', function() {
        const leftSidebar = document.querySelector('.left-sidebar');
        leftSidebar.classList.toggle('mobile-open');
    });
    
    // Show/hide mobile menu button based on screen size
    function toggleMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
        } else {
            mobileMenuBtn.style.display = 'none';
            document.querySelector('.left-sidebar').classList.remove('mobile-open');
        }
    }
    
    window.addEventListener('resize', toggleMobileMenu);
    toggleMobileMenu();
}

// Post Creation Functionality
function initPostCreation() {
    const postInput = document.querySelector('.post-input');
    const postOptions = document.querySelectorAll('.post-option');
    
    if (postInput) {
        postInput.addEventListener('click', function() {
            alert('Post creation modal would open here!');
        });
    }
    
    postOptions.forEach(option => {
        option.addEventListener('click', function() {
            const optionText = this.querySelector('span').textContent;
            alert(`${optionText} feature would open here!`);
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Add smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation to posts
function addLoadingAnimation() {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize loading animation
setTimeout(addLoadingAnimation, 500);

// Add hover effects for better UX
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.nav-item, .shortcut-item, .contact-item, .group-item, .sponsored-item, .birthday-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}

// Initialize hover effects
addHoverEffects();

// Add click effects for buttons
function addClickEffects() {
    const buttons = document.querySelectorAll('.action-btn, .post-option, .nav-icon');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Initialize click effects
addClickEffects();

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        const homeLink = document.querySelector('.nav-item[href="#"]');
        if (homeLink) {
            homeLink.click();
        }
    }
    
    // Press 'S' to focus search
    if (e.key === 's' || e.key === 'S') {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Add notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#45bd62' : type === 'error' ? '#f02849' : '#1877f2'};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add demo notifications
setTimeout(() => {
    showNotification('Welcome to SocialBook! 🎉', 'success');
}, 1000);

// Add online status indicator
function updateOnlineStatus() {
    const statusIndicator = document.createElement('div');
    statusIndicator.className = 'online-status';
    statusIndicator.innerHTML = '<i class="fas fa-circle"></i> Online';
    statusIndicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #45bd62;
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    
    document.body.appendChild(statusIndicator);
    
    // Update status based on online/offline
    window.addEventListener('online', () => {
        statusIndicator.innerHTML = '<i class="fas fa-circle"></i> Online';
        statusIndicator.style.background = '#45bd62';
    });
    
    window.addEventListener('offline', () => {
        statusIndicator.innerHTML = '<i class="fas fa-circle"></i> Offline';
        statusIndicator.style.background = '#f02849';
    });
}

// Initialize online status
updateOnlineStatus();
