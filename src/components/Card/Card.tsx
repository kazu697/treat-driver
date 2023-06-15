import { Card, Text, Metric } from '@tremor/react';

type DealCardProps = {
  title: string;
  price: number;
  start: string;
  end: string;
};

export const DealCard = ({
  title,
  price,
  start,
  end,
  ...props
}: DealCardProps) => {
  return (
    <Card className='max-w-xs'>
      <Metric>{title}</Metric>
      <Metric>{price}</Metric>
      <Metric>{start}</Metric>
      <Metric>{end}</Metric>
    </Card>
  );
};
