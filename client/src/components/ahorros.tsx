import { useState } from "react";
import { useTranslation } from "react-i18next";

function CalculadorAhorros() {
  const { t } = useTranslation();
  const [consumo, setConsumo] = useState<number>(300); // kWh/mes por defecto

  const calcularCostoCFE = (kwh: number) => {
    if (kwh <= 150) return kwh * 12 * 10; // tarifa aproximada baja: 10 MXN/kWh
    if (kwh <= 500) return kwh * 12 * 15; // tarifa media
    return kwh * 12 * 20; // tarifa alta
  };

  const calcularInstalacion = (kwh: number) => {
    if (kwh <= 150) return 95000;
    if (kwh <= 300) return 110000;
    if (kwh <= 500) return 130000;
    return 160000;
  };

  const costoAnual = calcularCostoCFE(consumo);
  const instalacion = calcularInstalacion(consumo);
  const ahorroAnual = costoAnual;
  const retorno = (instalacion / ahorroAnual).toFixed(1);

  return (
    <div className="p-4 w-120 mx-auto bg-base-100 rounded-box border border-base-content/5">
      <h2 className="text-xl font-bold mb-4">{t("ahorros.title")}</h2>

      <label className="label">
        <span className="label-text">
          {t("ahorros.consumptionLabel", { consumo: consumo })}
        </span>
      </label>
      <input
        type="range"
        min="50"
        max="1000"
        step="10"
        value={consumo}
        onChange={(e) => setConsumo(Number(e.target.value))}
        className="range range-primary mb-6"
      />

      <table className="table w-full">
        <thead>
          <tr>
            <th>{t("ahorros.columns.concept")}</th>
            <th>{t("ahorros.columns.amount")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{t("ahorros.rows.providerCost")}</td>
            <td>${costoAnual.toLocaleString()} MXN</td>
          </tr>
          <tr>
            <td>{t("ahorros.rows.installationCost")}</td>
            <td>${instalacion.toLocaleString()} MXN</td>
          </tr>
          <tr>
            <td>{t("ahorros.rows.annualSavings")}</td>
            <td>${ahorroAnual.toLocaleString()} MXN</td>
          </tr>
          <tr>
            <td>{t("ahorros.rows.paybackPeriod")}</td>
            <td>{t("ahorros.rows.paybackValue", { retorno: retorno })}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CalculadorAhorros;
