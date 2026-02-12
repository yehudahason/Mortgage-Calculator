import { type Mortgage } from "../types/Mortgage";
//@ts-ignore
function calculateMortgage({
  amount,
  years,
  annualRate,
  type, // "repayment" or "interest-only"
}: Mortgage): number {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  if (type === "interest-only") {
    return amount * monthlyRate;
  }

  // Repayment mortgage
  return (
    (amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  );
}
