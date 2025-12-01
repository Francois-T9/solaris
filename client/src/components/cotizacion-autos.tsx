import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import z from "zod";
import { useUserStore } from "../store/user.store";
import type { CarRequest } from "../types/types";

function CotizacionAutos() {
  const { t } = useTranslation();
  const { allBrands, sendCar, carRequestError, carRequestSuccess } =
    useUserStore();
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

    manufacturerName: z.string().nonempty(t("quote.carsForm.carBrandError")),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CarRequest>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<CarRequest> = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("email", data.email);
    formData.append("manufacturerName", data.manufacturerName);
    await sendCar(formData);
  };

  return (
    <form
      action=""
      method="POST"
      encType="multipart/form-data"
      className=" bg-base-200 border-base-300 rounded-box border p-4 text-md flex flex-col gap-2 w-fit "
      onSubmit={handleSubmit(onSubmit)}
    >
      {" "}
      <legend className="fieldset-legend">{t("quote.carsForm.legend")}</legend>
      <label className="label">{t("quote.carsForm.name")}</label>
      <input
        {...register("name")}
        name="name"
        type="text"
        className="input"
        placeholder={t("quote.carsForm.namePlaceholder")}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <label className="label">{t("quote.carsForm.surname")}</label>
      <input
        {...register("surname")}
        name="surname"
        type="text"
        className="input"
        placeholder={t("quote.carsForm.surnamePlaceholder")}
      />
      {errors.surname && (
        <p className="text-red-500">{errors.surname.message}</p>
      )}
      <label className="label">{t("quote.carsForm.email")}</label>
      <input
        {...register("email")}
        type="email"
        className="input"
        name="email"
        placeholder={t("quote.carsForm.emailPlaceholder")}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <legend className="label">{t("quote.carsForm.carBrand")}</legend>
      <select
        {...register("manufacturerName")}
        name="manufacturerName"
        defaultValue=""
        className="select"
      >
        <option disabled value="">
          {t("quote.carsForm.carBrandPlaceholder")}
        </option>
        {allBrands.map((brand) => (
          <option key={brand.name}>{brand.name}</option>
        ))}
      </select>
      {errors.manufacturerName && (
        <p className="text-red-500">{errors.manufacturerName.message}</p>
      )}
      <label className="label text-sm ">{t("quote.carsForm.required")}</label>
      {carRequestSuccess.length > 0 ? (
        <p className="text-green-500">{t("quote.panelsForm.successMessage")}</p>
      ) : null}
      {carRequestError.length > 0 ? (
        <p className="text-red-500">
          {t(`quote.panelsForm.errors.${carRequestError}`)}
        </p>
      ) : null}
      <button className="btn btn-neutral mt-4 text-lg w-80" type="submit">
        {isSubmitting
          ? t("quote.panelsForm.isSubmitting")
          : t("quote.panelsForm.submit")}
      </button>
    </form>
  );
}

export default CotizacionAutos;
