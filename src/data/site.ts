// Edit contact details and page copy here.
export const site = {
  name: "Jupiter Arc",
  domain: "jupiterarc.com",
  email: "hello@jupiterarc.com", // TODO: confirm mailbox
  phone: "(000) 000-0000", // TODO: real number (ideally your own AI receptionist line)
  phoneHref: "tel:+10000000000",
  // Swap for your booking-calendar link when it's live.
  bookingUrl: "mailto:hello@jupiterarc.com?subject=Free%20demo%20request",
  region: "Based in Metro Detroit. Working with businesses nationwide.",
};

export type Niche = {
  name: string;
  icon: string;
  ticket: string;
  pain: string;
  offers: string[];
};

export const niches: Niche[] = [
  {
    name: "Roofing",
    icon: "House",
    ticket: "$8K–$25K jobs",
    pain: "When storms hit, the phones flood. The roofer who answers first gets the job.",
    offers: [
      "24/7 AI receptionist that books inspections",
      "Storm-surge lead follow-up by text and email",
      "Review requests the day the job closes",
    ],
  },
  {
    name: "HVAC",
    icon: "AirVent",
    ticket: "$8K–$15K replacements",
    pain: "No-heat calls come at 2 a.m. Voicemail sends them to your competitor.",
    offers: [
      "After-hours call answering and dispatch",
      "Maintenance-plan reminders and renewals",
      "Replacement quote follow-up sequences",
    ],
  },
  {
    name: "Basement Waterproofing & Foundation",
    icon: "Droplets",
    ticket: "$5K–$25K jobs",
    pain: "Homeowners with water in the basement call three companies at once.",
    offers: [
      "Instant callback and inspection booking",
      "Photo-upload estimate request page",
      "Nurture for leads who aren't ready yet",
    ],
  },
  {
    name: "Remodeling & Design-Build",
    icon: "PaintRoller",
    ticket: "$25K–$100K projects",
    pain: "Big projects take months to decide. Most leads go cold before they say yes.",
    offers: [
      "Lead qualification by budget and timeline",
      "Long-term follow-up with project inspiration",
      "Consultation booking and reminders",
    ],
  },
  {
    name: "Auto Repair",
    icon: "Car",
    ticket: "Repeat customers for years",
    pain: "Your techs can't stop to answer \"How much for brakes?\" all day.",
    offers: [
      "AI receptionist that quotes ranges and books drop-offs",
      "Service-due reminders that bring cars back",
      "\"Your car is ready\" texts with repair approvals",
    ],
  },
  {
    name: "Law Firms",
    icon: "Scale",
    ticket: "$3K to six-figure cases",
    pain: "Prospective clients sign with the first firm that calls them back.",
    offers: [
      "After-hours intake that captures case details",
      "Consultation scheduling and no-show reduction",
      "E-signature for engagement letters",
    ],
  },
  {
    name: "Dental Practices",
    icon: "ToothbrushSparkles",
    ticket: "$5K+ lifetime patient value",
    pain: "Missed calls are missed new patients, and the overdue-recall list keeps growing.",
    offers: [
      "New-patient call capture and booking requests",
      "Recall campaigns for overdue cleanings",
      "Review requests after every visit",
    ],
  },
  {
    name: "Real Estate",
    icon: "KeyRound",
    ticket: "$10K+ per closing",
    pain: "Online leads go to the agent who responds in the first five minutes.",
    offers: [
      "Lead response in under a minute, day or night",
      "Buyer and seller nurture for 6–18 months",
      "Past-client touchpoints that earn referrals",
    ],
  },
  {
    name: "Apartment Leasing",
    icon: "BuildingComplex",
    ticket: "$15K+ per signed lease",
    pain: "Renters search at night and on weekends, when the leasing office is closed.",
    offers: [
      "24/7 leasing assistant that books tours",
      "Tour follow-up and application reminders",
      "Renewal campaigns 90, 60 and 30 days out",
    ],
  },
];

export type Service = {
  name: string;
  icon: string;
  promise: string;
  detail: string;
};

export const services: Service[] = [
  {
    name: "AI Receptionist",
    icon: "Phone",
    promise: "Never miss a call.",
    detail:
      "A natural-sounding voice assistant answers your line 24/7, answers common questions and texts you a summary of every call.",
  },
  {
    name: "Automated Booking",
    icon: "CalendarCheck",
    promise: "Appointments book themselves.",
    detail:
      "Callers, chatters and web visitors pick a time that's open on your calendar. Confirmations and reminders go out automatically.",
  },
  {
    name: "Missed-Call Text-Back",
    icon: "MessageSquareReply",
    promise: "Turn every missed call into a conversation.",
    detail:
      "If a call slips through, the caller gets a text within seconds, before they dial the next business on the list.",
  },
  {
    name: "Instant Lead Follow-Up",
    icon: "Zap",
    promise: "Reply in seconds, not hours.",
    detail:
      "New leads from your website, ads and listings get an immediate text and email, then a follow-up plan that runs for days.",
  },
  {
    name: "AI Website Chat",
    icon: "MessagesSquare",
    promise: "Your best salesperson, on every page.",
    detail:
      "A chat assistant that knows your services answers questions, qualifies visitors and books them on the spot.",
  },
  {
    name: "Reviews on Autopilot",
    icon: "Star",
    promise: "More 5-star reviews, less asking.",
    detail:
      "Happy customers get a review request at the right moment. Unhappy ones reach you privately first.",
  },
  {
    name: "Customer Reactivation",
    icon: "RefreshCw",
    promise: "Wake up the customers you already have.",
    detail:
      "Campaigns to past customers and old leads fill open slots and bring back repeat business without new ad spend.",
  },
  {
    name: "Websites That Convert",
    icon: "Globe",
    promise: "A site built to book, not just to look good.",
    detail:
      "Fast, mobile-first websites and landing pages with booking, chat and lead capture built in from day one.",
  },
  {
    name: "One Simple Dashboard",
    icon: "LayoutDashboard",
    promise: "See every lead and what it's worth.",
    detail:
      "Calls, texts, emails and bookings in one place, with reporting that shows exactly where new business came from.",
  },
];

export const steps = [
  {
    name: "Find",
    text: "We capture every lead from your phone, website, ads and listings, and respond in seconds.",
  },
  {
    name: "Close",
    text: "AI qualifies each lead, answers questions and books the appointment on your calendar.",
  },
  {
    name: "Keep",
    text: "Reminders, reviews and reactivation turn one-time buyers into repeat customers and referrals.",
  },
];
