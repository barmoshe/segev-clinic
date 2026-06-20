// All visitor-facing copy in one place, in both languages. English is the
// canonical/default language; Hebrew is the toggle. Placeholder content only:
// describes services and logistics, makes NO medical or outcome claims.
//
// Persona strings (name, role, address) come from clinic.ts so a real clinic is
// a one-file swap. Everything else lives in the en/he dicts below.

import { clinic } from "./clinic";
import type { IconName } from "@/app/components/icons";

export const LANGS = ["en", "he"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";
export const DIR: Record<Lang, "ltr" | "rtl"> = { en: "ltr", he: "rtl" };

export type Service = { title: string; body: string; icon: IconName };
export type Step = { n: string; title: string; body: string };
export type HoursRow = { day: string; time: string };
export type FaqItem = { q: string; a: string };

export type Dict = {
  meta: { title: string; description: string };
  langToggle: {
    groupLabel: string;
    enLabel: string;
    heLabel: string;
    switchedTo: string;
  };
  header: { whatsapp: string };
  hero: {
    eyebrow: string;
    promise: string;
    trust: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: { title: string; paragraphs: string[] };
  services: { title: string; lead: string; items: Service[] };
  steps: { title: string; items: Step[] };
  hoursLocation: {
    title: string;
    caption: string;
    colDay: string;
    colTime: string;
    rows: HoursRow[];
    contactTitle: string;
    mapLink: string;
    callLabel: string;
    whatsappLink: string;
  };
  faq: { title: string; items: FaqItem[] };
  contact: {
    title: string;
    lead: string;
    name: string;
    phone: string;
    reason: string;
    submit: string;
    resultLead: string;
    sendWhatsApp: string;
    sendEmail: string;
    fieldName: string;
    fieldPhone: string;
    fieldReason: string;
    notProvided: string;
  };
  whatsapp: { fabLabel: string; defaultText: string; mailSubject: string };
  footer: { disclaimer: string };
  skipLink: string;
};

const en: Dict = {
  meta: {
    title: `${clinic.doctorName.en} | ${clinic.role.en}`,
    description:
      "A private family doctor in Tel Aviv: house calls, medical consultations, chronic-care follow-up, prescriptions and referrals. Reach out on WhatsApp, no waiting on the line.",
  },
  langToggle: {
    groupLabel: "Language",
    enLabel: "English",
    heLabel: "עברית",
    switchedTo: "Language set to English",
  },
  header: { whatsapp: "WhatsApp" },
  hero: {
    eyebrow: clinic.role.en,
    promise:
      "Personal medicine at your pace: time to listen, explain and follow up, without waiting on the line.",
    trust: ["House calls", "Private and flexible", "Direct WhatsApp line"],
    ctaPrimary: "Message on WhatsApp",
    ctaSecondary: "See services",
  },
  about: {
    title: "A little about me",
    paragraphs: [
      `I'm ${clinic.doctorName.en}, a family physician. After years in busy clinics I chose a different path: a small private practice where every visit has enough time. I believe good medicine starts with listening, and that understanding the person in front of you makes it easier to support them over time.`,
      "My background includes specialty training in family medicine and experience caring for patients of every age, from young families to adults managing ongoing conditions. My approach is calm and practical: explain things plainly, avoid unnecessary tests, and stay reachable when it matters.",
    ],
  },
  services: {
    title: "What a private visit covers",
    lead: "Family-medicine services as needed, arranged personally. The essentials:",
    items: [
      {
        icon: "house",
        title: "House call",
        body: "An exam and consultation at home, at a scheduled time, when leaving the house isn't convenient.",
      },
      {
        icon: "consult",
        title: "Medical consultation",
        body: "A calm meeting to talk through a concern, see the full picture, and plan next steps together.",
      },
      {
        icon: "pulse",
        title: "Chronic-care follow-up",
        body: "Ongoing support for lasting conditions, with time to listen and adjust the plan as needed.",
      },
      {
        icon: "prescription",
        title: "Renewing prescriptions",
        body: "Renewing regular prescriptions by arrangement, without coming in every time.",
      },
      {
        icon: "referral",
        title: "Referrals and tests",
        body: "Referrals for tests, advisers and specialists, with a clear explanation of what to do and how.",
      },
      {
        icon: "spark",
        title: "Personal availability",
        body: "A direct line on WhatsApp or email for short questions between visits.",
      },
    ],
  },
  steps: {
    title: "How it works",
    items: [
      {
        n: "1",
        title: "Leave your details",
        body: "Fill in the form or send a WhatsApp message: name, phone and reason for reaching out.",
      },
      {
        n: "2",
        title: "I get back to you",
        body: "I reach out to arrange a time that suits you, including a house call when needed.",
      },
      {
        n: "3",
        title: "The visit itself",
        body: "An unhurried meeting: listening, examination and a clear explanation of next steps.",
      },
      {
        n: "4",
        title: "Ongoing support",
        body: "Prescriptions, referrals and follow-up stay within easy reach on a direct line.",
      },
    ],
  },
  hoursLocation: {
    title: "Hours and address",
    caption: "Clinic opening hours",
    colDay: "Day",
    colTime: "Hours",
    rows: [
      { day: "Sunday - Thursday", time: "08:00 - 19:00" },
      { day: "Friday", time: "08:00 - 13:00" },
      { day: "Saturday", time: "Closed" },
    ],
    contactTitle: "Address and contact",
    mapLink: "Open in OpenStreetMap",
    callLabel: "Call",
    whatsappLink: "Message on WhatsApp",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Private clinic or HMO?",
        a: "This is a private clinic. You can stay insured with your HMO at the same time. A private visit is for personal time and more flexible availability.",
      },
      {
        q: "What should I bring to a visit?",
        a: "An ID, a list of regular medications, and recent test results if you have them. Any relevant document helps build a full picture.",
      },
      {
        q: "Are house calls available?",
        a: "Yes. A house call is arranged in advance based on area and availability. Happy to coordinate by phone or WhatsApp.",
      },
      {
        q: "How much does it cost?",
        a: "Pricing is discussed on a call. Happy to explain the cost for your type of visit before booking.",
      },
    ],
  },
  contact: {
    title: "Book a visit / leave your details",
    lead: "Fill in your details and the button opens a ready message on WhatsApp or email. Nothing is stored anywhere: it's sent straight from your device.",
    name: "Full name",
    phone: "Phone",
    reason: "Reason for reaching out",
    submit: "Prepare message",
    resultLead: "Your message is ready. Choose how to send it:",
    sendWhatsApp: "Send on WhatsApp",
    sendEmail: "or send by email",
    fieldName: "Name",
    fieldPhone: "Phone",
    fieldReason: "Reason",
    notProvided: "not provided",
  },
  whatsapp: {
    fabLabel: "Chat on WhatsApp",
    defaultText: `Hi, I'd like to book a visit / get details with ${clinic.doctorName.en}.`,
    mailSubject: `Appointment request: ${clinic.doctorName.en}`,
  },
  footer: {
    disclaimer: `${clinic.doctorName.en} is a sample persona. This is a demo site (lab), not an active clinic. The details and address are placeholders only.`,
  },
  skipLink: "Skip to content",
};

