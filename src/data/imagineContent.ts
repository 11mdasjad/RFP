export type Language = "en";

export interface StageScene {
  id: string;
  title: string;
  artEn: string;
  poster: string;
  fullVideoUrl: string;
  targetId: string;
}

export interface VideoItem {
  id: string;
  title: string;
  shortTitle?: string;
  subtitle?: string;
  poster: string;
  videoUrl: string;
  youtubeUrl: string;
}

export interface ProjectCard {
  id: string;
  slot: "slot-g" | "slot-a" | "slot-b" | "slot-c" | "slot-d" | "slot-e" | "slot-f" | "slot-h" | string;
  title: string;
  client: string;
  categoryEn: string;
  filterCat: "film" | "campaign" | "documentary" | "marketing" | "ai";
  descEn: string;
  poster: string;
  videoUrl?: string;
  youtubeUrl?: string;
  videos?: VideoItem[];
  hasComparison?: boolean;
  comparisonBefore?: string;
  comparisonAfters?: { label: string; src: string }[];
  tags: string[];
}

export const STAGE_SCENES: StageScene[] = [
  {
    id: "andc-college",
    title: "Acharya Narendra Dev College (ANDC)",
    artEn: "Institutional & Campus Documentary",
    poster: "/medien/galerie/_MG_0109.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/Cgvx6w13ZNg?autoplay=1",
    targetId: "projekt-andc"
  },
  {
    id: "election-campaigns",
    title: "Election Campaign Management",
    artEn: "Dr. Antul Teotia & Mobile LED Vans",
    poster: "/medien/galerie/311-campaign-led.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/jirysVZwPIE?autoplay=1",
    targetId: "projekt-election"
  },
  {
    id: "corporate-storytelling",
    title: "Corporate Storytelling & Brand Cinema",
    artEn: "Samsung, AIIMS & Leading Industrial Brands",
    poster: "/medien/landing/jindal-group-shoot.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/1PeIeMgjyQc?autoplay=1",
    targetId: "projekt-corporate"
  },
  {
    id: "documentary-heritage",
    title: "Documentaries & Social Impact",
    artEn: "Modern Delhi International School & National Heritage",
    poster: "/medien/landing/landing-directing-1669.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/91kFY2xs7cE?autoplay=1",
    targetId: "projekt-documentary"
  }
];

export const FAKTEN_DATA = [
  {
    num: "17+",
    labelEn: "Years of Media Excellence",
    descEn: "Headed by alumni of AJK MCRC, Jamia Millia Islamia, New Delhi."
  },
  {
    num: "1,000+",
    labelEn: "TV ads, Corporate Films & Documentaries",
    descEn: "High-definition corporate films, documentaries, and ad campaigns."
  },
  {
    num: "1,200+",
    labelEn: "Events Covered Nationwide",
    descEn: "From political conventions and expos to university convocations."
  },
  {
    num: "100%",
    labelEn: "Client Satisfaction",
    descEn: "Trusted by government bodies, leading colleges, and enterprise brands."
  }
];

export const CLIENT_LOGOS = [
  { name: "Unilever", src: "/medien/logos/unilever.png" },
  { name: "Haryana Police", src: "/medien/logos/haryana-police.png" },
  { name: "Sports Authority of India (SAI)", src: "/medien/logos/sports-authority-india.png" },
  { name: "Pradhanmantri Fasal Bima Yojana", src: "/medien/logos/pmfby.png" },
  { name: "GRC India (Save Globe)", src: "/medien/logos/grc-india.png" },
  { name: "Parmarth - Empowering Process", src: "/medien/logos/parmarth.png" },
  { name: "Smile India Trust", src: "/medien/logos/smile-india.png" },
  { name: "Leaderz Walk", src: "/medien/logos/leaderz-walk.png" },
  { name: "Pathfinder Academy", src: "/medien/logos/pathfinder-academy.png" },
  { name: "IIT Roorkee", src: "/medien/logos/iit-roorkee.png" },
  { name: "Jamia Hamdard University", src: "/medien/logos/jamia-hamdard.png" },
  { name: "National Archives of India", src: "/medien/logos/national-archives.jpg" },
  { name: "DD Kisan", src: "/medien/logos/dd-kisan.png" },
  { name: "Samsung", src: "/medien/logos/samsung.png" },
  { name: "Modern Delhi International School", src: "/medien/logos/modern-delhi-school.png" },
  { name: "Atal Bihari Vajpayee Hindi Vishwavidyalaya", src: "/medien/logos/atal-bihari-univ.png" },
  { name: "Bharat Construction", src: "/medien/logos/bharat-construction.jpg" },
  { name: "Jamia Co-operative Bank", src: "/medien/logos/jamia-coop-bank.jpg" },
  { name: "Brave Soul Foundation", src: "/medien/logos/brave-soul-foundation.jpg" }
];

