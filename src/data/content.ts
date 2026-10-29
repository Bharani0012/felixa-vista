const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  hero: u("photo-1600596542815-ffad4c1539a9", 1800),
  about: u("photo-1600585154340-be6161a56a0c", 900),
  banner: u("photo-1545324418-cc1a3fa10c00", 1800),
  why: u("photo-1502672260266-1c1ef2d93688", 900),
  quote: u("photo-1600607687939-ce8a6c25118c", 1800),
  location: u("photo-1500382017468-9049fed747ef", 900),
};

export const navLinks = [
  { label: "Buy", href: "#about" },
  { label: "Rent", href: "#amenities" },
  { label: "Sell", href: "#enquiry" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#why" },
  { label: "Home Loans", href: "#loans" },
];

export const highlights = [
  { value: "25+", label: "Lifestyle amenities" },
  { value: "10 mins", label: "From Vandalur Bus Stand" },
  { value: "100%", label: "Secured gated community" },
  { value: "80%", label: "Home loan facility" },
];

export const whyPoints = [
  {
    title: "Highway-facing location",
    text: "Located on the highway in Padappai, Chennai, with easy access to Vandalur, Mudichur and Tambaram.",
  },
  {
    title: "Ready-to-construct plots",
    text: "Build your dream home your way on plots that are ready for construction.",
  },
  {
    title: "Green surroundings",
    text: "A peaceful, green environment with landscaped open spaces.",
  },
  {
    title: "Secure gated community",
    text: "A 100% secured gated community for everyday peace of mind.",
  },
  {
    title: "25+ lifestyle amenities",
    text: "Gardens, play areas, sports courts and more within the community.",
  },
];

export const amenities = [
  { title: "Landscaped Gardens", img: u("photo-1558904541-efa843a96f01", 700) },
  {
    title: "Children's Play Area",
    img: u("photo-1596997000103-e597b3ca50df", 700),
  },
  { title: "Sports Court", img: u("photo-1461896836934-ffe607ba8211", 700) },
  {
    title: "Community Spaces",
    img: u("photo-1519331379826-f10be5486c6f", 700),
  },
];

export const locations = ["Vandalur", "Mudichur", "Tambaram"];

export const connectivity = [
  {
    tab: "IT Parks",
    items: ["Location 1", "Location 2", "Location 3", "Location 4"],
  },
  {
    tab: "Hospitals",
    items: ["Location 1", "Location 2", "Location 3", "Location 4"],
  },
  {
    tab: "Entertainment",
    items: ["Location 1", "Location 2", "Location 3", "Location 4"],
  },
  {
    tab: "Schools & Colleges",
    items: ["Location 1", "Location 2", "Location 3", "Location 4"],
  },
];

export const banks = ["SBI", "HDFC", "ICICI", "Axis Bank", "IDBI", "LIC"];

export const faqs = [
  {
    q: "What is Felixa Vistas?",
    a: "Felixa Vistas is a plotted residential development in Padappai, Chennai, with ready-to-construct plots in a secure gated community.",
  },
  {
    q: "Where is Felixa Vistas located?",
    a: "Felixa Vistas is located in Padappai, with convenient connectivity to Vandalur, Mudichur and Tambaram.",
  },
  {
    q: "What plot sizes are available at Felixa Vistas?",
    a: "Plot size details will be shared by our team. Please book a site visit or send an enquiry.",
  },
  {
    q: "What amenities does Felixa Vistas offer?",
    a: "The community offers 25+ lifestyle amenities, including landscaped gardens, a children's play area and a sports court.",
  },
  {
    q: "Is Felixa Vistas a gated community?",
    a: "Yes. Felixa Vistas is a 100% secured gated community.",
  },
  {
    q: "Are home loan facilities available for Felixa Vistas?",
    a: "Yes. The project has APF approval from leading banks, including SBI, HDFC, ICICI, Axis Bank, IDBI and LIC, with loans of up to 80%.",
  },
  {
    q: "What infrastructure facilities are available at Felixa Vistas?",
    a: "Infrastructure details will be confirmed by our team. Please contact us for the latest information.",
  },
  {
    q: "How far is Felixa Vistas from Vandalur Bus Stand?",
    a: "Felixa Vistas is about a 10-minute drive from Vandalur Bus Stand.",
  },
];

export const timelines = [
  "Immediately",
  "Within 3 months",
  "3 to 6 months",
  "6 to 12 months",
  "Just exploring",
];
