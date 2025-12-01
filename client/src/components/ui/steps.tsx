import { useTranslation } from "react-i18next";

function Steps() {
  const { t } = useTranslation();

  return (
    <div>
      <ul className="steps">
        <li className="step step-primary">{t("quote.steps.step1")}</li>
        <li className="step step-primary">{t("quote.steps.step2")}</li>
        <li className="step ">{t("quote.steps.step3")}</li>
      </ul>
    </div>
  );
}

export default Steps;
