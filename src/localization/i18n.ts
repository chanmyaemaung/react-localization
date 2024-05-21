import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      changeLanguage: "Change Language",
      welcomeToReact: "Welcome to Chen's React and react-i18next",
    },
  },
  mm: {
    translation: {
      changeLanguage: "ဘာသာစကား ပြောင်းရန်",
      welcomeToReact:
        "ချမ်းလေးရဲ့ React Localization Project မှ ကြိုဆိုပါတယ်နော်။",
    },
  },
  th: {
    translation: {
      changeLanguage: "เปลี่ยนภาษา",
      welcomeToReact: "ยินดีต้อนรับสู่ React ของ Chen และ react-i18next",
    },
  },
  kr: {
    translation: {
      changeLanguage: "언어 변경",
      welcomeToReact: "Chen의 React 및 React-i18next에 오신 것을 환영합니다.",
    },
  },
};

const savedLanguage = localStorage.getItem("language") || "mm";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "en",
  resources,
  lng: savedLanguage,
});

export default i18n;
