'use client';

import { CalculatorTool } from '@/tools/framework/CalculatorTool';
import { formatNumber } from '@/lib/utils';

export default function GstCalculator() {
  return (
    <CalculatorTool
      fields={[
        { key: 'amount', label: 'Amount', type: 'number', default: '1000' },
        {
          key: 'rate',
          label: 'GST rate',
          type: 'select',
          default: '18',
          options: [
            { label: '5%', value: '5' },
            { label: '12%', value: '12' },
            { label: '18%', value: '18' },
            { label: '28%', value: '28' },
          ],
        },
        {
          key: 'mode',
          label: 'Direction',
          type: 'select',
          default: 'add',
          options: [
            { label: 'Add GST to base amount', value: 'add' },
            { label: 'Remove GST from total', value: 'remove' },
          ],
        },
      ]}
      compute={(v) => {
        const amount = parseFloat(v.amount);
        const rate = parseFloat(v.rate);
        if (isNaN(amount) || isNaN(rate)) return [];
        if (v.mode === 'remove') {
          const base = amount / (1 + rate / 100);
          const gst = amount - base;
          return [
            { label: 'Base amount (excl. GST)', value: formatNumber(base), highlight: true },
            { label: 'GST component', value: formatNumber(gst) },
            { label: 'CGST (half)', value: formatNumber(gst / 2) },
            { label: 'SGST (half)', value: formatNumber(gst / 2) },
            { label: 'GST-inclusive total', value: formatNumber(amount) },
          ];
        }
        const gst = (amount * rate) / 100;
        return [
          { label: 'GST-inclusive total', value: formatNumber(amount + gst), highlight: true },
          { label: 'GST component', value: formatNumber(gst) },
          { label: 'CGST (half)', value: formatNumber(gst / 2) },
          { label: 'SGST (half)', value: formatNumber(gst / 2) },
          { label: 'Base amount', value: formatNumber(amount) },
        ];
      }}
      notes="CGST and SGST apply to intra-state sales. For inter-state sales the full amount is charged as IGST instead."
    />
  );
}
