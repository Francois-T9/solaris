import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
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
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

const cellEfficiencyData = [
  { month: "1975", eficiencia: 14.0, mobile: 0 },
  { month: "1980", eficiencia: 17.0, mobile: 0 },
  { month: "1985", eficiencia: 18.0, mobile: 0 },
  { month: "1990", eficiencia: 22.0, mobile: 0 },
  { month: "1995", eficiencia: 24.0, mobile: 0 },
  { month: "2000", eficiencia: 24.7, mobile: 0 },
  { month: "2005", eficiencia: 25.0, mobile: 0 },
  { month: "2010", eficiencia: 25.0, mobile: 0 },
  { month: "2015", eficiencia: 25.6, mobile: 0 },
  { month: "2020", eficiencia: 26.1, mobile: 0 },
  { month: "2025", eficiencia: 27.0, mobile: 0 },
];

const chartConfig = {
  eficiencia: {
    label: "Eficiencia",
    color: "#02224a",
  },
  yucatan: {
    label: "Yucatán",
    color: "#fdbf04",
  },
};

export default function CellEfficiencyChart() {
  return (
    <Card className="w-80 lg:w-120 ">
      <CardHeader>
        <CardTitle>Eficiencia de paneles solares</CardTitle>
        <CardDescription>1975 - 2025</CardDescription>
      </CardHeader>

      <CardContent>
        {/* Responsive container fills parent width */}
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer>
            <LineChart
              data={cellEfficiencyData}
              margin={{ top: 20, right: 12, left: 12 }}
            >
              <CartesianGrid vertical={false} stroke="#e5e7eb" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value} // keep full year
                stroke="#6b7280"
                tick={{ fontSize: 10 }} // <-- smaller font
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    indicator="line"
                    className="!bg-white !opacity-100 !text-black"
                  />
                }
              />
              {/* Desktop line */}
              <Line
                type="monotone"
                dataKey="eficiencia"
                stroke="#02224a"
                strokeWidth={2}
                dot={{ fill: "#02224a" }}
                activeDot={{ r: 6 }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  fill="#111827"
                  fontSize={12}
                />
              </Line>
              {/* Mobile line
              <Line
                type="monotone"
                dataKey="mobile"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ fill: "#f97316" }}
                activeDot={{ r: 6 }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  fill="#111827"
                  fontSize={12}
                />
              </Line> */}
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Aumento de casi un 100% en 50 años <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
