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
    subtitle: string;
    sponsors: {
      label: string;
      items: { role: string; attire: string }[];
    };
    guests: {
      label: string;
      primaryNote: string;
      colorNote: string;
    };
    compliance: string;
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
      year: "2010",
      title: "Carl & Seth's Journey",
      description: "Carl first transferred to Kakawate National High School, where Seth was already studying. They were supposed to be classmates in 2nd year, but since the section where Seth was enrolled was already full, Carl was placed in another section. By 3rd year high school, they crossed paths again as group members in one party list during the school election. In 4th year, they finally became classmates, sharing the same circle of friends. On October 5, 2012, their friendship blossomed into something more, and they officially became girlfriend and boyfriend. ❤️",
      images: [
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      year: "2014–2025",
      title: "College to Career Journey",
      description: "Carl went to college ahead of Seth, enrolling at Bulacan State University. A year later, Seth also joined the same university. Like many relationships, theirs faced trials and challenges, but they continued to stand strong together. Carl graduated in 2017, while Seth followed in 2018. During this period, they both made the effort to wait, travel, and see each other despite Carl already working and Seth still completing her studies. With the support of their families and friends, they managed to keep their relationship steady. As the years passed, both Carl and Seth worked hard — not only to support their families but also to pursue their shared goals in life. Their journey reflects patience, commitment, and love that grew stronger through time. ❤️",
      images: [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      year: "April 2, 2026",
      title: "The Proposal",
      description: "On an ordinary date at SM North EDSA, Seth never expected that day to be extraordinary. While they were simply enjoying ramen, hot pot, and watching movies — the usual things they loved to do together — Carl had something special planned. In that familiar place, Carl surprised Seth with a proposal to begin their lifetime together. After 13 years of being together, Carl finally placed a ring on Seth's finger, sealing their promise to a forever love. 💍❤️",
      images: [
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&q=80&w=600",
      ],
    },
    {
      year: "September 10, 2026",
      title: "Prenup Shoot",
      description: "A beautiful prenup shoot at North Polo Club, Pulilan, Bulacan — capturing the love and excitement as they count down to their wedding day.",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
      ],
    },
    // {
    //   year: "December 15, 2026",
    //   title: "Our Forever Begins",
    //   description: "The day they say 'I do' — surrounded by the love of their families and closest friends. A celebration of 14 years of love, and the beginning of a lifetime together. ❤️",
    //   images: [
    //     "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    //     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600",
    //     "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600",
    //     "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600",
    //   ],
    // },
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
      category: "Maid of Honor & Best Man",
      members: [
        { name: "Rose Anne Felomino", role: "Maid of Honor" },
        { name: "Carl John Molina", role: "Best Man" },
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
    title: "Finer Details",
    subtitle: "Dress Code",
    sponsors: {
      label: "Principal Sponsors",
      items: [
        { role: "Ninong", attire: "Barong and Black Slacks" },
        { role: "Ninang", attire: "Beige Formal Long Gown/Dress" },
        { role: "SHOES", attire: "Anything comfortable" },
      ],
    },
    guests: {
      label: "Guest",
      primaryNote: "Please come dressed on your formal/ sunday dress and smart casual attire.",
      colorNote: "We kindly encourage our guests to dress in our color palette on our special day.",
    },
    compliance: "Strict compliance on dress code is asked. NO slippers, shorts, maong other informal outfits of any kind will be allowed.",
    swatches: [
      { name: "Silver Gray", hex: "#C5C9CE" },
      { name: "Dusty Blue", hex: "#8EA7BF" },
      { name: "Sky Blue", hex: "#A5D5F5" },
      { name: "Deep Navy Blue", hex: "#3B6291" },
    ],
  },
  faqs: [
    { question: "What should I wear?", answer: "Make our wedding a fun excuse to dress up and be fab! Wear your best formal and smart casual attire that match our color theme as indicated in the Dress Code section. No wearing of white/black dress, slippers, shorts, and maong please." },
    { question: "Is parking available?", answer: "Yes, parking is provided at both venues." },
    { question: "Do we really need to RSVP?", answer: "Yes, to make sure you are included on our final guest list, please confirm your attendance on or before November 15, 2026." },
    { question: "I already answered YES to the RSVP but something came up and cannot attend anymore. What should I do?", answer: "We're sorry to hear you can no longer be part of our special day. However, please let us know ahead of time so we can offer your seat/s to another guest." },
    { question: "Can we bring our kids?", answer: "As much as we love your kids, we want to respectfully request that this wedding be an adult-only celebration. The only kids who will be attending are those who are part of the entourage. We are hoping for your kind understanding." },
    { question: "Can I bring guests/plus ones not noted on my invitation?", answer: "Please understand that as much as we want to celebrate our wedding with you all, we can't invite everyone. We opt to spend this day as a couple. We sincerely apologize but guests not in the list will not be accommodated at the reception. We hope you fully understand." },
    { question: "What time is the ceremony?", answer: "The ceremony will start at exactly 2pm. Please be there at least 15 minutes before the ceremony. We encourage you to consider the travel time and traffic going to the venue." },
    { question: "Can we take pictures and videos during the ceremony?", answer: "Our ceremony is UNPLUGGED and we plan to keep it solemn. Please put your phone down and silence it during the processional and ceremony. Please keep the aisle clear during the bridal entrance." },
    { question: "What time is the reception?", answer: "Pica Pica starts at 4pm. Appetizers and refreshments will be served. Use this time to register and mingle with other guests. A photoman is roaming around inside the venue. We have also prepared a mirror photo booth for you — please take some time to experience it, showcase your beautiful dress, and enjoy the moment." },
    { question: "Can we sit anywhere at the reception?", answer: "It took us a lot of effort and discussion to finish the seating arrangement which is planned for everyone's convenience and network preference. You'll be seated along with the family and friends." },
    { question: "When can we leave?", answer: "We aim to end the program by 7–8pm. We would like to personally thank you for joining us to celebrate — hopefully after the Same Day Edit video finishes playing." },
    { question: "How can we help the couple have the best time?", answer: "RSVP now! Wear proper attire, be on time, stay till the end. Enjoy!" },
  ],
  registry: {
    note: "Your presence at our wedding is the greatest gift of all. For those who wish to bless us further, cash gifts or contributions to our future home are gratefully accepted.",
    accounts: [
      { type: "Bank Transfer (Landbank)", details: "Account: 1543-1545-28572 | Carlo Molina" },
      { type: "GCash / Maya", details: "0994-763-8964 | Roseth Felomino" },
    ],
  },
  music: {
    src: `${import.meta.env.BASE_URL}music/bgm.mp3`,
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