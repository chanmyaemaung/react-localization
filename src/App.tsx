import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import "./localization/i18n";

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || i18n.language
  );

  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
    }
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <>
      <h1>{t("changeLanguage")}</h1>

      {/* Select */}
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="mm">Myanmar</option>
        <option value="th">Thai</option>
        <option value="kr">Korean</option>
      </select>

      <div className="card">
        <p className="read-the-docs">{t("welcomeToReact")}</p>
      </div>
    </>
  );
}

export default App;
