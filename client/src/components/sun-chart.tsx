import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
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
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartContainer,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const comparisonSolarData = [
  { month: "Enero", yucatan: 207, germany: 61 },
  { month: "Febrero", yucatan: 244, germany: 89 /* approx */ },
  { month: "Marzo", yucatan: 300, germany: 140 /* mid spring */ },
  { month: "Abril", yucatan: 302, germany: 170 /* approximate */ },
  { month: "Mayo", yucatan: 322, germany: 200 /* approx high */ },
  { month: "Junio", yucatan: 294, germany: 210 /* June peak in sunshine */ },
  { month: "Julio", yucatan: 324, germany: 200 /* hot summer */ },
  { month: "Agosto", yucatan: 317, germany: 210 /* approximate */ },
  { month: "Septiembre", yucatan: 290, germany: 170 /* drop */ },
  { month: "Octubre", yucatan: 302, germany: 130 /* autumn */ },
  { month: "Noviembre", yucatan: 276, germany: 80 /* late autumn */ },
  { month: "Diciembre", yucatan: 276, germany: 70 /* winter */ },
];

// No CSS variables — using real color values
const chartConfig = {
  germany: {
    label: "Alemaña",
    color: "#02224a",
  },
  yucatan: {
    label: "Yucatán",
    color: "#fdbf04",
  },
};

export default function SunChart() {
  return (
    <Card className="w-80 lg:w-120  ">
      <CardHeader>
        <CardTitle>Soleamiento en Yucatán</CardTitle>
        <CardDescription>Comparación con Alemaña</CardDescription>
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
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
