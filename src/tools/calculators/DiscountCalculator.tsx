'use client';

import { CalculatorTool } from '@/tools/framework/CalculatorTool';
import { formatNumber } from '@/lib/utils';

export default function DiscountCalculator() {
  return (
    <CalculatorTool
      fields={[
        { key: 'price', label: 'Original price', type: 'number', default: '1999' },
        { key: 'discount', label: 'Discount', type: 'number', default: '30', suffix: '%', step: '0.5' },
      ]}
      compute={(v) => {
        const price = parseFloat(v.price);
        const d = parseFloat(v.discount);
        if (isNaN(price) || isNaN(d)) return [];
        const saved = (price * d) / 100;
        const final = price - saved;
        return [
          { label: 'Final price after discount', value: formatNumber(final), highlight: true },
          { label: 'You save', value: formatNumber(saved) },
          { label: 'You actually pay', value: formatNumber(100 - d, 1) + '% of the original' },
        ];
      }}
      notes="Stacked discounts apply sequentially: chain them by running the result through again."
    />
  );
}
