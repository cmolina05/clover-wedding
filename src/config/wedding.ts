export interface Milestone {
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface EntourageMember {
  name: string;
  role: string;
}

export interface EntourageCategory {
  category: string;
  members: EntourageMember[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    hashtag: string;
  };
  date: string; // ISO format for timer calculation
  dateFormatted: string;
  rsvpDeadline: string;
  ceremony: {
    time: string;
    venue: string;
    address: string;
    googleMapsUrl: string;
  };
  reception: {
    time: string;
    venue: string;
    address: string;
    googleMapsUrl: string;
  };
  story: Milestone[];
  program: { time: string; event: string }[];
  entourage: EntourageCategory[];
  dressCode: {
    title: string;
    description: string;
    swatches: ColorSwatch[];
  };
  faqs: FAQItem[];
  registry: {
    note: string;
    accounts: { type: string; details: string; note?: string }[];
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: "Carlo",
    bride: "Roseth",
    hashtag: "#CarloAndRoseth2026",
  },
  date: "2026-12-15T15:00:00+08:00",
  dateFormatted: "December 15, 2026",
  rsvpDeadline: "November 15, 2026",
  ceremony: {
    time: "3:00 PM",
    venue: "St. Mary's Cathedral",
    address: "123 Sanctuary Way, City Center",
    googleMapsUrl: "https://maps.google.com",
  },
  reception: {
    time: "5:00 PM",
    venue: "The Glasshouse Pavilion",
    address: "456 Botanical Gardens Drive, City Center",
    googleMapsUrl: "https://maps.google.com",
  },
  story: [
    { year: "2019", title: "We First Met", description: "A chance encounter over coffee in downtown Manila." },
    { year: "2021", title: "Our First Adventure", description: "Exploring the coastal trails of Batanes together." },
    { year: "2024", title: "The Proposal", description: "A quiet sunset proposal overlooking the hills." },
    { year: "2027", title: "Our Forever Begins", description: "Saying 'I do' surrounded by the ones we love most." },
  ],
  program: [
    { time: "3:00 PM", event: "Wedding Ceremony" },
    { time: "5:00 PM", event: "Cocktail Hour" },
    { time: "6:00 PM", event: "Reception Entrance" },
    { time: "7:00 PM", event: "Dinner & Toasts" },
    { time: "8:00 PM", event: "Program & Speeches" },
    { time: "9:00 PM", event: "First Dance" },
    { time: "9:30 PM", event: "Cake Cutting & Celebration" },
  ],
  entourage: [
    {
      category: "Parents",
      members: [
        { name: "Mr. & Mrs. Antonio Rossi", role: "Parents of the Groom" },
        { name: "Mr. & Mrs. David Santos", role: "Parents of the Bride" },
      ],
    },
    {
      category: "Principal Sponsors",
      members: [
        { name: "Hon. Roberto Cruz", role: "Sponsor" },
        { name: "Dr. Maria Clara Reyes", role: "Sponsor" },
        { name: "Engr. Fernando Ramos", role: "Sponsor" },
        { name: "Mrs. Teresa Mendoza", role: "Sponsor" },
      ],
    },
    {
      category: "Honor Guard",
      members: [
        { name: "Sophia Santos", role: "Maid of Honor" },
        { name: "Marco Rossi", role: "Best Man" },
      ],
    },
    {
      category: "Bridesmaids & Groomsmen",
      members: [
        { name: "Isabella Diaz", role: "Bridesmaid" },
        { name: "Gabriel Torres", role: "Groomsman" },
        { name: "Clara Garcia", role: "Bridesmaid" },
        { name: "Lucas Vance", role: "Groomsman" },
      ],
    },
  ],
  dressCode: {
    title: "Formal Attire",
    description: "We invite our guests to dress in elegant formal attire that complements our dusty blue wedding palette.",
    swatches: [
      { name: "Dusty Blue", hex: "#8FA9B8" },
      { name: "Soft Blue", hex: "#D9E3E8" },
      { name: "Ivory", hex: "#FAF9F6" },
      { name: "Beige", hex: "#EDE7DF" },
      { name: "Navy", hex: "#1C2D37" },
    ],
  },
  faqs: [
    { question: "What should I wear?", answer: "Formal attire in accordance with our color palette is encouraged." },
    { question: "Can I bring a plus-one?", answer: "Please refer to your individual invitation or RSVP form dropdown allocation." },
    { question: "Are children welcome?", answer: "We love your little ones, but this will be an adults-only celebration." },
    { question: "Is parking available?", answer: "Yes, complimentary valet parking is provided at both venues." },
    { question: "When is the RSVP deadline?", answer: "Please RSVP on or before November 15, 2026." },
  ],
  registry: {
    note: "Your presence at our wedding is the greatest gift of all. For those who wish to bless us further, cash gifts or contributions to our future home are gratefully accepted.",
    accounts: [
      { type: "Bank Transfer (BDO)", details: "Account: 0012-3456-7890 | Carlo Rossi" },
      { type: "GCash / Maya", details: "0917-123-4567 | Roseth S." },
    ],
  },
};