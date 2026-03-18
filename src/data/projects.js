export const projects = [
  {
    slug: 'ccoi',
    title: 'Creative Co-Op',
    featured: true,
    teaserImage: '/img/Ccoi/Ccoi-hp-crop.png',
    images: ['/img/Ccoi/Ccoi-hp.png', '/img/Ccoi/Ccoi-plp.png', '/img/Ccoi/Ccoi-pdp.png'],
    description: [
      'Creative Co-Op is a wholesale marketplace for home décor and lifestyle products.',
      'I worked with a designer and development team on a full site redesign in Optimizely (Episerver). My role focused on front-end development, rebuilding site components and improving key e-commerce features including product filters, the product detail page, and the shopping cart experience from add-to-cart through checkout.',
    ],
    technologies: 'HTML, SCSS, JavaScript, Optimizely, Sketch',
    websiteUrl: "",
    cms: 'Optimizely',
  },
  {
    slug: 'financial-316',
    title: 'Financial 316',
    featured: true,
    teaserImage: '/img/316/316-hp-crop.png',
    images: ['/img/316/316-hp.png', '/img/316/316-page.png', '/img/316/316-article.png'],
    description: [
      'Financial 316 is a Christian-based banking platform focused on providing faith-driven financial services and resources to its community.',
      'I worked as the front-end developer, translating Figma designs into responsive, reusable Kentico components. Using CSHTML, SCSS, and JavaScript, I built a consistent user experience across the site and helped bring the design system to life.',
    ],
    technologies: 'CSHTML, SCSS, JavaScript, Kentico, Figma',
    websiteUrl: "https://bank316.com/",
    cms: 'Kentico',
  },
  {
    slug: 'develon',
    title: 'Develon',
    featured: true,
    teaserImage: '/img/Develon/Develon-hp-crop.png',
    images: ['/img/Develon/Develon-hp.png', '/img/Develon/Develon-plp.png', '/img/Develon/Develop-pdp.png'],
    description: [
      'Develon Used is a global marketplace for buying and selling pre-owned Develon construction equipment.',
      'As a front-end developer, I built features in Optimizely (Episerver) using CSHTML, SCSS, Vue, and JavaScript. I developed filtering tools that make it easier for customers to find equipment and created a seller portal that allows users to begin submitting their own listings to the platform.',
    ],
    technologies: 'CSHTML, SCSS, JavaScript, Vue, Optimizely, Figma',
    websiteUrl: "https://www.develon-used.com/",
    cms: 'Optimizely',
  },
  {
    slug: 'marinemax',
    title: 'Marinemax',
    featured: false,
    teaserImage: '/img/Marinemax/Marinemax-hp-crop.png',
    images: ['/img/Marinemax/Marinemax-hp.png', '/img/Marinemax/Marinemax-store.png','/img/Marinemax/Marinemax-filter.png', '/img/Marinemax/Marinemax-plp.png'],
    description: [
      'MarineMax is a marketplace for discovering boats and marine products.',
      'I contributed front-end updates to Sitecore homepage components and improved the filtering experience for browsing inventory, helping create a smoother and more user-friendly shopping experience.',
    ],
    technologies: 'HTML, SCSS, JavaScript, Sitecore',
    websiteUrl: "https://www.marinemax.com/",
    cms: 'Sitecore',
  },
  {
    slug: 'lamar',
    title: 'Lamar',
    featured: true,
    teaserImage: '/img/Lamar/Lamar-hp-crop.png',
    images: ['/img/Lamar/Lamar-hp.png', '/img/Lamar/Lamar-form.png', '/img/Lamar/Lamar-locations.png'],
    description: [
      'Lamar is the digital platform for Lamar Advertising, providing information about billboard advertising and helping businesses find advertising opportunities.',
      'I worked with a development team to build front-end components in Adobe Experience Manager (AEM). My work included homepage updates, form experiences, and improvements to the locations section to help users explore advertising options more easily.',
    ],
    technologies: 'HTML, SCSS, JavaScript, Adobe Experience Manager, Figma',
    websiteUrl: "https://lamar.com/",
    cms: "Adobe Experience Manager",
  },
  {
    slug: 'cannondale',
    title: 'Cannondale',
    featured: false,
    videoSrc: '/video/cannondale-vid.mov',
    teaserImage: '/img/cannondale-hp.png',
    description: [
      'Cannondale is a premium bicycle brand known for performance-driven design and innovation.',
      'I contributed to a full website redesign, collaborating with a design agency to build custom Sitecore components and responsive page layouts. My work focused on front-end development using HTML, SCSS, and JavaScript, including subtle animations and transitions that helped bring the brand’s energy to life.',
    ],
    technologies: 'HTML, SCSS, JavaScript, Sitecore, Sketch',
    websiteUrl: 'https://www.cannondale.com/',
    cms: 'Sitecore',
  },
  {
    slug: 'secureworks',
    title: 'Secureworks',
    featured: false,
    teaserImage: '/img/sw-hp.png',
    videoSrc: '/video/secureworks-video.mov',
    description: [
      'Secureworks offers cybersecurity solutions for enterprise clients.',
      'I joined the project during a full site redesign and partnered with a design agency and Sitecore developer to build modular, reusable UI components for Sitecore CMS. My focus was on translating complex layouts into clean, scalable front-end code while maintaining consistency across templates and ensuring cross-browser compatibility.',
    ],
    technologies: 'HTML, SCSS, JavaScript, Sitecore, Sketch',
    websiteUrl: 'https://www.secureworks.com/',
    cms: 'Sitecore',
  },
  {
    slug: 'momentus',
    title: 'MomentUs',
    featured: false,
    teaserImage: '/img/momentus-hp.png',
    videoSrc: '/video/momentus-video.mov',
    description: [
      'MomentUs is a cloud storage platform for media files.',
      'I worked as the front-end developer, collaborating with a designer to provide UI feedback and turn designs into a fully responsive landing page. Built with HTML, SCSS, and JavaScript, the page included animations and interactions designed to showcase the product to investors.',
    ],
    technologies: 'HTML, SCSS, JavaScript, Photoshop',
    websiteUrl: null,
    cms: '',
  },
  {
    slug: 'vacation',
    title: 'Vacation.com',
    featured: false,
    teaserImage: '/img/vacation-hp.png',
    videoSrc: '/video/vacation-video.mov',
    description: [
      'Vacation.com is a travel planning platform that blends curated content with expert travel agent services.',
      'I partnered with a designer and Sitecore developer to redesign the site with a fresh, modern aesthetic aimed at younger luxury travelers. My role focused on front-end development, building responsive, conversion-driven pages and integrating them into Sitecore components.',
    ],
    technologies: 'HTML, SCSS, JavaScript, Sitecore, Sketch',
    websiteUrl: 'https://www.vacation.com/',
    cms: 'Sitecore',
  },
]

/** Carousel shows only featured projects. */
export const sliderProjects = projects.filter((p) => p.featured === true)

export const demoApps = [
  {
    title: 'Tic Tac Toe',
    image: '/img/tictactoe.png',
    description: 'Designed and developed a Tic Tac Toe game using HTML, CSS, and Vue.js.',
    demoUrl: '/tic-tac-toe/index.html',
  },
  {
    title: 'Blackjack',
    image: '/img/blackjack.png',
    description: 'Designed and developed a cartoon-themed Blackjack game using HTML, CSS, and Vue.js.',
    demoUrl: '/blackjack/index.html',
  },
  {
    title: 'Drawing Things',
    image: '/img/drawing-things.png',
    description: 'Developed an interactive drawing application using Vue.js, HTML5 Canvas, and JavaScript. Features include multiple brush tools, gradient fills, background color fills, undo functionality, and an eraser tool.',
    demoUrl: '/drawingthings-project/index.html',
  },
]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null
}