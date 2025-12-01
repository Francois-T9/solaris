import { useFlagsStore } from "@/store/flags.store";
import { useState, type ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export const LanguagePicker = () => {
  const { urlArray } = useFlagsStore();
  const [selected, setSelected] = useState<number>(0);
  const { i18n } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = urlArray.findIndex(
      (country) => country.code === e.target.value
    );
    setSelected(index);
    i18n.changeLanguage(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="flex items-center gap-2">
      <img src={urlArray[selected].flagUrl} alt="" className="w-10" />
      <select
        value={urlArray[selected].code}
        onChange={handleChange}
        className="select select-ghost"
      >
        {urlArray.map((country) => (
          <option key={country.code} value={country.code}>
            {country.code}
          </option>
        ))}
      </select>
    </div>
  );
};
