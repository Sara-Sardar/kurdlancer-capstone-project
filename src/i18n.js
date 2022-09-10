import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React":
        "Hire The Best Talent Freelancers In Kurdlancer In KRI,",
      "Build Your Business": "Build Your Business.",
      "Turn Your Ideas Into Reality": "Turn Your Ideas Into Reality,",
      "Take Your Carrier To The Next Level":
        "Take Your Carrier To The Next Level.",
      Freelancers: "Freelancers",
      Jobs: "Jobs",
      PostJobs: "Post Jobs",
      "For Clients, Make it real with the best":
        "For Clients, Make it real with the best",
      "Hire a pro for any skills": "Hire a pro for any skills.",
      "For Freelancers, Find Great Works with bigest companies":
        "For Freelancers, Find Great Works With Bigest Companies,",
      "Make Money.": "Make Money.",
      "Hire A Freelancer For Any": "Hire A Freelancer For Any",
      Skills: "Skills.",
      "Top Specialest": "Top Specialest ",
      "Hear from some of our": "Hear from some of our",
      clients: "clients",
    },
  },
  ku: {
    translation: {
      "Welcome to React":
        "  بەکرێگرتنی باشترین فریلانسەر لەکوردلانسەر لەکوردستان   ",
      "Build Your Business": "بزنسەکەت دروست بکە",
      "Turn Your Ideas Into Reality": "بیرۆکەکانت بگۆڕە بۆ ڕاستی",
      "Take Your Carrier To The Next Level":
        "  برەو بە کارەکەت بدە بۆ ئاستی داهاتوو",
      Freelancers: "فریلانسەرەكان",
      Jobs: "کارەکان",
      PostJobs: "بڵاوکردنەوەی کارەکان",
      "For Clients, Make it real with the best":
        "بۆ کڕیارەکان، بیکەنە ڕاستی بە باشترین ",
      "Hire a pro for any skills": " دامەزراندنی کارامە بۆ هەر توانایەک",
      "For Freelancers, Find Great Works With Bigest Companies":
        "بۆ فریلانکسەرەکان، کاری مەزن بدۆزەرەوە لەگەڵ گەورەترین کۆمپانیا",
      "Make Money.": "پارە پەیدا بکە",
      "Hire A Freelancer For Any": "بەکرێگرتنی فریلانسەر بۆ هەر ",
      Skills: "توانایەک",
      "Top Specialest": "  باشترین پسپۆڕی",
      "Hear from some of our": "گوێبگرن لە هەندێک لە  ",
      clients: " کڕیارەکان",
    },
  },
  ar: {
    translation: {
      "Welcome to React":
        " وظِّف أفضل الموهوبين المستقلين في كوردلانسر في إقليم كوردستان العراق   ",
      "Build Your Business": "بناء عملك",
      "Turn Your Ideas Into Reality": "حول أفكارك إلى واقع",
      "Take Your Carrier To The Next Level": " ارتق بعملك إلى المستوى التالي",
      Freelancers: "مُسْتَقِلُّونَ",
      Jobs: "وظائف",
      PostJobs: "نشر الوظائف",
      "For Clients, Make it real with the best":
        " للعملاء ، اجعلها حقيقية مع الأفضل ",
      "Hire a pro for any skills": "استعن بمحترف لأي مهارات",
      "For Freelancers, Find Great Works With Bigest Companies":
        "بالنسبة إلى المستقلين ، ابحث عن أعمال رائعة مع أكبر الشركات",
      "Make Money.": "جني المال",
      "Hire A Freelancer For Any": "استعن بالمُسْتَقِلُّونَ بالقطعة لأي ",
      Skills: "مهارات",
      "Top Specialest": " أفضل متخصص",
      "Hear from some of our": "اسمع من بعض",
      clients: "العملاء",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
