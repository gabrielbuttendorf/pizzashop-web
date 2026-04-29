import { BarChart } from 'lucide-react'
import {
  Label,
  LabelList,
  type LabelProps,
  Pie,
  PieChart,
  type PieSectorShapeProps,
  ResponsiveContainer,
  Sector,
} from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarela', amount: 10 },
  { product: 'Doritos', amount: 24 },
  { product: 'Charge', amount: 18 },
  { product: 'Marguerita', amount: 90 },
]

import colors from 'tailwindcss/colors'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

const pieShapeColors = (props: PieSectorShapeProps) => (
  <Sector
    {...props}
    fill={COLORS[props.index]}
    className="hover:opacity-80 dark:stroke-zinc-900"
  />
)

const pieLabels = (props: LabelProps & { index?: number }) => {
  const item = data[props.index ?? 0]

  return (
  <Label
    {...props}
    value={`${item.product}: ${item.amount}`}
    fill={COLORS[(props.index ?? 0) % COLORS.length]}
    position="outside"
    offset={10}
  />
)
}

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              shape={pieShapeColors}
            >
              <LabelList content={pieLabels} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
