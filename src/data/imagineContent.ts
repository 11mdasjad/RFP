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
    artEn: "Modern Delhi Public School & National Heritage",
    poster: "/medien/landing/landing-directing-1669.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/91kFY2xs7cE?autoplay=1",
    targetId: "projekt-documentary"
  }
];

export const FAKTEN_DATA = [
  {
    num: "17+",
    labelEn: "Years of Media Excellence",
    descEn: "Established in 2009 by alumni of AJK MCRC, Jamia Millia Islamia, New Delhi."
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
    num: "500+",
    labelEn: "Campaign & Corporate Retainers",
    descEn: "Trusted production partner to premier institutions, government bodies, and brands."
  }
];

// Client logos supplied in the LOGOS Google Drive folder.
export const CLIENT_LOGOS = [
  {
    "name": "Foundation for Equal Citizenship",
    "src": "/medien/client-logos/foundation-for-equal-citizenship.png"
  },
  {
    "name": "Mewat Development Agency",
    "src": "/medien/client-logos/mewat-development-agency.jpg"
  },
  {
    "name": "ProMedica",
    "src": "/medien/client-logos/promedica.png"
  },
  {
    "name": "Gayatri Public School",
    "src": "/medien/client-logos/gayatri-public-school.jpg"
  },
  {
    "name": "Jindal Infraprojects",
    "src": "/medien/client-logos/jindal-infraprojects.jpg"
  },
  {
    "name": "AR Constructions",
    "src": "/medien/client-logos/ar-constructions.avif"
  },
  {
    "name": "Meera Brass Products",
    "src": "/medien/client-logos/meera-brass-products.jpg"
  },
  {
    "name": "PFS Sports",
    "src": "/medien/client-logos/pfs-sports.png"
  },
  {
    "name": "DIET Moti Bagh",
    "src": "/medien/client-logos/diet-moti-bagh.jpg"
  },
  {
    "name": "DIET Darya Ganj",
    "src": "/medien/client-logos/diet-darya-ganj.jpg"
  },
  {
    "name": "Alwar Mewat Institute of Education and Development",
    "src": "/medien/client-logos/alwar-mewat-institute-of-education-and-development.jpg"
  },
  {
    "name": "IIT Delhi",
    "src": "/medien/client-logos/iit-delhi.png"
  },
  {
    "name": "Shalom Hills International School",
    "src": "/medien/client-logos/shalom-hills-international-school.jpg"
  },
  {
    "name": "Cooper Pharma",
    "src": "/medien/client-logos/cooper-pharma.png"
  },
  {
    "name": "Abbott",
    "src": "/medien/client-logos/abbott.png"
  },
  {
    "name": "NIMS University",
    "src": "/medien/client-logos/nims-university.jpg"
  },
  {
    "name": "Raheeq Global School",
    "src": "/medien/client-logos/raheeq-global-school.png"
  },
  {
    "name": "Jamia Hamdard",
    "src": "/medien/client-logos/jamia-hamdard.png"
  },
  {
    "name": "Islamic Relief Worldwide",
    "src": "/medien/client-logos/islamic-relief-worldwide.jpg"
  },
  {
    "name": "DD Kisan",
    "src": "/medien/client-logos/dd-kisan.webp"
  },
  {
    "name": "IIT Roorkee",
    "src": "/medien/client-logos/iit-roorkee.png"
  },
  {
    "name": "Jamia Co-operative Bank",
    "src": "/medien/client-logos/jamia-co-operative-bank.jpg"
  },
  {
    "name": "HIMSR",
    "src": "/medien/client-logos/himsr.png"
  },
  {
    "name": "Al-Hafeez",
    "src": "/medien/client-logos/al-hafeez.png"
  },
  {
    "name": "Atal Bihari Vajpayee Hindi Vishwavidyalaya",
    "src": "/medien/client-logos/atal-bihari-vajpayee-hindi-vishwavidyalaya.png"
  },
  {
    "name": "Bharat Construction",
    "src": "/medien/client-logos/bharat-construction.jpg"
  },
  {
    "name": "Brave Souls Foundation",
    "src": "/medien/client-logos/brave-souls-foundation.jpg"
  },
  {
    "name": "AIIMS New Delhi",
    "src": "/medien/client-logos/aiims-new-delhi.png"
  },
  {
    "name": "Faridabad Smart City",
    "src": "/medien/client-logos/faridabad-smart-city.jpg"
  },
  {
    "name": "Haryana Police",
    "src": "/medien/client-logos/haryana-police.png"
  },
  {
    "name": "Sports Authority of India",
    "src": "/medien/client-logos/sports-authority-of-india.jpg"
  },
  {
    "name": "Me and My Human",
    "src": "/medien/client-logos/me-and-my-human.jpg"
  },
  {
    "name": "Smile India Trust",
    "src": "/medien/client-logos/smile-india-trust.png"
  },
  {
    "name": "Acharya Narendra Dev College",
    "src": "/medien/client-logos/acharya-narendra-dev-college.png"
  },
  {
    "name": "GRC India",
    "src": "/medien/client-logos/grc-india.png"
  },
  {
    "name": "Leaderz Walk",
    "src": "/medien/client-logos/leaderz-walk.png"
  },
  {
    "name": "CanWinn Foundation",
    "src": "/medien/client-logos/canwinn-foundation.jpg"
  },
  {
    "name": "National Archives of India",
    "src": "/medien/client-logos/national-archives-of-india.jpg"
  },
  {
    "name": "Bharat Bharati Swadesh Pradesh",
    "src": "/medien/client-logos/bharat-bharati-swadesh-pradesh.png"
  },
  {
    "name": "go4WorldBusiness",
    "src": "/medien/client-logos/go4worldbusiness.png"
  },
  {
    "name": "AG Builders",
    "src": "/medien/client-logos/ag-builders.jpg"
  }
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
    title: "Modern Delhi International School (MDIS)",
    client: "Modern Delhi Public School, Faridabad",
    categoryEn: "Campus & Academic Film",
    filterCat: "film",
    descEn:
      "Dynamic campus film showcasing sports arenas, robotics laboratories, performing arts, and student leadership under the direction of Dr. U.S. Verma.",
    poster: "/medien/youtube-thumbs/91kFY2xs7cE.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/91kFY2xs7cE?autoplay=1",
    youtubeUrl: "https://youtu.be/91kFY2xs7cE",
    tags: ["MDPS", "Campus Film", "Education", "Faridabad", "Student Life"]
  },
  {
    id: "projekt-iit",
    slot: "slot-e",
    title: "IIT Roorkee Corporate FILM",
    client: "Indian Institute of Technology (IIT)",
    categoryEn: "Premier Institutional Corporate Film",
    filterCat: "film",
    descEn:
      "Comprehensive institutional films highlighting academic legacy, world-class engineering research facilities, and national technological contributions.",
    poster: "/medien/youtube-thumbs/TAv-50-CHjc.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/TAv-50-CHjc?autoplay=1",
    youtubeUrl: "https://youtu.be/TAv-50-CHjc",
    tags: ["IIT Roorkee", "Engineering Research", "Institutional Master"]
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
  },
  {
    id: "projekt-social-marketing-1",
    slot: "slot-mkt-1",
    title: "Brand Promotional Reel Series & Digital Campaign",
    client: "Leading FMCG & Corporate Brands",
    categoryEn: "Social Media & Digital Marketing",
    filterCat: "marketing",
    descEn:
      "High-impact short-form video campaign designed for Instagram Reels, YouTube Shorts, and Meta ad funnels, driving strong engagement, brand awareness, and consumer recall.",
    poster: "/medien/landing/corporate-film-production-banner.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/1PeIeMgjyQc?autoplay=1",
    youtubeUrl: "https://youtu.be/1PeIeMgjyQc",
    tags: ["Social Media", "Reels", "Brand Video", "Digital Marketing", "Meta Ads"]
  },
  {
    id: "projekt-social-marketing-2",
    slot: "slot-mkt-2",
    title: "Public Outreach & Constituency Video Campaign",
    client: "Public Outreach & Assembly Communications",
    categoryEn: "Constituency Outreach & Social Content",
    filterCat: "marketing",
    descEn:
      "Rapid-turnaround digital video highlights, candidate speech cuts, and voter-focused short clips produced daily to maintain continuous public outreach across digital platforms.",
    poster: "/medien/youtube-thumbs/KLfO_N4a6V8.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/KLfO_N4a6V8?autoplay=1",
    youtubeUrl: "https://youtu.be/KLfO_N4a6V8",
    tags: ["Digital Outreach", "Social Campaign", "Constituency Highlights", "Shorts"]
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
    qEn: "What is your typical production timeline from concept to final delivery?",
    aEn: "Corporate and institutional films typically take 2 to 3 weeks from brief and script approval to final color-graded master delivery. For election campaigns, rally coverage, and urgent social media reels, our rapid-turnaround editing units deliver broadcast-ready cuts within 24 to 48 hours."
  },
  {
    qEn: "How are quotations and project estimates prepared?",
    aEn: "We prepare clear, transparent line-item estimates based on shoot duration, crew size, camera and lighting tier, travel logistics, voiceover licensing, and motion graphics requirements. You receive an itemized proposal within 24 to 48 hours of your initial brief."
  },
  {
    qEn: "How many revision rounds are included in a video production project?",
    aEn: "Every project includes two structured rounds of review: Round 1 focuses on offline narrative flow, story pacing, and dialogue selection; Round 2 refines final color grading, sound design, subtitles, and graphics. Additional revisions can be accommodated smoothly if scope changes."
  },
  {
    qEn: "Can RFP Digital handle nationwide shoots across India and outstation travel?",
    aEn: "Yes. Over our 17+ years of operations, our self-contained production crews have filmed across 15+ Indian states—including university campuses, manufacturing plants, rural villages, and metropolitan capitals. We coordinate all transport, equipment logistics, and location permissions."
  },
  {
    qEn: "Do you provide multilingual voiceovers, regional adaptations, and subtitles?",
    aEn: "Yes. We regularly produce films in Hindi, English, Urdu, Bengali, Bhojpuri, Punjabi, and other regional languages. We work with professional voiceover artists and provide accurate open or closed-caption subtitles formatted for web, television, and mobile viewing."
  },
  {
    qEn: "Can we receive raw footage and project archives after completion?",
    aEn: "Yes. In addition to delivering finished 4K master files, clients can opt for complete raw footage transfer on hard drives or secure cloud storage, along with high-resolution behind-the-scenes photography archives."
  },
  {
    qEn: "How does your Election Campaign Management service operate?",
    aEn: "We provide an integrated, turnkey election campaign engine: mobile LED screen vans, original prachar songs, street plays (Nukkad Nataks), manifesto designs, digital banners, WhatsApp outreach, and on-ground rally video coverage—strictly aligned with Election Commission Model Code guidelines."
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
