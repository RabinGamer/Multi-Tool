'use client';

import { CalculatorTool } from '@/tools/framework/CalculatorTool';
import { formatNumber } from '@/lib/utils';

function parseDate(s: string): Date | null {
  if (!s) return null;
  const d = new Date(s + 'T00:00:00');
  if (isNaN(d.getTime())) return null;
  return d;
}

export default function AgeCalculator() {
  return (
    <CalculatorTool
      fields={[
        { key: 'dob', label: 'Date of birth', type: 'date' },
        { key: 'asOf', label: 'Age as of (leave empty for today)', type: 'date' },
      ]}
      compute={(v) => {
        const dob = parseDate(v.dob);
        const asOf = v.asOf ? parseDate(v.asOf) : new Date();
        if (!dob) return [];
        if (!asOf || asOf < dob) {
          return [{ label: 'Check your dates', value: 'As-of date must be after birth date' }];
        }
        let years = asOf.getFullYear() - dob.getFullYear();
        let months = asOf.getMonth() - dob.getMonth();
        let days = asOf.getDate() - dob.getDate();
        if (days < 0) {
          months -= 1;
          days += new Date(asOf.getFullYear(), asOf.getMonth(), 0).getDate();
        }
        if (months < 0) {
          years -= 1;
          months += 12;
        }
        const totalDays = Math.floor((asOf.getTime() - dob.getTime()) / 86400000);
        const totalWeeks = Math.floor(totalDays / 7);
        const totalMonths = years * 12 + months;

        let next = new Date(asOf.getFullYear(), dob.getMonth(), dob.getDate());
        if (next.getTime() <= asOf.getTime()) {
          next = new Date(asOf.getFullYear() + 1, dob.getMonth(), dob.getDate());
        }
        const daysToBirthday = Math.ceil((next.getTime() - asOf.getTime()) / 86400000);

        return [
          {
            label: 'Exact age',
            value: years + ' years, ' + months + ' months, ' + days + ' days',
            highlight: true,
          },
          { label: 'Total months', value: formatNumber(totalMonths) },
          { label: 'Total weeks', value: formatNumber(totalWeeks) },
          { label: 'Total days', value: formatNumber(totalDays) },
          { label: 'Next birthday in', value: daysToBirthday + ' days' },
        ];
      }}
    />
  );
}
