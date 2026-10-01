'use client';

import { CalculatorTool } from '@/tools/framework/CalculatorTool';
import { formatNumber } from '@/lib/utils';

export default function EmiCalculator() {
  return (
    <CalculatorTool
      fields={[
        { key: 'amount', label: 'Loan amount', type: 'number', default: '1000000' },
        { key: 'rate', label: 'Annual interest rate', type: 'number', default: '8.5', suffix: '%', step: '0.05' },
        { key: 'years', label: 'Tenure', type: 'number', default: '20', suffix: 'years' },
      ]}
      compute={(v) => {
        const p = parseFloat(v.amount);
        const rate = parseFloat(v.rate);
        const years = parseFloat(v.years);
        if (isNaN(p) || isNaN(rate) || isNaN(years) || p <= 0 || years <= 0) return [];
        const n = Math.round(years * 12);
        const r = rate / 1200;
        const emi = r === 0 ? p / n : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - p;
        return [
          { label: 'Monthly EMI', value: formatNumber(emi), highlight: true },
          { label: 'Total interest over ' + years + ' years', value: formatNumber(totalInterest) },
          { label: 'Total amount repaid', value: formatNumber(totalPayment) },
          { label: 'Interest as % of loan', value: formatNumber((totalInterest / p) * 100, 1) + '%' },
        ];
      }}
      notes="Uses the standard reducing-balance EMI formula that banks quote. Processing fees and insurance are not included."
    />
  );
}
