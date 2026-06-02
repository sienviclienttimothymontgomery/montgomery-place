export type EducationFaq = {
  question: string;
  answer: string;
};

export type EducationArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    list?: string[];
  }>;
  faqs: EducationFaq[];
};

export const educationArticles: EducationArticle[] = [
  {
    slug: "how-to-keep-oxygen-tubing-from-kinking",
    title: "How to Help Keep Oxygen Tubing From Kinking at Home",
    description:
      "Practical steps for reducing oxygen tubing kinks at home, improving comfort, and making everyday movement easier for oxygen users and caregivers.",
    excerpt:
      "Learn practical ways to reduce kinks, snags, and daily frustration with home oxygen therapy tubing.",
    category: "Home Oxygen Basics",
    readTime: "5 min read",
    publishedAt: "2026-06-03",
    updatedAt: "2026-06-03",
    keywords: [
      "how to keep oxygen tubing from kinking",
      "kink-resistant oxygen tubing",
      "oxygen tubing for home use",
      "home oxygen therapy tubing",
    ],
    sections: [
      {
        heading: "Why oxygen tubing kinks so often",
        paragraphs: [
          "Oxygen tubing can bend sharply around furniture, catch under chair legs, twist during sleep, or gather loops when someone moves from room to room. Those everyday conditions create friction, clutter, and repeated interruptions.",
          "For many people, the problem is not one dramatic failure. It is the constant need to stop, reposition tubing, and manage slack throughout the day.",
        ],
      },
      {
        heading: "Simple ways to reduce kinking at home",
        paragraphs: [
          "Start by looking at the path the tubing follows most often. A straighter path with fewer tight turns usually makes tubing easier to manage.",
        ],
        list: [
          "Keep the concentrator or oxygen source in a position that avoids sharp bends right at the connection point.",
          "Route tubing along open walking paths instead of under frequently moved furniture.",
          "Choose a tubing length that supports daily movement without leaving excessive slack on the floor.",
          "Check for repeated twists near the cannula and connection points during the day.",
          "Replace tubing according to provider guidance and product labeling if it becomes worn, stiff, or difficult to manage.",
        ],
      },
      {
        heading: "What caregivers can watch for",
        paragraphs: [
          "Caregivers often notice patterns the oxygen user may not. Pay attention to places where tubing drags, catches, or repeatedly doubles back on itself.",
          "If tubing issues are happening in the bedroom, near a recliner, or along a favorite walking route, that is usually the best place to make a small setup change first.",
        ],
      },
      {
        heading: "When product design can help",
        paragraphs: [
          "Some respiratory comfort products are designed to help reduce daily friction by supporting smoother movement and better tubing management. Montgomery Place developed OxiSureTech Premium Tubing around those practical home-use concerns, including kink resistance, lighter feel, and tangle-conscious design.",
          "Product information should always be paired with provider guidance. The right setup depends on the user, equipment, and home environment.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can any oxygen tubing be considered kink-proof?",
        answer:
          "No. It is more accurate to describe tubing as kink-resistant rather than kink-proof. Setup, routing, wear, and daily movement still matter.",
      },
      {
        question: "Does a longer tube always make movement easier?",
        answer:
          "Not always. Extra length can help reach more rooms, but too much slack can add tangles and trip risk. Choose length based on your space and provider guidance.",
      },
      {
        question: "Should I change my oxygen setup without asking my provider?",
        answer:
          "Use oxygen therapy equipment according to your healthcare provider's instructions and applicable product labeling.",
      },
    ],
  },
  {
    slug: "oxygen-tubing-safety-at-home",
    title: "Oxygen Tubing Safety at Home: Reducing Trips, Tangles, and Daily Friction",
    description:
      "Guidance for safer home oxygen tubing routines, including trip-hazard awareness, tubing placement, and caregiver-friendly setup tips.",
    excerpt:
      "A practical guide to reducing trip hazards, tangles, and everyday tubing friction at home.",
    category: "Safety",
    readTime: "6 min read",
    publishedAt: "2026-06-03",
    updatedAt: "2026-06-03",
    keywords: [
      "oxygen tubing safety at home",
      "oxygen tubing trip hazard",
      "oxygen therapy home safety",
      "how to prevent oxygen tubing from tangling",
    ],
    sections: [
      {
        heading: "Focus on the walking path first",
        paragraphs: [
          "The safest oxygen tubing setup is usually the one that creates the least confusion underfoot. Start by reviewing the paths used most often during the day and at night.",
        ],
        list: [
          "Keep high-traffic walking paths as clear and direct as possible.",
          "Notice where tubing crosses hallways, recliner areas, bedside routes, or bathroom entrances.",
          "Reduce extra loops on the floor when possible.",
          "Recheck the setup after furniture changes or room rearrangements.",
        ],
      },
      {
        heading: "Daily habits that can lower friction",
        paragraphs: [
          "Safer tubing management is often about consistency. Small routines can make the setup easier to live with and easier to monitor.",
        ],
        list: [
          "Pause briefly before standing up to make sure the tubing is moving with you.",
          "Keep the tubing visible instead of hidden under rugs or cushions.",
          "Look for wear, stiffness, or repeated snag points as part of regular equipment checks.",
          "Ask for professional guidance if the current setup keeps creating safety concerns.",
        ],
      },
      {
        heading: "How product selection affects the experience",
        paragraphs: [
          "Respiratory comfort products that are lightweight and designed to help reduce kinking or tangling may make the daily routine easier to manage. They do not replace safe setup habits, but they can support them.",
          "If you are reviewing options for oxygen tubing for oxygen concentrators or other standard home setups, focus on practical fit, intended use, and clear product information.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can oxygen tubing create a trip hazard at home?",
        answer:
          "Yes. Tubing on the floor can contribute to trips or snags, especially in high-traffic areas or during nighttime movement.",
      },
      {
        question: "Should tubing be hidden under rugs?",
        answer:
          "That is generally not ideal because it can make the tubing harder to inspect and easier to forget during movement.",
      },
      {
        question: "Where can I ask product-related questions?",
        answer:
          "You can review the OxiSureTech product page for general information or contact Montgomery Place for product questions.",
      },
    ],
  },
  {
    slug: "what-is-6-channel-oxygen-tubing",
    title: "What Is 6-Channel Oxygen Tubing?",
    description:
      "An introduction to 6-channel oxygen tubing, what the design aims to support, and how to evaluate tubing options for home oxygen use.",
    excerpt:
      "A plain-language introduction to 6-channel oxygen tubing and why that design may matter for home use.",
    category: "Product Education",
    readTime: "4 min read",
    publishedAt: "2026-06-03",
    updatedAt: "2026-06-03",
    keywords: [
      "what is 6-channel oxygen tubing",
      "6-channel oxygen tubing",
      "non-kinking oxygen tubing",
      "tangle-resistant oxygen tubing",
    ],
    sections: [
      {
        heading: "A design built around daily use",
        paragraphs: [
          "6-channel oxygen tubing refers to tubing designed with multiple channels to support flexibility and everyday handling. The goal is not hype. The goal is a tubing experience that feels easier to manage around the home.",
          "For people living with oxygen therapy, that can mean fewer frustrating bends, less drag, and a more comfortable routine.",
        ],
      },
      {
        heading: "What to look for in product information",
        paragraphs: [
          "When comparing tubing options, focus on practical questions instead of broad claims.",
        ],
        list: [
          "Is the tubing described as kink-resistant rather than making unrealistic guarantees?",
          "Is it intended for home oxygen therapy use?",
          "Does the product information explain compatibility in a careful, factual way?",
          "Are material details such as latex-free status clearly stated?",
          "Does the company provide clear next steps for patients, caregivers, professionals, or distributors?",
        ],
      },
      {
        heading: "How OxiSureTech Premium Tubing fits in",
        paragraphs: [
          "OxiSureTech Premium Tubing is Montgomery Place's premium 6-channel oxygen tubing product. It is positioned around practical home-use concerns such as kink resistance, comfort, mobility, and easier line management.",
          "As with any oxygen therapy equipment, product selection and use should follow provider guidance and product labeling.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does 6-channel mean the tubing is guaranteed not to kink?",
        answer:
          "No. The design may help reduce kinking, but it should still be described conservatively as kink-resistant.",
      },
      {
        question: "Is 6-channel tubing only for one type of oxygen equipment?",
        answer:
          "Product compatibility depends on the specific tubing and setup. Check the product information and applicable labeling.",
      },
      {
        question: "Where can professionals or partners request information?",
        answer:
          "Montgomery Place provides a segmented contact path for healthcare professionals, DME teams, distributors, and partners.",
      },
    ],
  },
];

export function getEducationArticle(slug: string) {
  return educationArticles.find((article) => article.slug === slug);
}
