import { CityInfo, OrientationDay, ImmersionTeaser, ResourceItem } from "./types";

export const CITIES_DATA: CityInfo[] = [
  {
    id: "delhi",
    name: "Delhi NCR",
    state: "National Capital Region",
    latitude: 28.6139,
    longitude: 77.209,
    xPercent: 42,
    yPercent: 26,
    industries: ["Retail & Wholesale", "E-commerce Logistics", "SaaS & Consumer Tech", "Heavy Manufacturing"],
    immersions: [
      "Market economics & pricing deep-dive in Chandni Chowk",
      "Factory tour in local industrial manufacturing clusters",
      "Interactive strategy briefings with top consumer startups"
    ],
    description: "The capital hub blending ancient wholesale markets like Chandni Chowk with high-growth startup ecosystems and national logistics corridors."
  },
  {
    id: "dehradun",
    name: "Dehradun",
    state: "Uttarakhand",
    latitude: 30.3165,
    longitude: 78.0322,
    xPercent: 45,
    yPercent: 18,
    industries: ["Agro-processing", "Eco-tourism", "FMCG production", "Forest products"],
    immersions: [
      "Himalayan organic supply chain & packaging operations",
      "FMCG manufacturing plant assembly line diagnostics",
      "Eco-resort tourism economics & hospitality workshop"
    ],
    description: "Where delicate Himalayan agricultural supply chains meet modern FMCG manufacturing, showcasing eco-conscious business scaling."
  },
  {
    id: "jalandhar",
    name: "Jalandhar",
    state: "Punjab",
    latitude: 31.326,
    longitude: 75.5762,
    xPercent: 36,
    yPercent: 15,
    industries: ["Sports Goods", "Leather Export", "Agri-Tech", "Hand Tools"],
    immersions: [
      "Interactive tour of premium sports product export manufacturing",
      "Surgical leather crafting & international quality standard audits",
      "Field workshop on mechanical tool forging & assembly lines"
    ],
    description: "The heavy engineering and sports export nucleus of Punjab, supplying global brands with high-performance equipment."
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    latitude: 26.9124,
    longitude: 75.7873,
    xPercent: 33,
    yPercent: 33,
    industries: ["Artisanal Textiles", "Gemology & Jewellery", "Heritage Hospitality", "Handicrafts & Decor"],
    immersions: [
      "Sourcing, block-printing, and global export economics in Bagru",
      "Gemstone cutting, polishing, and wholesale market dynamics",
      "Fireside audit on pricing models of heritage palace hotels"
    ],
    description: "The historical land where centuries-old craftsmanship, gemstone trade, and heritage branding satisfy global luxury demand."
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    latitude: 19.076,
    longitude: 72.8777,
    xPercent: 27,
    yPercent: 60,
    industries: ["Investment Banking", "FMCG Giants", "Port & Maritime Logistics", "B2B Micro-markets"],
    immersions: [
      "Trading floor mechanics and regulatory models",
      "Dharavi micro-enterprise value chains & high-density manufacturing",
      "Nhava Sheva maritime shipping container logistics & customs"
    ],
    description: "The financial heart of India. Analyze complex capital loops, cargo operations, and the incredible speed of dense urban commerce."
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    latitude: 12.9716,
    longitude: 77.5946,
    xPercent: 38,
    yPercent: 82,
    industries: ["Deep Tech & AI", "Space & Aviation", "Direct-to-Consumer (D2C)", "Venture Capital"],
    immersions: [
      "SaaS product architecture & VC pitch modeling",
      "Advanced robotics and automated dark-store fulfillment hubs",
      "Interactive aerospace simulation with top aviation builders"
    ],
    description: "The Silicon Valley of Asia. Immerse in AI deployment, automated logistics, and the venture-capital machinery driving the future."
  }
];

