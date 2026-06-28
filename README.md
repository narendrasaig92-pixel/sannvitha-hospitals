# Sannvitha Hospitals Website

A modern, responsive hospital website built with React and Tailwind CSS.

## 🎯 Features

✅ **Responsive Design** - Mobile, tablet, and desktop friendly
✅ **Department Showcase** - Display all medical departments
✅ **Doctor Profiles** - View doctor information and ratings
✅ **Appointment Booking** - Online appointment scheduling system
✅ **Health Blog** - Share health tips and articles
✅ **Contact Forms** - Easy communication channels
✅ **Modern UI** - Beautiful, professional design with Tailwind CSS
✅ **Fast Performance** - Optimized React components

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **Routing**: React Router v6
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Build Tool**: React Scripts

## 📁 Project Structure

```
sannvitha-hospitals/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About hospital
│   │   ├── Departments.jsx     # Medical departments
│   │   ├── Doctors.jsx         # Doctor profiles
│   │   ├── Services.jsx        # Services offered
│   │   ├── Appointments.jsx    # Booking form
│   │   ├── Blog.jsx            # Blog section
│   │   ├── Contact.jsx         # Contact section
│   │   └── Footer.jsx          # Footer
│   ├── pages/
│   │   └── Home.jsx            # Home page
│   ├── App.jsx                 # Main app component
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/narendrasaig92-pixel/sannvitha-hospitals.git
   cd sannvitha-hospitals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (not reversible)
npm run eject
```

## 🎨 Customization

### Update Hospital Information
Edit `src/components/Header.jsx` and `src/components/Footer.jsx` to update:
- Hospital name and contact details
- Phone numbers and email
- Social media links
- Address

### Add More Departments
Update the `departments` array in `src/components/Departments.jsx` with your hospital's departments.

### Update Doctor Profiles
Modify the `doctors` array in `src/components/Doctors.jsx` with actual doctor information.

### Customize Colors
Edit `tailwind.config.js` to change the color scheme (currently using teal).

## 🔗 Sections

1. **Header** - Navigation menu with mobile responsiveness
2. **Hero** - Eye-catching banner with CTA
3. **About** - Hospital history and mission
4. **Departments** - Medical specialties offered
5. **Doctors** - Healthcare professionals directory
6. **Services** - Complete service offerings
7. **Appointments** - Online booking system
8. **Blog** - Health and wellness articles
9. **Contact** - Contact information and form
10. **Footer** - Links and social media

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://narendrasaig92-pixel.github.io/sannvitha-hospitals"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

## 📝 License

MIT License - feel free to use this project for your own hospital website.

## 💬 Support

For questions or support, contact: support@sannvithahospitals.com

---

**Made with ❤️ for better healthcare**
