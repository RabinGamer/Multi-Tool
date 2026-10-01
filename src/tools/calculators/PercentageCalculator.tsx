'use client';

import { CalculatorTool } from '@/tools/framework/CalculatorTool';
import { formatNumber } from '@/lib/utils';

export default function PercentageCalculator() {
  return (
    <CalculatorTool
      fields={[
        { key: 'x', label: 'Value X', type: 'number', default: '15', placeholder: 'e.g. 15' },
        { key: 'y', label: 'Value Y', type: 'number', default: '200', placeholder: 'e.g. 200' },
      ]}
      compute={(v) => {
        const x = parseFloat(v.x);
        const y = parseFloat(v.y);
        const out = [];
        if (!isNaN(x) && !isNaN(y)) {
          out.push({
            label: x + '% of ' + y + ' is',
            value: formatNumber((x / 100) * y),
            highlight: true,
          });
        }
        if (!isNaN(x) && !isNaN(y) && y !== 0) {
          out.push({
            label: x + ' is what percent of ' + y,
            value: formatNumber((x / y) * 100) + '%',
          });
        }
        if (!isNaN(x) && !isNaN(y) && x !== 0) {
          const change = ((y - x) / Math.abs(x)) * 100;
          out.push({
            label: 'Change from ' + x + ' to ' + y,
            value:
              (change >= 0 ? '+' : '') +
              formatNumber(change) +
              '% (' +
              (change >= 0 ? 'increase' : 'decrease') +
              ')',
          });
        }
        return out;
      }}
      notes="Every result updates live. Change either value to compare scenarios instantly."
    />
  );
}