export const PROJECTS_DATA: ProjectCard[] = [
  {
    id: "projekt-andc",
    slot: "slot-g",
    title: "Acharya Narendra Dev College (ANDC) Institutional Corporate Film",
    client: "University of Delhi / ANDC",
    categoryEn: "Institutional & Campus Corporate Film",
    filterCat: "film",
    descEn:
      "A cinematic campus documentary capturing academic breakthroughs, world-class research laboratories, and student innovations at Acharya Narendra Dev College, Delhi University.",
    poster: "/medien/youtube-thumbs/Cgvx6w13ZNg.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/Cgvx6w13ZNg?autoplay=1",
    youtubeUrl: "https://youtu.be/Cgvx6w13ZNg",
    tags: ["Institutional Master", "University of Delhi", "Scientific Labs", "4K Cinema"]
  },
  {
    id: "projekt-ai-rfp-shorts",
    slot: "slot-ai-1",
    title: "RFP Digital Shorts & Vertical Media",
    client: "RFP Digital Productions",
    categoryEn: "AI Video Production",
    filterCat: "ai",
    descEn:
      "High-impact vertical cinema, viral short-form narratives, and dynamic visual hooks engineered for modern algorithmic feeds and mobile-first audiences.",
    poster: "/medien/youtube-thumbs/IpnNqiRCDhU.jpg",
    videoUrl: "https://www.youtube.com/watch?v=IpnNqiRCDhU",
    youtubeUrl: "https://www.youtube.com/@rfpdigitalproductions/shorts",
    tags: ["AI Video Production", "RFP Shorts", "Vertical Cinema", "Shorts & Reels", "4K Vertical"]
  },
  {
    id: "projekt-ai-3d-animation",
    slot: "slot-ai-2",
    title: "3D Animation Work | RFP Digital Productions",
    client: "RFP Digital Productions",
    categoryEn: "AI Video Production",
    filterCat: "ai",
    descEn:
      "High-fidelity 3D modeling, dynamic visual simulations, photorealistic rendering, and architectural motion graphics produced for broadcast and commercial standards.",
    poster: "/medien/youtube-thumbs/4Q7U8yOny-Q.jpg",
    videoUrl: "https://www.youtube.com/watch?v=4Q7U8yOny-Q",
    youtubeUrl: "https://youtu.be/4Q7U8yOny-Q",
    tags: ["AI Video Production", "3D Animation", "CGI Motion", "VFX Pipeline", "3D Modeling"]
  },
  {
    id: "projekt-ai-work-fiction",
    slot: "slot-ai-3",
    title: "AI Work Fiction | RFP Digital Productions",
    client: "RFP Digital Productions",
    categoryEn: "AI Video Production",
    filterCat: "ai",
    descEn:
      "Pioneering AI-driven narrative world-building, neural character rendering, speculative fiction cinematography, and generative post-production workflows.",
    poster: "/medien/youtube-thumbs/uofSOLCSuC4.jpg",
    videoUrl: "https://www.youtube.com/watch?v=uofSOLCSuC4",
    youtubeUrl: "https://youtu.be/uofSOLCSuC4",
    tags: ["AI Video Production", "AI Filmmaking", "Generative Cinema", "AI Workflow", "Speculative AI"]
  },
  {
    id: "projekt-election",
    slot: "slot-a",
    title: "Election Campaign Documentaries & Mobile LED Vans",
    client: "Dr. Antul Teotia & Umesh Agarwal MLA",
    categoryEn: "Election Campaign Strategy & Media Operations",
    filterCat: "campaign",
    descEn:
      "Constituency-wide campaign operations featuring mobile high-brightness LED display vans, documentary storytelling, rally multi-camera live switching, and grassroots outreach.",
    poster: "/medien/youtube-thumbs/jirysVZwPIE.jpg",
    videoUrl: "https://www.youtube.com/watch?v=jirysVZwPIE",
    youtubeUrl: "https://youtu.be/jirysVZwPIE",
    videos: [
      {
        id: "antul-teotia",
        title: "Dr. Antul Teotia Zila Pramukh Bulandshahr",
        shortTitle: "Dr. Antul",
        subtitle: "The People's Voice | Zila Panchayat Adhyaksh Campaign",
        poster: "/medien/youtube-thumbs/jirysVZwPIE.jpg",
        videoUrl: "https://www.youtube.com/watch?v=jirysVZwPIE",
        youtubeUrl: "https://youtu.be/jirysVZwPIE"
      },
      {
        id: "umesh-agarwal",
        title: "Umesh Agarwal MLA (#BJP Gurugram)",
        shortTitle: "Umesh Agarwal",
        subtitle: "Gurugram's Transformation | Vikas Yatra Documentary",
        poster: "/medien/youtube-thumbs/3JWmjrRbYDM.jpg",
        videoUrl: "https://www.youtube.com/watch?v=3JWmjrRbYDM",
        youtubeUrl: "https://www.youtube.com/watch?v=3JWmjrRbYDM"
      },
      {
        id: "ajit-sharma",
        title: "Ajit Sharma MLA INC Bhagalpur",
        shortTitle: "Ajit Sharma",
        subtitle: "Profile Documentary Film | Bihar Vidhan Sabha",
        poster: "/medien/youtube-thumbs/3n58zR1Reqs.jpg",
        videoUrl: "https://www.youtube.com/watch?v=3n58zR1Reqs",
        youtubeUrl: "https://youtu.be/3n58zR1Reqs"
      }
    ],
    tags: ["Election Campaign", "Dr. Antul Teotia", "Umesh Agarwal MLA", "Ajit Sharma MLA", "Mobile LED Vans"]
  },
  {
    id: "projekt-election-legislative",
    slot: "slot-e",
    title: "Vidhan Sabha Legislative Profile Films",
    client: "Rajendra Pal Gautam & Devender Singh Babli",
    categoryEn: "Candidate Profile & Constituency Film",
    filterCat: "campaign",
    descEn:
      "High-impact political profile films highlighting grassroots public service, Vidhan Sabha speeches, and developmental roadmaps.",
    poster: "/medien/youtube-thumbs/I9b_Bg9VzOE.jpg",
    videoUrl: "https://www.youtube.com/watch?v=I9b_Bg9VzOE",
    youtubeUrl: "https://youtu.be/I9b_Bg9VzOE",
    videos: [
      {
        id: "rajendra-pal-gautam",
        title: "Rajendra Pal Gautam (Seemapuri MLA - AAP)",
        shortTitle: "Rajendra Gautam",
        subtitle: "Sangharsh Gatha Documentary | Delhi Vidhan Sabha",
        poster: "/medien/youtube-thumbs/I9b_Bg9VzOE.jpg",
        videoUrl: "https://www.youtube.com/watch?v=I9b_Bg9VzOE",
        youtubeUrl: "https://youtu.be/I9b_Bg9VzOE"
      },
      {
        id: "devender-babli",
        title: "Devender Singh Babli MLA (Tohana)",
        shortTitle: "Devender Babli",
        subtitle: "Devender Singh Babli Documentary Film | Haryana",
        poster: "/medien/youtube-thumbs/X6WGGZucJ1U.jpg",
        videoUrl: "https://www.youtube.com/watch?v=X6WGGZucJ1U",
        youtubeUrl: "https://youtu.be/X6WGGZucJ1U"
      },
      {
        id: "devendra-yadav",
        title: "Devendra Yadav (INC Delhi - Ex MLA Badli)",
        shortTitle: "Devendra Yadav",
        subtitle: "AICC Secretary Profile Documentary | Badli, Delhi",
        poster: "/medien/youtube-thumbs/cNJq_La_yzY.jpg",
        videoUrl: "https://www.youtube.com/watch?v=cNJq_La_yzY",
        youtubeUrl: "https://youtu.be/cNJq_La_yzY"
      }
    ],
    tags: ["Vidhan Sabha", "Rajendra Pal Gautam", "Devender Singh Babli", "Devendra Yadav", "Profile Films"]
  },
  {
    id: "projekt-election-media-war-room",
    slot: "slot-f",
    title: "Election Management & Prachar Anthems",
    client: "Shashi Jain BJP & RFP Election Media",
    categoryEn: "Election War Room & Viral Prachar Media",
    filterCat: "campaign",
    descEn:
      "Comprehensive election campaign management, campaign anthems, rapid-turnaround rally reels, and digital war room broadcasts.",
    poster: "/medien/youtube-thumbs/OlIKKn9HyBo.jpg",
    videoUrl: "https://www.youtube.com/watch?v=OlIKKn9HyBo",
    youtubeUrl: "https://youtu.be/OlIKKn9HyBo",
    videos: [
      {
        id: "rfp-election-master",
        title: "RFP Election Campaign & Media Management",
        shortTitle: "RFP Prachar",
        subtitle: "चुनाव प्रचार RFP डिजिटल मीडिया | Master Campaign Production",
        poster: "/medien/youtube-thumbs/OlIKKn9HyBo.jpg",
        videoUrl: "https://www.youtube.com/watch?v=OlIKKn9HyBo",
        youtubeUrl: "https://youtu.be/OlIKKn9HyBo"
      },
      {
        id: "shashi-jain-amroha",
        title: "Shashi Jain BJP (Amroha Chairman)",
        shortTitle: "Shashi Jain",
        subtitle: "Shashi Jain Chairman Amroha, UP Documentary Film",
        poster: "/medien/youtube-thumbs/KLfO_N4a6V8.jpg",
        videoUrl: "https://www.youtube.com/watch?v=KLfO_N4a6V8",
        youtubeUrl: "https://youtu.be/KLfO_N4a6V8"
      },
      {
        id: "political-showreel",
        title: "RFP Political Campaign & Media Showreel",
        shortTitle: "Showreel",
        subtitle: "Video Production & Election Management Showcase",
        poster: "/medien/youtube-thumbs/X_U98b96fk0.jpg",
        videoUrl: "https://www.youtube.com/watch?v=X_U98b96fk0",
        youtubeUrl: "https://www.youtube.com/watch?v=X_U98b96fk0"
      }
    ],
    tags: ["Election Management", "Shashi Jain", "Chunav Prachar", "War Room", "Political Showreel"]
  },
  {
    id: "projekt-samsung",
    slot: "slot-b",
    title: "Samsung Corporate Film & Technology Anthem",
    client: "Samsung Electronics",
    categoryEn: "Corporate Brand Film",
    filterCat: "film",
    descEn:
      "High-production corporate brand film crafted for global technology leaders, highlighting research, human engineering, and future-forward innovation.",
    poster: "/medien/youtube-thumbs/1PeIeMgjyQc.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/1PeIeMgjyQc?autoplay=1",
    youtubeUrl: "https://youtu.be/1PeIeMgjyQc",
    tags: ["Corporate Film", "Samsung", "Commercial Cinema", "Technology Anthem"]
  },
  {
    id: "projekt-aiims",
    slot: "slot-c",
    title: "AIIMS Corporate Movie - Medical Leadership & Clinical Care",
    client: "All India Institute of Medical Sciences (AIIMS)",
    categoryEn: "Healthcare Corporate Film",
    filterCat: "film",
    descEn:
      "Empathetic, authoritative medical documentary illustrating cutting-edge clinical research, compassionate healthcare teams, and patient care advancements.",
    poster: "/medien/youtube-thumbs/B8-5NEnLjQ8.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/B8-5NEnLjQ8?autoplay=1",
    youtubeUrl: "https://youtu.be/B8-5NEnLjQ8",
    tags: ["AIIMS", "Healthcare Film", "Clinical Excellence", "Doctor Interviews"]
  },
  {
    id: "projekt-school",
    slot: "slot-d",
    title: "Modern Delhi International School Showcase",
    client: "Modern Delhi International School, Greater Faridabad",
    categoryEn: "Campus & Academic Film",
    filterCat: "film",
    descEn:
      "Dynamic campus film showcasing sports arenas, robotics laboratories, performing arts, and student leadership across premier educational infrastructure.",
    poster: "/medien/youtube-thumbs/91kFY2xs7cE.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/91kFY2xs7cE?autoplay=1",
    youtubeUrl: "https://youtu.be/91kFY2xs7cE",
    tags: ["Campus Film", "Education", "Faridabad", "Student Life"]
  },
  {
    id: "projekt-iit",
    slot: "slot-e",
    title: "IIT Roorkee & IIT Delhi Corporate Films",
    client: "Indian Institute of Technology (IIT)",
    categoryEn: "Premier Institutional Corporate Film",
    filterCat: "film",
    descEn:
      "Comprehensive institutional films highlighting academic legacy, world-class engineering research facilities, and national technological contributions.",
    poster: "/medien/youtube-thumbs/TAv-50-CHjc.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/TAv-50-CHjc?autoplay=1",
    youtubeUrl: "https://youtu.be/TAv-50-CHjc",
    tags: ["IIT Roorkee", "IIT Delhi", "Engineering Research", "Institutional Master"]
  },
  {
    id: "projekt-doc-mewat",
    slot: "slot-f",
    title: "MEWAT | Documentary Film | दास्तान-ए-मेवात",
    client: "A Film by Maqsood Khan / RFP Productions",
    categoryEn: "Cultural & Historical Documentary",
    filterCat: "documentary",
    descEn:
      "A profoundly moving cultural and historical documentary exploring the rich heritage, legendary folklore, resilience, and soul of the Mewat region (दास्तान-ए-मेवात). Directed by Maqsood Khan.",
    poster: "/medien/youtube-thumbs/OgZJC0msHm8.jpg",
    videoUrl: "https://www.youtube.com/watch?v=OgZJC0msHm8",
    youtubeUrl: "https://youtu.be/OgZJC0msHm8",
    tags: ["Mewat", "दास्तान-ए-मेवात", "Historical Heritage", "Maqsood Khan", "Documentary Film"]
  },
  {
    id: "projekt-pathfinder",
    slot: "slot-h",
    title: "Pathfinder Academy Corporate Film",
    client: "Pathfinder Academy, Greater Noida",
    categoryEn: "Corporate & Campus Film",
    filterCat: "film",
    descEn:
      "High-production corporate film showcasing premier academic infrastructure, faculty excellence, and student leadership at Pathfinder Academy, Greater Noida.",
    poster: "/medien/youtube-thumbs/7o09OEkupfA.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/7o09OEkupfA?autoplay=1",
    youtubeUrl: "https://youtu.be/7o09OEkupfA",
    tags: ["Pathfinder Academy", "Corporate Film", "Greater Noida", "Campus Cinema"]
  },
  {
    id: "projekt-doc-qureshy",
    slot: "slot-doc-1",
    title: "Popular Documentary Film on Dr M.N. Qureshy (Geophysicist)",
    client: "Dr Mohammad Naseeb Qureshy Memorial Trust",
    categoryEn: "Scientific & Biographical Documentary",
    filterCat: "documentary",
    descEn:
      "A landmark biographical documentary chronicling the life, pathbreaking gravity research, and national scientific contributions of Dr Mohammad Naseeb Qureshy, an eminent Indian geophysicist.",
    poster: "/medien/youtube-thumbs/Vlv36qCyRVU.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Vlv36qCyRVU",
    youtubeUrl: "https://youtu.be/Vlv36qCyRVU",
    tags: ["Dr M.N. Qureshy", "Biographical Film", "Geophysicist", "National Science", "Documentary Master"]
  },
  {
    id: "projekt-doc-bulandshahr",
    slot: "slot-doc-2",
    title: "Bulandshahar Ki Vikas Yatra by District Magistrate (DM)",
    client: "District Administration Bulandshahr / Govt of UP",
    categoryEn: "Civic Governance & Development Documentary",
    filterCat: "documentary",
    descEn:
      "An authoritative governance documentary capturing the developmental transformation, civic welfare initiatives, rural road connectivity, and public infrastructure across Bulandshahr district led by the DM.",
    poster: "/medien/youtube-thumbs/sd1nYYl2YD0.jpg",
    videoUrl: "https://www.youtube.com/watch?v=sd1nYYl2YD0",
    youtubeUrl: "https://youtu.be/sd1nYYl2YD0",
    tags: ["Bulandshahar", "Vikas Yatra", "District Magistrate", "Civic Governance", "Infrastructure"]
  },
  {
    id: "projekt-doc-meos-mewat",
    slot: "slot-doc-3",
    title: "Meos and Mewat - A Forgotten Legacy | Documentary Film",
    client: "A Film by Maqsood Khan / Historical Archive",
    categoryEn: "Historical & Cultural Documentary",
    filterCat: "documentary",
    descEn:
      "An in-depth historical documentary uncovering the untold chronicles, cultural identity, and forgotten legacy of the Meo community across the Mewat belt. Directed by Maqsood Khan.",
    poster: "/medien/youtube-thumbs/uGVcyxRvvZg.jpg",
    videoUrl: "https://www.youtube.com/watch?v=uGVcyxRvvZg",
    youtubeUrl: "https://youtu.be/uGVcyxRvvZg",
    tags: ["Meos and Mewat", "Forgotten Legacy", "Cultural History", "Maqsood Khan", "Historical Film"]
  },
  {
    id: "projekt-doc-pinangwan-women",
    slot: "slot-doc-4",
    title: "पिनगंवा (मेवात) की जुझारू महिलाओं की अनूठी कहानी | Documentary Film",
    client: "A Film by Maqsood Khan / Grassroots Impact",
    categoryEn: "Social Impact & Women Leadership Documentary",
    filterCat: "documentary",
    descEn:
      "An inspiring grassroots documentary chronicling the courage, perseverance, and transformative journey of resilient women changemakers in Pinangwan, Mewat. Directed by Maqsood Khan.",
    poster: "/medien/youtube-thumbs/c6jrNreu0OM.jpg",
    videoUrl: "https://www.youtube.com/watch?v=c6jrNreu0OM",
    youtubeUrl: "https://youtu.be/c6jrNreu0OM",
    tags: ["Pinangwan", "Mewat", "Women Empowerment", "Social Impact", "Grassroots Heroes"]
  },
  {
    id: "projekt-doc-ahle-hadees",
    slot: "slot-doc-5",
    title: "Ahle Hadees Documentary Film | जमीअत अहले हदीस की तारीख और अचीवमेंट्स",
    client: "All India Jamiat Ahle Hadees / RFP Productions",
    categoryEn: "Institutional & Historical Documentary",
    filterCat: "documentary",
    descEn:
      "A comprehensive institutional documentary documenting the historical journey, educational contributions, public welfare institutions, and key milestones of Jamiat Ahle Hadees across India.",
    poster: "/medien/youtube-thumbs/xzdQEOkeGeI.jpg",
    videoUrl: "https://www.youtube.com/watch?v=xzdQEOkeGeI",
    youtubeUrl: "https://youtu.be/xzdQEOkeGeI",
    tags: ["Ahle Hadees", "Institutional History", "Social Welfare", "Educational Legacy", "Documentary Master"]
  }
];

