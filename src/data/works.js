// 作品数据
export const workCategories = [
  {
    id: 'brand-identity',
    name: 'Brand Identity',
    description: 'Building brand core identity and emotional connection through unique visual language, making every touchpoint an extension of the brand story.'
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description: 'From posters to publications, creating visual communications that speak with clarity and aesthetic precision across all media.'
  },
  {
    id: 'photographer',
    name: 'Photography',
    description: 'Capturing moments with intention—landscapes, portraits, street scenes, and personal projects that reveal authentic visual storytelling.'
  },
  {
    id: 'video-editor',
    name: 'Videography',
    description: 'Crafting moving images that engage and inspire through dynamic storytelling, cinematic quality, and thoughtful editing.'
  },
];

export const worksData = {
  'brand-identity': [
    {
      id: 1,
      title: '金智联盟出海企业咨询',
      description: 'Experimental type design',
      year: '2026',
      image: '/image/brand/jinzi.png',
       logoConcept: '/image/brand/logo-concept.png',
         colorImage1: "/image/brand/color-1.jpg",
  colorImage2: "/image/brand/color-2.jpg",
  businessCard1: "/image/brand/business-card-front.jpg",
  businessCard2: "/image/brand/business-card-back.jpg",
  websiteDesign: "/image/brand/website-design.jpg",
    },
    
  ],
  'graphic-design': [
    {
      id: 1,
      title: 'T8 Bubble tea Launch Poster',
      description: 'Promotional visual design for new product launch',
      year: '2026',
      image:  '/image/graphic/milktea-poster.png',
    },
    {
      id: 2,
      title: 'T8 Bubble tea Launch Poster',
      description: 'Promotional visual design for new product launch',
      year: '2026',
      image: '/image/graphic/milktea-poster1.jpg',
    },
    {
      id: 3,
      title: 'Book Cover',
      description: 'Literature series design',
      year: '2023',
      image: '/image/graphic/milktea-poster2.jpg',
    },
    {
      id: 12,
      title: 'Practice Poster',
      description: 'Practice design poster',
      year: '2022',
      image: '/image/graphic/diseno.png',
    },
  ],
  // 摄影作品 - 带子分类
  'photographer': {
    subCategories: [
      { id: 'landscape', name: 'Landscape' },
      { id: 'portrait', name: 'Portrait' },
      { id: 'street', name: 'Street' },
      { id: 'personal-projects', name: 'Personal Projects' },
    ],
    // 风光摄影
    landscape: [
      {
        id: 'landscape-1',
        image: '/image/images/ya.jpg',
      },
      {
        id: 'landscape-2',
        image: '/image/images/ye2.jpg',
      },
      {
        id: 'landscape-3',
        image: '/image/images/ye.jpg',
      },
      {
        id: 'landscape-4',
        image: '/image/images/feng.jpg',
      },
      {
        id: 'landscape-5',
        image: '/image/images/ya5.jpg',
      },
      {
        id: 'landscape-6',
        image: '/image/images/4.jpg',
      },
      {
        id: 'landscape-7',
        image: '/image/images/9.jpg',
      },

    ],
    // 人像摄影
    portrait: [
      {
        id: 'portrait-1',
        image: '',
      },


    ],
    // 街景摄影
    street: [
      {
        id: 'street-1',
        image: '',
      },

    ],
    // 个人项目摄影
    'personal-projects': [
      {
        id: 'personal-1',
        image: '/image/images/personal/H2.jpg',
      },
      {
        id: 'personal-2',
        image: '/image/images/personal/H1.jpg',
      },
      {
        id: 'personal-3',
        image: '/image/images/personal/V2.jpg',
      },
      {
        id: 'personal-4',
        image: '/image/images/personal/H7.jpg',
      },
      {
        id: 'personal-5',
        image: '/image/images/personal/V3.jpg',
      },
            {
        id: 'personal-6',
        image: '/image/images/personal/H3.jpg',
      },
      {
        id: 'personal-7',
        image: '/image/images/personal/V4.jpg',
      },
      {
        id: 'personal-8',
        image: '/image/images/personal/H4.jpg',
      },
      {
        id: 'personal-9',
        image: '/image/images/personal/V5.jpg',
      },
      {
        id: 'personal-10',
        image: '/image/images/personal/H5.jpg',
      },
      {
        id: 'personal-11',
        image: '/image/images/personal/V6.jpg',
      },
      {
        id: 'personal-12',
        image: '/image/images/personal/H6.jpg',
      },
      {
        id: 'personal-13',
        image: '/image/images/personal/H8.jpg',
      },
      {
        id: 'personal-14',
        image: '/image/images/personal/H9.jpg',
      },
            {
        id: 'personal-15',
        image: '/image/images/personal/H10.jpg',
      },
      {
        id: 'personal-16',
        image: '/image/images/personal/H11.jpg',
      },
      {
        id: 'personal-17',
        image: '/image/images/personal/H12.jpg',
      },
      {
        id: 'personal-18',
        image: '/image/images/personal/H13.jpg',
      },
      {
        id: 'personal-19',
        image: '/image/images/personal/V1.jpg',
      },
    ],
  },
  'video-editor': [
    {
      id: 1,
      title: 'Brand Film',
      description: 'Motion graphics for brand launch',
      year: '2026',
      image: '/image/video-editor/mosquito.png',
      videoUrl: '/video/mosquitovideo.mp4',
      isVideo: true,
      stats: {
      views: '',
      likes: '',
      comments: '',
      favorites: '',
      shares: '',
     },
    
    },
    {
      id: 2,
      title: 'TikTok E-commerce Short Video',
      description: 'Fast-paced editing, dynamic subtitles, and product-focused storytelling',
      year: '2026',
      image: '/image/video-editor/tirared2.jpg',
      videoUrl: '/video/tirared.mp4',
      isVideo: true,
      stats: {
      views: '44万',
      likes: '2491',
      comments: '53',
      favorites: '965',
      shares: '696',
     },
     link: "https://vm.tiktok.com/ZN8JLHTLU/",
    },
    {
      id: 3,
      title: 'TikTok E-commerce Short Video',
      description: 'Fast-paced editing, dynamic subtitles, and product-focused storytelling',
      year: '2026',
      image: '/image/video-editor/plaudnote.jpg',
      videoUrl: '/video/plaudnote.mp4',
      isVideo: true,
      stats: {
      views: '56万',
      likes: '2955',
      comments: '51',
      favorites: '1363',
      shares: '1320',
     },
     link: "https://vm.tiktok.com/ZN8eJdwpg/",
    },

  ],
};

