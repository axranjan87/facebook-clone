# SocialBook - Facebook-like Social Media Website

A modern, responsive social media website built with HTML, CSS, and JavaScript that mimics the core features and design of Facebook.

## 🚀 Features

### Core Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface inspired by Facebook's design
- **Interactive Elements**: Like, comment, and share functionality
- **Real-time Notifications**: Online status and notification system
- **User Profiles**: Complete profile pages with photos, friends, and posts
- **Search Functionality**: Search bar with keyboard shortcuts
- **Mobile Menu**: Collapsible navigation for mobile devices

### Pages
- **Home Page** (`index.html`): Main feed with posts, stories, and navigation
- **Profile Page** (`profile.html`): User profile with photos, friends, and personal posts

### Components
- **Header**: Logo, search bar, navigation icons, and user menu
- **Left Sidebar**: User profile, navigation menu, and shortcuts
- **Main Feed**: Create post section and posts timeline
- **Right Sidebar**: Contacts, sponsored content, and group conversations
- **Profile Header**: Cover photo, profile picture, and user information

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons and visual elements
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
SocialBook/
├── index.html          # Main home page
├── profile.html        # User profile page
├── styles.css          # Main stylesheet
├── profile.css         # Profile page specific styles
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #1877f2 (Facebook blue)
- **Success Green**: #45bd62
- **Warning Yellow**: #f7b928
- **Error Red**: #f02849
- **Background**: #f0f2f5
- **Text**: #1c1e21

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Layout
- **Grid System**: CSS Grid and Flexbox for responsive layouts
- **Breakpoints**: Mobile (480px), Tablet (768px), Desktop (1200px)
- **Sticky Elements**: Header and sidebars remain visible while scrolling

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Start exploring the social media features!

### Local Development
```bash
# If using a local server (optional)
python -m http.server 8000
# or
npx serve .
```

## 📱 Responsive Design

### Mobile (≤ 768px)
- Collapsible left sidebar
- Hidden right sidebar
- Simplified navigation
- Touch-friendly buttons
- Optimized typography

### Tablet (769px - 1199px)
- Hidden right sidebar
- Full left sidebar
- Adjusted spacing
- Medium-sized elements

### Desktop (≥ 1200px)
- Full three-column layout
- All features visible
- Optimal spacing
- Hover effects

## 🎯 Interactive Features

### Like System
- Click to like/unlike posts
- Visual feedback with icons
- Like count updates
- Different like types (thumbs up, heart)

### Comments & Shares
- Comment count tracking
- Share functionality
- Interactive buttons
- Hover effects

### Search
- Real-time search input
- Keyboard shortcuts (Press 'S' to focus)
- Search suggestions (placeholder)

### Navigation
- Smooth scrolling
- Active state indicators
- Mobile menu toggle
- Keyboard navigation

## 🎨 Customization

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #1877f2;
    --success-color: #45bd62;
    --warning-color: #f7b928;
    --error-color: #f02849;
}
```

### Layout
Modify the grid and flexbox properties:
```css
.main-content {
    display: flex;
    max-width: 1200px;
    gap: 20px;
}
```

### Typography
Update font families and sizes:
```css
body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}
```

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📈 Performance Features

- **Optimized Images**: Placeholder images for fast loading
- **CSS Animations**: Smooth transitions and hover effects
- **Lazy Loading**: Efficient content loading
- **Minimal JavaScript**: Lightweight interactive features
- **Responsive Images**: Appropriate sizing for different devices

## 🎭 Animations

- **Fade In**: Posts and cards appear with smooth animations
- **Hover Effects**: Interactive elements respond to user interaction
- **Loading States**: Visual feedback during content loading
- **Smooth Scrolling**: Enhanced user experience
- **Transform Effects**: Subtle movement on hover

## 🔒 Security Considerations

- **XSS Prevention**: Proper input sanitization
- **CSRF Protection**: Secure form handling
- **Content Security Policy**: Safe resource loading
- **Input Validation**: Client-side validation

## 🚀 Future Enhancements

### Planned Features
- [ ] User authentication system
- [ ] Real-time messaging
- [ ] Photo/video upload
- [ ] Live notifications
- [ ] Dark mode toggle
- [ ] Advanced search filters
- [ ] Post editing/deletion
- [ ] Friend requests system
- [ ] Privacy settings
- [ ] Mobile app integration

### Technical Improvements
- [ ] Backend API integration
- [ ] Database connectivity
- [ ] Real-time updates with WebSockets
- [ ] Progressive Web App (PWA) features
- [ ] Advanced caching strategies
- [ ] Performance monitoring
- [ ] Accessibility improvements
- [ ] SEO optimization

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ for learning and demonstration purposes.

## 🙏 Acknowledgments

- Facebook for design inspiration
- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and best practices

---

**Note**: This is a demonstration project built for educational purposes. It does not include backend functionality, user authentication, or real data persistence.