const he: Dict = {
  meta: {
    title: `${clinic.doctorName.he} | ${clinic.role.he}`,
    description:
      "מרפאה פרטית של רופא משפחה: ביקורי בית, ייעוץ רפואי, מעקב מחלות כרוניות, מרשמים והפניות. קל ליצור קשר בוואטסאפ, בלי להמתין על הקו.",
  },
  langToggle: {
    groupLabel: "שפה",
    enLabel: "English",
    heLabel: "עברית",
    switchedTo: "השפה הוגדרה לעברית",
  },
  header: { whatsapp: "וואטסאפ" },
  hero: {
    eyebrow: clinic.role.he,
    promise:
      "רפואה אישית, בקצב שלכם: זמן להקשיב, להסביר וללוות, בלי להמתין על הקו.",
    trust: ["ביקורי בית", "פרטי וגמיש", "קו וואטסאפ ישיר"],
    ctaPrimary: "כתבו לי בוואטסאפ",
    ctaSecondary: "מה כולל ביקור",
  },
  about: {
    title: "קצת עליי",
    paragraphs: [
      `שמי ${clinic.doctorName.he}, רופא משפחה. אחרי שנים של עבודה במרפאות עמוסות בחרתי בדרך אחרת: מרפאה פרטית קטנה שבה לכל פגישה יש מספיק זמן. אני מאמין שרפואה טובה מתחילה בהקשבה, ושכשמבינים את האדם שמולך קל יותר ללוות אותו לאורך זמן.`,
      "ההכשרה שלי כוללת התמחות ברפואת משפחה וניסיון בליווי מטופלים בכל הגילאים, ממשפחות צעירות ועד מבוגרים עם מצבים נמשכים. הגישה שלי שקטה ומעשית: להסביר בגובה העיניים, להימנע מבדיקות מיותרות, ולהיות זמין כשצריך.",
    ],
  },
  services: {
    title: "מה כולל ביקור פרטי",
    lead: "שירותי רפואת משפחה לפי הצורך, בתיאום אישי. להלן עיקרי השירותים:",
    items: [
      {
        icon: "house",
        title: "ביקור בית",
        body: "בדיקה וייעוץ בבית, במועד מתואם, בלי לצאת מהבית כשלא מתאים או לא נוח.",
      },
      {
        icon: "consult",
        title: "ייעוץ רפואי",
        body: "פגישה רגועה לבירור תלונה, הבנת התמונה הכללית ותכנון ההמשך יחד.",
      },
      {
        icon: "pulse",
        title: "מעקב מחלות כרוניות",
        body: "ליווי שוטף למצבים נמשכים, עם זמן להקשיב ולעדכן את ההתנהלות לפי הצורך.",
      },
      {
        icon: "prescription",
        title: "מרשמים מתחדשים",
        body: "חידוש מרשמים קבועים בתיאום, בלי הצורך להגיע פיזית בכל פעם.",
      },
      {
        icon: "referral",
        title: "הפניות ובדיקות",
        body: "הפניות לבדיקות, יועצים ומומחים, עם הסבר על מה שצריך לעשות וכיצד.",
      },
      {
        icon: "spark",
        title: "זמינות אישית",
        body: "ערוץ קשר ישיר בוואטסאפ או באימייל לשאלות קצרות בין הביקורים.",
      },
    ],
  },
  steps: {
    title: "איך זה עובד",
    items: [
      {
        n: "1",
        title: "משאירים פרטים",
        body: "ממלאים את הטופס בתחתית העמוד או שולחים הודעה בוואטסאפ. שם, טלפון וסיבת הפנייה.",
      },
      {
        n: "2",
        title: "חוזרים אליכם",
        body: "יוצרים קשר לתיאום מועד שמתאים לכם, כולל ביקור בית כשצריך.",
      },
      {
        n: "3",
        title: "הביקור עצמו",
        body: "פגישה ללא לחץ זמן: הקשבה, בדיקה והסבר ברור על ההמשך.",
      },
      {
        n: "4",
        title: "המשך הליווי",
        body: "מרשמים, הפניות ומעקב נשארים נגישים בערוץ קשר ישיר.",
      },
    ],
  },
  hoursLocation: {
    title: "שעות וכתובת",
    caption: "שעות הפעילות של המרפאה",
    colDay: "יום",
    colTime: "שעות",
    rows: [
      { day: "ראשון - חמישי", time: "08:00 - 19:00" },
      { day: "שישי", time: "08:00 - 13:00" },
      { day: "שבת", time: "סגור" },
    ],
    contactTitle: "כתובת ויצירת קשר",
    mapLink: "פתיחת מפה במפת רחובות",
    callLabel: "חיוג",
    whatsappLink: "שליחת הודעה בוואטסאפ",
  },
  faq: {
    title: "שאלות נפוצות",
    items: [
      {
        q: "מרפאה פרטית או קופת חולים?",
        a: "זו מרפאה פרטית. ניתן להמשיך להיות מבוטחים בקופת חולים במקביל. הביקור הפרטי נועד לזמן אישי וזמינות גמישה יותר.",
      },
      {
        q: "מה כדאי להביא לביקור?",
        a: "תעודת זהות, רשימת תרופות קבועות, ותוצאות בדיקות אחרונות אם יש. כל מסמך רלוונטי עוזר לקבל תמונה מלאה.",
      },
      {
        q: "האם יש ביקורי בית?",
        a: "כן. ביקור בית מתואם מראש בהתאם לאזור ולזמינות. נשמח לתאם בטלפון או בוואטסאפ.",
      },
      {
        q: "כמה זה עולה?",
        a: "מחירון בשיחה. נשמח להסביר את העלות בהתאם לסוג הפנייה לפני שקובעים מועד.",
      },
    ],
  },
  contact: {
    title: "קביעת תור / השארת פרטים",
    lead: "ממלאים את הפרטים, והכפתור פותח הודעה מוכנה בוואטסאפ או באימייל. הפרטים לא נשמרים בשום מקום: הם נשלחים ישירות מהמכשיר שלכם.",
    name: "שם מלא",
    phone: "טלפון",
    reason: "סיבת הפנייה",
    submit: "הכנת הודעה",
    resultLead: "ההודעה מוכנה. בחרו איך לשלוח אותה:",
    sendWhatsApp: "שליחה בוואטסאפ",
    sendEmail: "או שליחה באימייל",
    fieldName: "שם",
    fieldPhone: "טלפון",
    fieldReason: "סיבת הפנייה",
    notProvided: "לא צוין",
  },
  whatsapp: {
    fabLabel: "כתבו לי בוואטסאפ",
    defaultText: `שלום, אשמח לקבוע תור / לקבל פרטים אצל ${clinic.doctorName.he}.`,
    mailSubject: `פנייה לקביעת תור: ${clinic.doctorName.he}`,
  },
  footer: {
    disclaimer: `${clinic.doctorName.he} היא דמות לדוגמה. זהו אתר הדגמה (lab) ואינו מרפאה פעילה. הפרטים והכתובת הם דמה בלבד.`,
  },
  skipLink: "דילוג לתוכן",
};

const DICTS: Record<Lang, Dict> = { en, he };

export function getDict(lang: Lang): Dict {
  return DICTS[lang] ?? en;
}