export const SERVICES_DATA = [
  {
    num: "01",
    id: "corporate-films",
    titleEn: "Corporate Films",
    descEn:
      "Professional corporate storytelling, brand films, product launches and company profile videos. We create impactful videos that showcase your brand’s vision and story.",
    deliverablesEn: [
      "Company Profile Videos",
      "Brand Anthems & Commercials",
      "Executive Interviews & Keynotes",
      "Facility Walkthroughs & Industrial Films"
    ]
  },
  {
    num: "02",
    id: "documentary-films",
    titleEn: "Documentary Films",
    descEn:
      "Compelling documentaries that capture real stories with cinematic visuals and emotional impact. From cultural heritage to institutional history, we bring authenticity to the screen.",
    deliverablesEn: [
      "Institutional & Historical Documentaries",
      "Social Impact & NGO Field Stories",
      "Biographical Chronicles & Retrospectives",
      "Archival Research & Narration"
    ]
  },
  {
    num: "03",
    id: "social-media-digital-marketing",
    titleEn: "Social Media & Digital Marketing",
    descEn:
      "Full-funnel digital presence merging high-cadence reels, creative content strategy, and viral branding with targeted Meta & Google Ads, SEO, and lead conversion.",
    deliverablesEn: [
      "Content Calendar & High-Engagement Reels",
      "Meta Ads & Google Ads Management",
      "Brand Identity & Visual Narrative Guidelines",
      "SEO, Targeted Lead Funnels & Community Growth"
    ]
  },
  {
    num: "04",
    id: "election-campaigns",
    titleEn: "Election Campaign Services",
    descEn:
      "Complete political campaign strategy, media management, digital outreach and election branding. Run successful campaigns with innovative strategies and media coverage.",
    deliverablesEn: [
      "Mobile LED Display Screen Vans",
      "Original Prachar Songs & Anthems",
      "Nukkad Nataks (Street Play Performances)",
      "WhatsApp Outreach & Constituency Social Marketing"
    ]
  },
  {
    num: "05",
    id: "photography-events",
    titleEn: "Photography & Event Coverage",
    descEn:
      "Preserve your precious moments with artistic and high-quality photographs. Multi-camera setup, candid photography, and live streaming for summits, expos, and ceremonies.",
    deliverablesEn: [
      "High-Resolution Event Photography",
      "Corporate Headshots & Portfolios",
      "Multi-Camera Live Event Streaming",
      "Same-Day Edit Highlights & Retouching"
    ]
  },
  {
    num: "06",
    id: "website-development",
    titleEn: "Website Development",
    descEn:
      "High-performance, cinematic, mobile-first web applications, election campaign portals, and corporate platforms built with Next.js, modern UI/UX, and maximum conversion.",
    deliverablesEn: [
      "Custom Web Applications (Next.js & React)",
      "Political Campaign & Candidate Portals",
      "Corporate Showcases & Headless CMS",
      "100/100 Core Web Vitals & SEO Architecture"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    nr: "01",
    titleEn: "Consultation & Briefing",
    descEn: "We understand your objectives, target audience, core campaign messaging, budget, and timelines."
  },
  {
    nr: "02",
    titleEn: "Concept & Scriptwriting",
    descEn: "Our team develops the creative concept, storyboards, screenplay, and visual moodboards."
  },
  {
    nr: "03",
    titleEn: "Filming & Production",
    descEn: "We deploy experienced cinematographers, directors, cinema lighting, and 4K camera gear on location."
  },
  {
    nr: "04",
    titleEn: "Post-Production & Sound Design",
    descEn: "Masterful editing, color grading, voiceover narration, sound effects, and motion graphics integration."
  },
  {
    nr: "05",
    titleEn: "Final Delivery & Campaign Launch",
    descEn: "Delivery in high-definition formats optimized for broadcast, YouTube, social media, or live LED walls."
  }
];

export const FAQ_DATA = [
  {
    qEn: "What services does RFP Digital Productions offer?",
    aEn: "RFP Digital Productions is a full-service media production and election management company based in New Delhi. We specialize in corporate films, documentary films, social media management, digital marketing, election campaign management (LED vans, prachar songs, nukkad nataks), and professional photography."
  },
  {
    qEn: "Who leads the team at RFP Digital Productions?",
    aEn: "Our production house is managed by seasoned media professionals and alumni from the prestigious AJK Mass Communication & Research Center (AJK MCRC), Jamia Millia Islamia, New Delhi, bringing over 17 years of industry experience."
  },
  {
    qEn: "Can RFP Digital handle nationwide shoots across India?",
    aEn: "Yes, absolutely. We have covered over 1,200+ events and productions across India, including Delhi NCR, Uttar Pradesh, Bihar, Haryana, Rajasthan, and nationwide locations with agile mobile camera crews."
  },
  {
    qEn: "How does your Election Campaign Management service work?",
    aEn: "We provide an integrated, turnkey election campaign engine: mobile LED screen vans, original prachar songs, street plays (Nukkad Nataks), manifesto designs, digital banners, WhatsApp outreach, and on-ground rally video coverage."
  },
  {
    qEn: "How do we get a quote or discuss a project?",
    aEn: "You can reach out directly via WhatsApp, call us at +91 97117 91403 or +91-11-49963157, email info@rfpdigital.com, or submit the inquiry form on this site. Our team typically responds within the same day."
  }
];

export const REAL_YOUTUBE_VIDEOS = [
  {
    id: "7MGQPvm2zl8",
    title: "ANDC | Acharya Narendra Dev College",
    desc: "An immersive institutional experience captured in high definition.",
    embedUrl: "https://www.youtube.com/embed/7MGQPvm2zl8"
  },
  {
    id: "jirysVZwPIE",
    title: "ANDC Campus Tour & Research Labs",
    desc: "Official academic documentary and campus facilities walkthrough.",
    embedUrl: "https://www.youtube.com/embed/jirysVZwPIE"
  },
  {
    id: "91kFY2xs7cE",
    title: "University & Corporate Documentary",
    desc: "A moment that speaks a thousand words – real human storytelling.",
    embedUrl: "https://www.youtube.com/embed/91kFY2xs7cE"
  },
  {
    id: "hpacHvIGPNI",
    title: "Social & Community Initiative Film",
    desc: "A cinematic view of healthcare, public health, and social welfare programs.",
    embedUrl: "https://www.youtube.com/embed/hpacHvIGPNI"
  },
  {
    id: "KLfO_N4a6V8",
    title: "Election Campaign Rally & Anthem",
    desc: "Vibrant ground-level campaign coverage and public rally visuals.",
    embedUrl: "https://www.youtube.com/embed/KLfO_N4a6V8"
  },
  {
    id: "B8-5NEnLjQ8",
    title: "Modern Delhi Public School Showcase",
    desc: "Educational excellence, student achievements, and campus life.",
    embedUrl: "https://www.youtube.com/embed/B8-5NEnLjQ8"
  },
  {
    id: "1PeIeMgjyQc",
    title: "Brand Promotional Commercial",
    desc: "High-impact storytelling driving business and customer reach.",
    embedUrl: "https://www.youtube.com/embed/1PeIeMgjyQc"
  },
  {
    id: "TAv-50-CHjc",
    title: "Creative Production & Music Reel",
    desc: "Cinematic visual craftsmanship, custom song compositions, and post-production.",
    embedUrl: "https://www.youtube.com/embed/TAv-50-CHjc"
  },
  {
    id: "OgZJC0msHm8",
    title: "Studio & On-Location Production",
    desc: "Dynamic commercial cinematography and creative visual arts.",
    embedUrl: "https://www.youtube.com/embed/OgZJC0msHm8"
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    author: "Shri Ajeet Sharma",
    designation: "MLA, Bhagalpur · Bihar Legislative Assembly",
    quote: "RFP Digital Productions managed our complete constituency video broadcast network and mobile LED campaign. Their operational punctuality, message resonance, and technical reliability in field conditions were exemplary.",
    videoUrl: "/medien/testimonials/ajeet-sharma-mla-testimonial.mp4",
    youtubeUrl: "https://youtu.be/3n58zR1Reqs",
    thumbnail: "/medien/youtube-thumbs/3n58zR1Reqs.jpg"
  },
  {
    author: "Dr. U.S. Verma",
    designation: "Director Principal, Modern Delhi Public School (MDPS)",
    quote: "RFP Digital Productions captured the essence of our educational institution with supreme cinematic quality. Their team is thorough, creative, and remarkably professional.",
    videoUrl: "/medien/testimonials/mdps-testimonial.mp4",
    youtubeUrl: "https://youtu.be/91kFY2xs7cE",
    thumbnail: "/medien/youtube-thumbs/91kFY2xs7cE.jpg"
  },
  {
    author: "Constituency Ground Testimonial",
    designation: "Grassroots Voter & Citizen Feedback · Outreach Campaign",
    quote: "The on-ground reach, mobile broadcast screens, and authentic constituency representation created by RFP Digital brought our community's development voice directly to the leaders.",
    videoUrl: "/medien/testimonials/testimonials-video.mp4",
    youtubeUrl: "https://youtu.be/3n58zR1Reqs",
    thumbnail: "/medien/testimonials/testimonials-video-16x9.jpg"
  }
];

export const MAKING_OF_IMAGES = [
  "/medien/landing/landing-set-1211.jpg",
  "/medien/landing/landing-camera-1256.jpg",
  "/medien/landing/landing-film-1375.jpg",
  "/medien/landing/landing-directing-1669.jpg",
  "/medien/landing/landing-equipment-1335.jpg",
  "/medien/landing/landing-drone-1634.jpg",
  "/medien/landing/jindal-group-shoot.jpg",
  "/medien/landing/landing-anchor-1698.jpg",
  "/medien/galerie/_MG_0109.jpg",
  "/medien/galerie/308-indoor-set.jpg"
];
