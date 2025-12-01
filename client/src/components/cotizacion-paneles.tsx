import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useUserStore } from "../store/user.store";
import type { EnergyFormFields } from "../types/types";

function CotizacionPaneles() {
  const { t } = useTranslation();
  const {
    sendBill,
    billingRequestError,
    resetBillingState,
    billingRequestSuccess,
  } = useUserStore();

  const schema = z.object({
    name: z
      .string()
      .nonempty(t("quote.panelsForm.nameErrorOne"))
      .min(3, t("quote.panelsForm.nameErrorTwo")),

    surname: z
      .string()
      .nonempty(t("quote.panelsForm.surnameErrorOne"))
      .min(3, t("quote.panelsForm.surnameErrorTwo")),

    email: z
      .string()
      .nonempty(t("quote.panelsForm.emailErrorOne"))
      .email(t("quote.panelsForm.emailErrorTwo")),

    paquete: z.string().nonempty(t("quote.panelsForm.packageError")),

    file: z
      .instanceof(FileList)
      .refine((files) => files?.length > 0, {
        message: t("quote.panelsForm.billErrorOne"),
      })
      .refine(
        (file) => ["application/pdf"].includes(file?.item(0)?.type ?? ""),
        {
          message: t("quote.panelsForm.billErrorTwo"),
        }
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnergyFormFields>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    resetBillingState();
  }, [resetBillingState]);

  const onSubmit: SubmitHandler<EnergyFormFields> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("paquete", data.paquete);

    if (data.file) {
      formData.append("file", data.file[0]); // RHF stores files in FileList
    }

    await sendBill(formData);
  };

  return (
    <form
      method="POST"
      encType="multipart/form-data"
      className="bg-base-200 border-base-300 rounded-box border p-4 text-md flex flex-col gap-2 w-fit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <legend className="fieldset-legend">
        {t("quote.panelsForm.legend")}
      </legend>

      {/* Name */}
      <label className="label">{t("quote.panelsForm.name")}</label>
      <input
        {...register("name")}
        type="text"
        className="input"
        placeholder={t("quote.panelsForm.namePlaceholder")}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      {/* Surname */}
      <label className="label">{t("quote.panelsForm.surname")}</label>
      <input
        {...register("surname")}
        type="text"
        className="input"
        placeholder={t("quote.panelsForm.surnamePlaceholder")}
      />
      {errors.surname && (
        <p className="text-red-500">{errors.surname.message}</p>
      )}

      {/* Email */}
      <label className="label">{t("quote.panelsForm.email")}</label>
      <input
        {...register("email")}
        type="email"
        className="input"
        placeholder={t("quote.panelsForm.emailPlaceholder")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      {/* Paquete */}
      <label className="label">{t("quote.panelsForm.package")}</label>
      <select {...register("paquete")} className="select" defaultValue="">
        <option value="" disabled>
          {t("quote.panelsForm.packagePlaceholder")}
        </option>
        <option value="Paquete 1">
          {t("quote.panelsForm.packageOptions.package1")}
        </option>
        <option value="Paquete 2">
          {t("quote.panelsForm.packageOptions.package2")}
        </option>
        <option value="Paquete 3">
          {t("quote.panelsForm.packageOptions.package3")}
        </option>
      </select>
      {errors.paquete && (
        <p className="text-red-500">{errors.paquete.message}</p>
      )}

      {/* File */}
      <legend className="label">{t("quote.panelsForm.bill")}</legend>
      <input {...register("file")} type="file" className="file-input" />
      <label className="label text-sm">
        {t("quote.panelsForm.billFormat")}
      </label>
      {errors.file && <p className="text-red-500">{errors.file.message}</p>}

      {billingRequestError && (
        <p className="text-red-500">
          {t(`quote.panelsForm.errors.${billingRequestError}`)}
        </p>
      )}
      {billingRequestSuccess && (
        <p className="text-green-500">{t("quote.panelsForm.successMessage")}</p>
      )}

      {/* Submit */}
      <button
        disabled={isSubmitting}
        className="btn btn-neutral mt-4 text-lg w-80"
        type="submit"
      >
        {isSubmitting
          ? t("quote.panelsForm.isSubmitting")
          : t("quote.panelsForm.submit")}
      </button>
    </form>
  );
}

export default CotizacionPaneles;
