# monica's creative cove

A minimalist single-page portfolio website showcasing creative projects including vibe coded websites, music on SoundCloud, and music videos on YouTube.

## Features

- **Fixed Sidebar**: Profile picture, title, and social media links
- **Infinite Scroll**: Automatically loads more projects as you scroll
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Minimalist Design**: Clean, elegant, and professional aesthetic

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your profile picture:
   - Place your profile picture at `/public/profile-picture.png`
   - The image should be square for best results

3. Update your social links:
   - Edit `src/components/Sidebar.jsx` and update the `socialLinks` object with your actual URLs

4. Add your projects:
   - Edit `src/data/projects.json` with your project information
   - Each project should have:
     - `id`: Unique identifier
     - `title`: Project title
     - `photo`: Path to project image (place images in `/public/`)
     - `description`: Project description
     - `links`: Object with available links (github, soundcloud, youtube, spotify, external)

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Color Palette

- Background: `#F5F5F5`
- Accent Colors: `#adeee3`, `#86deb7`, `#63b995`, `#50723c`, `#423e28`

## Project Structure

```
creative-garden/
├── public/              # Static assets (images, etc.)
├── src/
│   ├── components/      # React components
│   ├── data/           # Project data (JSON)
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
└── package.json
```

## Customization

- **Fonts**: Currently using Inter from Google Fonts. Change in `index.html`
- **Colors**: Update color values in the CSS files in `src/styles/`
- **Layout**: Adjust spacing and sizing in the respective component CSS files

