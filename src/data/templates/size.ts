interface SizeProps {
  name: string;
  width: number;
  height: number;
  unit: string;
  categrory: string;
}

export const SizePresets: SizeProps[] = [
  {
    name: 'Presentation (4:3)',
    width: 1024,
    height: 768,
    unit: 'px',
    categrory: 'Social Media',
  },
  {
    name: 'Presentation (16: 9)',
    width: 1920,
    height: 1080,
    unit: 'px',
    categrory: 'Social Media',
  },
];
