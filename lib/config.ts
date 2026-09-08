export const siteConfig = {
  name: "Nirmaan Infotech",
  tagline: "Build. Grow. Go Digital.",
  description: "Nirmaan Infotech is a premier Indian technology and digital solutions company helping businesses establish, scale, and transform their digital presence through modern web engineering, e-commerce, SEO, and bespoke software solutions.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nirmaaninfotech.com",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@nirmaaninfotech.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210",
    whatsappDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210",
    address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "Tech Hub Tower, Silicon Valley Quarter, Bengaluru, Karnataka, India",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM IST",
  },
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/nirmaan-infotech",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/nirmaan.infotech",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/nirmaaninfotech",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/nirmaaninfotech",
  },
  meta: {
    title: "Nirmaan Infotech | Website Development & Digital Solutions",
    description: "Nirmaan Infotech helps businesses build professional websites, e-commerce experiences and digital solutions designed for growth.",
    keywords: [
      "Website Development India",
      "E-commerce Development Company",
      "Website Redesign Services",
      "SEO Services India",
      "Custom Digital Solutions",
      "Nirmaan Infotech",
      "Business Website Development",
      "Website Maintenance India",
    ],
  },
};
