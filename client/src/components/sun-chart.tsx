import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTranslation } from "react-i18next";
export const description = "A stacked bar chart with a legend";

export const getComparisonSolarData = (t) => [
  { month: t("sunChart.month.jan"), yucatan: 207, germany: 61 },
  { month: t("sunChart.month.feb"), yucatan: 244, germany: 89 },
  { month: t("sunChart.month.mar"), yucatan: 300, germany: 140 },
  { month: t("sunChart.month.apr"), yucatan: 302, germany: 170 },
  { month: t("sunChart.month.may"), yucatan: 322, germany: 200 },
  { month: t("sunChart.month.jun"), yucatan: 294, germany: 210 },
  { month: t("sunChart.month.jul"), yucatan: 324, germany: 200 },
  { month: t("sunChart.month.aug"), yucatan: 317, germany: 210 },
  { month: t("sunChart.month.sep"), yucatan: 290, germany: 170 },
  { month: t("sunChart.month.oct"), yucatan: 302, germany: 130 },
  { month: t("sunChart.month.nov"), yucatan: 276, germany: 80 },
  { month: t("sunChart.month.dec"), yucatan: 276, germany: 70 },
];

// No CSS variables — using real color values
// const chartConfig = {
//   germany: {
//     label: {t("sunChart.germany")},
//     color: "#02224a",
//   },
//   yucatan: {
//     label: "Yucatán",
//     color: "#fdbf04",
//   },
// };
export const getChartConfig = (t) => ({
  germany: { label: t("sunChart.labelGermany"), color: "#02224a" },
  yucatan: { label: t("sunChart.labelMexico"), color: "#fdbf04" },
});

export default function SunChart() {
  const { t } = useTranslation();
  const chartConfig = getChartConfig(t);
  const comparisonSolarData = getComparisonSolarData(t);
  return (
    <Card className="w-80 lg:w-120  ">
      <CardHeader>
        <CardTitle>{t("sunChart.title")}</CardTitle>
        <CardDescription>{t("sunChart.subtitle")}</CardDescription>
      </CardHeader>

      <CardContent>
        {/* Chart container (NO css vars needed) */}
        <ChartContainer config={chartConfig}>
          {/* Responsive container — THIS makes it responsive */}
          <ResponsiveContainer>
            <BarChart data={comparisonSolarData}>
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <ChartTooltip
                content={
                  <ChartTooltipContent
                    hideLabel
                    className="!bg-white !opacity-100 !text-black"
                  />
                }
              />

              <ChartLegend content={<ChartLegendContent />} />

              <Bar
                dataKey="germany"
                stackId="a"
                fill={chartConfig.germany.color}
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="yucatan"
                stackId="a"
                fill={chartConfig.yucatan.color}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {t("sunChart.footer")} <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
