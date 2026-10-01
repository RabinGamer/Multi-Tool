export interface Accent {
  chip: string;
  text: string;
}

// Static class strings so Tailwind's scanner picks them up.
export const accents: Record<string, Accent> = {
  indigo: {
    chip: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400',
    text: 'text-indigo-500 dark:text-indigo-400',
  },
  violet: {
    chip: 'border-violet-500/30 bg-violet-500/10 text-violet-500 dark:text-violet-400',
    text: 'text-violet-500 dark:text-violet-400',
  },
  cyan: {
    chip: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    text: 'text-cyan-600 dark:text-cyan-400',
  },
  fuchsia: {
    chip: 'border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-500 dark:text-fuchsia-400',
    text: 'text-fuchsia-500 dark:text-fuchsia-400',
  },
  emerald: {
    chip: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  amber: {
    chip: 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
    text: 'text-amber-600 dark:text-amber-400',
  },
  sky: {
    chip: 'border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400',
    text: 'text-sky-600 dark:text-sky-400',
  },
  rose: {
    chip: 'border-rose-500/30 bg-rose-500/10 text-rose-500 dark:text-rose-400',
    text: 'text-rose-500 dark:text-rose-400',
  },
  lime: {
    chip: 'border-lime-500/30 bg-lime-500/10 text-lime-600 dark:text-lime-400',
    text: 'text-lime-600 dark:text-lime-400',
  },
  orange: {
    chip: 'border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400',
    text: 'text-orange-600 dark:text-orange-400',
  },
  teal: {
    chip: 'border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400',
    text: 'text-teal-600 dark:text-teal-400',
  },
};
