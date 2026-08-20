export interface Milestone {
  year: string;
  title: string;
  description: string;
  images?: string[];
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
    embedUrl: string;
  };
  reception: {
    time: string;
    venue: string;
    address: string;
    googleMapsUrl: string;
    embedUrl: string;
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
  music: {
    src: string;
    label?: string;
  };
  travel: {
    title: string;
    description: string;
    hotels: { name: string; distance: string; contact: string; mapsUrl: string }[];
    transportation: { icon: string; title: string; details: string }[];
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
    time: "2:00 PM",
    venue: "Lokal ng Iglesia Ni Cristo [Bulacan East] - San Isidro",
    address: "Lokal ng Iglesia Ni Cristo [Bulacan East] - San Isidro, Brgy. San Isidro, San Jose del Monte City, Bulacan",
    googleMapsUrl: "https://www.google.com/maps/place/Iglesia+Ni+Cristo+%5BBulacan+East%5D+-+San+Isidro/@14.814246,121.1459466,17z/data=!3m1!4b1!4m6!3m5!1s0x3397a41550b7ae87:0x6f6b18212b43f035!8m2!3d14.8142408!4d121.1485215!16s%2Fg%2F1hc4h55gs?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D",
    embedUrl: "https://www.google.com/maps?q=14.814246,121.1459466&z=17&output=embed",
  },
  reception: {
    time: "5:00 PM",
    venue: "Villa Leonora Resort & Events Venue",
    address: "Villa Leonora Resort and Events Venue, Igay Rd, Sto. Cristo, City of San Jose del Monte, Bulacan",
    googleMapsUrl: "https://www.google.com/maps/place/Villa+Leonora+Resort/@14.8105349,121.0843705,17z/data=!3m1!4b1!4m6!3m5!1s0x3397a585b0b969d5:0x9ff8828ded0445a!8m2!3d14.8105297!4d121.0869454!16s%2Fg%2F11hczzwk16?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D",
    embedUrl: "https://www.google.com/maps?q=14.8105349,121.0843705&z=17&output=embed",
  },
  story: [
    {
      year: "2019",
      title: "We First Met",
      description: "A chance encounter over coffee in downtown Manila.",
      images: [
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      year: "2021",
      title: "Our First Adventure",
      description: "Exploring the coastal trails of Batanes together.",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      year: "2024",
      title: "The Proposal",
      description: "A quiet sunset proposal overlooking the hills.",
      images: [
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      year: "2027",
      title: "Our Forever Begins",
      description: "Saying 'I do' surrounded by the ones we love most.",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
      ],
    },
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
        { name: "Mr. Efren Molina", role: "Father of the Groom" },
        { name: "Mrs. Cecilia Molina", role: "Mother of the Groom" },
        { name: "Mr. Rodel Felomino", role: "Father of the Bride" },
        { name: "Mrs. Erna Felomino", role: "Mother of the Bride" },
      ],
    },
    {
      category: "Principal Sponsors",
      members: [
        { name: "Ms. Maribel Comia", role: "Sponsor" },
        { name: "Mr. Guillermo Walinsundin", role: "Sponsor" },
        { name: "Ms. Ailyn Pacio", role: "Sponsor" },
        { name: "Mr. Eddie Tigres", role: "Sponsor" },
        { name: "Ms. Rio Falcon", role: "Sponsor" },
        { name: "Mr. Roberto Domingo Jr.", role: "Sponsor" },
        { name: "Ms. Melanie Camporaso", role: "Sponsor" },
        { name: "Mr. Benjamin Salva Jr.", role: "Sponsor" },
        { name: "Ms. Annabel Robes", role: "Sponsor" },
        { name: "Mr. Jun Jun Avendaño", role: "Sponsor" },
        { name: "Ms. Lucila Solomon", role: "Sponsor" },
        { name: "Mr. Freddie Molina", role: "Sponsor" },
        { name: "Ms. Arlene Fajardo", role: "Sponsor" },
        { name: "Mr. Dindo Cruz", role: "Sponsor" },
        { name: "Ms. Crizelle Granados", role: "Sponsor" },
        { name: "Mr. Ray Allen Espartinez", role: "Sponsor" },
        { name: "Ms. Jenny Javier", role: "Sponsor" },
        { name: "Mr. Ronnie Tapang", role: "Sponsor" },
        { name: "Ms. Helena Rillera", role: "Sponsor" },
        { name: "Mr. Rommel Ballesteros", role: "Sponsor" },
      ],
    },
    {
      category: "Maid of Honor & Best Man",
      members: [
        { name: "Rose Anne Felomino", role: "Maid of Honor" },
        { name: "Carl John Molina", role: "Best Man" },
      ],
    },
    {
      category: "Bridesmaids & Groomsmen",
      members: [
        { name: "Ms. Mary Cris Salva", role: "Bridesmaid" },
        { name: "Mr. Paul Tan Ramirez", role: "Groomsman" },
        { name: "Ms. Ruby Ann Salva", role: "Bridesmaid" },
        { name: "Mr. Jason Bahil", role: "Groomsman" },
        { name: "Ms. Febbie Chan", role: "Bridesmaid" },
        { name: "Mr. Rodel Jr. Felomino", role: "Groomsman" },
        { name: "Ms. Cyril Santos", role: "Bridesmaid" },
        { name: "Mr. James Patrick Cariman", role: "Groomsman" },
        { name: "Ms. Hazel Villar", role: "Bridesmaid" },
        { name: "Mr. Christian Satorre", role: "Groomsman" },
        { name: "Ms. Jeraldine Castro", role: "Bridesmaid" },
        { name: "Mr. Carl Felix Molina", role: "Groomsman" },
        { name: "Ms. Catherine Manalang", role: "Bridesmaid" },
        { name: "Mr. Joshua Molina", role: "Groomsman" },
        { name: "Ms. Ruth Aporto", role: "Bridesmaid" },
        { name: "Mr. Christian Ilagan", role: "Groomsman" },
      ],
    },
  ],
  dressCode: {
    title: "Formal Attire",
    description: "We invite our guests to dress in elegant formal attire that complements our dusty blue wedding palette.",
    swatches: [
      { name: "Dusty Blue", hex: "#8FA9B8" },
      { name: "Baby Blue", hex: "#89CFF0" },
      { name: "Light Gray", hex: "#D3D3D3" },
      { name: "Gray", hex: "#808080" },
      { name: "Navy", hex: "#1C2D37" },
    ],
  },
  faqs: [
    { question: "What should I wear?", answer: "Formal attire in accordance with our color palette is encouraged." },
    { question: "Can I bring a plus-one?", answer: "Due to limited slots, plus-ones are restricted to those explicitly named on your invitation or RSVP form." },
    { question: "Are children welcome?", answer: "We love your little ones! Children and families are warmly welcomed to join in our celebration.." },
    { question: "Is parking available?", answer: "Yes, parking is provided at both venues." },
    { question: "When is the RSVP deadline?", answer: "Please RSVP on or before November 15, 2026." },
  ],
  registry: {
    note: "Your presence at our wedding is the greatest gift of all. For those who wish to bless us further, cash gifts or contributions to our future home are gratefully accepted.",
    accounts: [
      { type: "Bank Transfer (Landbank)", details: "Account: 1543-1545-28572 | Carlo Molina" },
      { type: "GCash / Maya", details: "0994-763-8964 | Roseth Felomino" },
    ],
  },
  music: {
    src: "/music/bgm.mp3",
    label: "Play our song",
  },
  travel: {
    title: "Getting There",
    description: "We've prepared some helpful information for guests traveling from out of town.",
    hotels: [
      { name: "Villa Leonora Resort", distance: "Venue — On-site", contact: "Contact the couple for room rates", mapsUrl: "https://www.google.com/maps/place/Villa+Leonora+Resort/@14.8105349,121.0843705,17z" },
      { name: "The Manors at Crosswinds", distance: "8 km — ~20 min drive", contact: "Booking via Agoda or Booking.com", mapsUrl: "https://www.google.com/maps/search/The+Manors+at+Crosswinds+Tagaytay" },
      { name: "Bastion Hotel San Jose del Monte", distance: "5 km — ~12 min drive", contact: "Contact hotel directly", mapsUrl: "https://www.google.com/maps/search/Bastion+Hotel+San+Jose+del+Monte" },
    ],
    transportation: [
      { icon: "car", title: "By Car", details: "From Manila, take NLEX → San Jose del Monte exit. Both venues are ~45 min from Metro Manila via SLEX or NLEX." },
      { icon: "bus", title: "By Bus", details: "Take a Bus or UV Express from Cubao or Fairview to San Jose del Monte. Tricycles available from the terminal to the venues." },
    ],
  },
};