import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto w-full items-center flex flex-col gap-4">
      <h1 className="text-2xl font-bold underline">{t("faq.title")}</h1>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          {t("faq.questions.q1.question")}
        </div>
        <div className="collapse-content text-sm">
          {t("faq.questions.q1.answer")}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          {t("faq.questions.q2.question")}
        </div>
        <div className="collapse-content text-sm">
          {t("faq.questions.q2.answer")}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          {t("faq.questions.q3.question")}
        </div>
        <div className="collapse-content text-sm">
          {t("faq.questions.q3.answer")}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          {t("faq.questions.q4.question")}
        </div>
        <div className="collapse-content text-sm">
          {t("faq.questions.q4.answer")}
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          {t("faq.questions.q5.question")}
        </div>
        <div className="collapse-content text-sm">
          {t("faq.questions.q5.answer")}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
