'use client';

import { CalculatorTool } from '@/tools/framework/CalculatorTool';
import { formatNumber } from '@/lib/utils';

export default function BmiCalculator() {
  return (
    <CalculatorTool
      fields={[
        { key: 'height', label: 'Height', type: 'number', default: '170', suffix: 'cm' },
        { key: 'weight', label: 'Weight', type: 'number', default: '65', suffix: 'kg' },
      ]}
      compute={(v) => {
        const h = parseFloat(v.height) / 100;
        const w = parseFloat(v.weight);
        if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return [];
        const bmi = w / (h * h);
        const category =
          bmi < 18.5
            ? 'Underweight'
            : bmi < 25
              ? 'Normal weight'
              : bmi < 30
                ? 'Overweight'
                : 'Obese';
        const min = 18.5 * h * h;
        const max = 24.9 * h * h;
        return [
          { label: 'Your BMI', value: formatNumber(bmi, 1), highlight: true },
          { label: 'WHO category', value: category },
          {
            label: 'Healthy weight range for your height',
            value: formatNumber(min, 1) + ' - ' + formatNumber(max, 1) + ' kg',
          },
        ];
      }}
      notes="BMI is a screening indicator, not a diagnosis. Very muscular people often read high - pair the result with professional advice."
    />
  );
}