export const ORIENTATION_SCHEDULE: OrientationDay[] = [
  {
    dayNumber: 1,
    date: "01 June 2026",
    dayName: "Monday",
    venue: "NPS-Tower A",
    sessions: [
      { time: "07:00 - 08:00", name: "Breakfast at Hotel" },
      { time: "08:00 - 09:15", name: "Registration" },
      {
        time: "09:15 - 10:00",
        name: "Opening Note: Welcome to the Bharat Way of Learning",
        theme: "Leadership Session",
        host: "Shikhar Mahajan (Program Head)"
      },
      {
        time: "10:00 - 11:00",
        name: "Strategy Masterclass",
        theme: "Academic Engagement",
        host: "Abhishek Jhanwar"
      },
      {
        time: "11:00 - 12:00",
        name: "Mastering the Fellowship",
        theme: "Programme Briefing",
        host: "Ayush Harsh"
      },
      { time: "12:00 - 12:15", name: "Break" },
      {
        time: "12:15 - 13:15",
        name: "Campus Tour",
        host: "Masters' Union Programme Team"
      },
      { time: "13:15 - 14:15", name: "Lunch Break" },
      {
        time: "14:15 - 15:15",
        name: "Academic Overview: Workshops & Reflections during Immersions",
        theme: "Programme Briefing",
        host: "Shahrukh Moin Khan"
      },
      {
        time: "15:15 - 16:15",
        name: "Content Creation 101",
        theme: "Programme Briefing",
        host: "Sayyed Mohd. Salman"
      },
      { time: "16:15 - 16:30", name: "Break - Hi Tea" },
      {
        time: "16:30 - 18:00",
        name: "Zero to Profit",
        theme: "Programme Briefing",
        host: "Sumit Vijapure"
      },
      {
        time: "18:00 - 19:00",
        name: "WTF is Content: Content as Leverage",
        theme: "Programme Briefing",
        host: "Divyam Goenka"
      },
      { time: "19:00 - 20:00", name: "Departure for Hotel" },
      { time: "20:00 - 21:30", name: "Dinner" }
    ]
  },
  {
    dayNumber: 2,
    date: "02 June 2026",
    dayName: "Tuesday",
    venue: "NPS-Tower A",
    sessions: [
      { time: "07:00 - 08:00", name: "Breakfast at Hotel - Students Depart at 8 AM" },
      { time: "08:00 - 09:00", name: "Reporting + Attendance" },
      {
        time: "09:00 - 10:00",
        name: "POSH Session",
        theme: "Programme Briefing",
        host: "Smita Tandon"
      },
      {
        time: "10:00 - 11:00",
        name: "Experiential Learning: The Bharat Way",
        theme: "Programme Briefing",
        host: "Satyam Anand"
      },
      {
        time: "11:00 - 12:00",
        name: "Fireside Chat with Shantanu Prakash",
        theme: "CXO Session",
        host: "Shantanu Prakash & Shikhar Mahajan"
      },
      { time: "12:00 - 13:30", name: "Lunch Break" },
      {
        time: "13:30 - 14:45",
        name: "Prompting 101",
        theme: "Academic Engagement",
        host: "Nandini Seth"
      },
      { time: "14:45 - 15:00", name: "Break" },
      {
        time: "15:00 - 16:00",
        name: "Hooked: Ads 360",
        theme: "Academic Engagement",
        host: "Devansh Kotak"
      },
      { time: "16:00 - 16:15", name: "Break - Hi Tea" },
      {
        time: "16:15 - 18:15",
        name: "Navigating the ODC Journey",
        theme: "Programme Briefing",
        host: "Ayush Harsh & Taipy Dandapath"
      },
      { time: "18:15 - 20:00", name: "Departure for Hotel" },
      { time: "20:00 - 21:30", name: "Dinner" }
    ]
  },
  {
    dayNumber: 3,
    date: "03 June 2026",
    dayName: "Wednesday",
    venue: "Chandni Chowk Field",
    sessions: [
      {
        time: "11:00 - 17:00",
        name: "Market Visit - Chandni Chowk (Experiential Deep Dive)",
        theme: "Field Immersion",
        host: "Masters' Union Programme Team"
      }
    ]
  },
  {
    dayNumber: 4,
    date: "04 June 2026",
    dayName: "Thursday",
    venue: "NPS-Tower A",
    sessions: [
      { time: "07:30 - 08:30", name: "Breakfast at Hotel" },
      {
        time: "08:30 - 09:30",
        name: "Reporting + Attendance",
        host: "Programme Team"
      },
      {
        time: "09:30 - 11:00",
        name: "LinkedIn Photoshoot (Dress to Impress!)",
        theme: "Professional Branding",
        host: "Programme Team"
      },
      {
        time: "11:00 - 13:00",
        name: "Communication Workshop: Talk Like Obama (Presence, Pause, Power)",
        theme: "Programme Briefing",
        host: "Dr. Gopika Kumar"
      },
      { time: "13:00 - 14:00", name: "Lunch Break" },
      {
        time: "14:00 - 18:00",
        name: "Academic Workshop - Delhi Immersion Overview",
        theme: "In-Class Prep",
        host: "Dr. Abhishek Vashishth"
      },
      { time: "18:00 - 19:30", name: "Students Depart for Hotel" },
      { time: "19:30 - 21:30", name: "Dinner" }
    ]
  }
];

