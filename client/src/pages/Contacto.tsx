import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import z from "zod";
import ContactInformation from "../components/contact-information";
import { useUserStore } from "../store/user.store";
import type { ContactData } from "../types/types";
function Contacto() {
  const { t } = useTranslation();

  const schema = z.object({
    name: z
      .string()
      .nonempty(t("contact.form.nameErrorOne"))
      .min(3, t("contact.form.nameErrorTwo")),
    surname: z
      .string()
      .nonempty(t("contact.form.surnameErrorOne"))
      .min(3, t("contact.form.surnameErrorTwo")),
    email: z
      .string()
      .nonempty(t("contact.form.emailErrorOne"))
      .email(t("contact.form.emailErrorTwo")),
    requestType: z.string().nonempty(t("contact.form.requestTypeError")),
    comment: z
      .string()
      .nonempty(t("contact.form.questionError"))
      .min(10, t("contact.form.questionErrorMin")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(schema),
  });
  const {
    sendContact,
    contactRequestError,
    contactRequestSuccess,
    resetContactState,
  } = useUserStore();
  useEffect(() => {
    resetContactState();
  }, [resetContactState]);

  const onSubmit = async (data: ContactData) => {
    console.log("Submitting contact form with data:", data);
    await sendContact(data);
  };
  return (
    <div className="flex flex-col  gap-4 items-center ">
      <h1 className="text-2xl font-bold underline">{t("contact.title")}</h1>
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <form
          method="POST"
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 text-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend className="fieldset-legend text-2xl">
            {t("contact.form.legend")}
          </legend>
          <label className="label">{t("contact.form.name")}</label>
          <input
            {...register("name")}
            name="name"
            type="text"
            className="input"
            placeholder={t("contact.form.namePlaceholder")}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <label className="label">{t("contact.form.surname")}</label>
          <input
            {...register("surname")}
            name="surname"
            type="text"
            className="input"
            placeholder={t("contact.form.surnamePlaceholder")}
          />
          {errors.surname && (
            <p className="text-red-500">{errors.surname.message}</p>
          )}
          <label className="label">{t("contact.form.email")}</label>
          <input
            {...register("email")}
            name="email"
            type="email"
            className="input"
            placeholder={t("contact.form.emailPlaceholder")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label className="label">{t("contact.form.requestType")}</label>
          <select
            {...register("requestType")}
            name="requestType"
            defaultValue=""
            className="select"
          >
            <option disabled value="">
              {t("contact.form.requestTypePlaceholder")}
            </option>
            <option>{t("contact.form.requestOptions.information")}</option>
            <option>{t("contact.form.requestOptions.shipping")}</option>
            <option>{t("contact.form.requestOptions.maintenance")}</option>
          </select>
          {errors.requestType && (
            <p className="text-red-500">{errors.requestType.message}</p>
          )}
          <label className="label">{t("contact.form.question")}</label>
          <textarea
            {...register("comment")}
            name="comment"
            className="textarea"
            placeholder={t("contact.form.questionPlaceholder")}
          ></textarea>
          {errors.comment && (
            <p className="text-red-500">{errors.comment.message}</p>
          )}
          <button type="submit" className="btn btn-neutral mt-4">
            {isSubmitting
              ? t("contact.form.submit") + "..."
              : t("contact.form.submit")}
          </button>
          {contactRequestSuccess.length > 0 ? (
            <p className="text-green-500 mt-2">
              {t("quote.panelsForm.successMessage")}
            </p>
          ) : null}
          {contactRequestError.length > 0 ? (
            <p className="text-red-500 mt-2">{contactRequestError}</p>
          ) : null}
        </form>
        <ContactInformation />
      </div>
    </div>
  );
}

export default Contacto;
