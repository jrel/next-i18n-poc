import { useCurrencyRating } from "./contexts/CurrencyRatting";

interface CurrencyProps {
  value: number;
}
export default function Currency({ value }: CurrencyProps) {
  const rating = useCurrencyRating();

  return <>{value * rating}</>;
}