export const IMMERSION_TEASERS: ImmersionTeaser[] = [
  {
    id: "manufacturing",
    title: "Heavy Manufacturing & Foundries",
    tagline: "Industrial Forging Systems",
    description: "Step inside high-temperature smelting plants and precision milling factories. Watch raw steel and molten aluminum transform into structural power-components supporting global giants.",
    category: "Industries"
  },
  {
    id: "retail",
    title: "High-Density Retail Markets",
    tagline: "Chandni Chowk & Beyond",
    description: "Map micro-logistics inside ancient labyrinth wholesale networks generating millions in cash volumes daily. Analyze rapid inventory turning secrets passed down over generations.",
    category: "Markets"
  },
  {
    id: "logistics",
    title: "Port, Rail & Land Logistics",
    tagline: "The Multimodal Matrix",
    description: "Decode how massive container terminals coordinate millions of metric tons of cargo. Trace real-time routing mechanisms that bind ocean, sky, and rail into an unbroken flow.",
    category: "Logistics"
  },
  {
    id: "edu",
    title: "EdTech & Education Infrastructure",
    tagline: "Knowledge Distribution Networks",
    description: "Audit custom virtual infrastructures and remote learning hubs delivering standard pedagogy to global students at scale. Master standard monetization models.",
    category: "Services"
  },
  {
    id: "consumerBrands",
    title: "Consumer Brands & D2C",
    tagline: "Shelf Space & Emotional Velocity",
    description: "Audit fast-moving consumer packaged goods across wholesale setups to design premium visual shelf presence. Deconstruct digital marketing economics.",
    category: "Brands"
  },
  {
    id: "tech",
    title: "AI Development & Deep Tech Labs",
    tagline: "Next-Gen Software Engines",
    description: "Look behind closed doors at R&D centers crafting breakthrough autonomous software and cloud pipelines. Explore the VC portfolios Funding the Indian Tech boom.",
    category: "Tech"
  },
  {
    id: "agriculture",
    title: "Agri-Tech & Fresh Food Supply Chains",
    tagline: "Soil to Cold-Chain Integration",
    description: "Deconstruct how high-efficiency hydroponic and modern agricultural networks utilize IoT tracking grids to coordinate perishable food goods safely to hypermarkets.",
    category: "Agriculture"
  },
  {
    id: "supply",
    title: "Supply Chain & Multi-tier Assembly",
    tagline: "From Silicon to Container Yard",
    description: "Map multi-layered hardware distribution maps showing how microchips, raw plastic, and structural metal coalesce into finished components inside zero-waste facilities.",
    category: "Supply Chains"
  },
  {
    id: "financial",
    title: "Securities, Exchanges & Liquidity",
    tagline: "Capital Engines of the Nation",
    description: "Examine high-speed trading structures, micro-lending databases, and financial corridors that fund both rural entrepreneurial farmers and high-rise venture capital funds.",
    category: "Finance"
  }
];

export const RESOURCE_CARDS: ResourceItem[] = [
  {
    id: "guides",
    title: "Immersion Guides",
    type: "Google Drive Folder",
    description: "Deep dive syllabus, travel briefings, and logistical guidelines for all 6 city-level business expeditions.",
    link: "https://drive.google.com/drive/folders/1byqnfM8JT0X7-H5FMISS3agqbfvG8rqV?usp=sharing",
    buttonText: "Open Resource Folder"
  },
  {
    id: "inclusions",
    title: "Inclusions & Non-Inclusions",
    type: "Policy Catalog",
    description: "Review comprehensive guidelines detailing covered stays, municipal transport budgets, and meal parameters.",
    link: "https://drive.google.com/drive/folders/1uSvhh8eGHLNKbFbv2csSqxly0j6afKlL?usp=sharing",
    buttonText: "Open Resource Folder"
  }
];

export const HOTEL_INFO = {
  name: "Aldott Hotel Gurgaon",
  icon: "HotelIcon",
  checkInDate: "31 May 2026",
  checkInTime: "2:00 PM onwards",
  reminderText: "Your Bharat journey officially begins here.",
  mapsLink: "https://share.google/AIXMtG3jwBVX51yns",
  address: "Gurugram (Gurgaon), Haryana, India",
  features: ["Premium accommodation", "Hub for all immersion departures in Delhi"]
};
