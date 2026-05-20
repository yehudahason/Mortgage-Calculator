import type { Mortgage } from "../types/Mortgage";

export function calculate({ amount, years, annualRate, type }: Mortgage) {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  let rawMonthlyPayment = 0;

  if (type === "interestOnly") {
    rawMonthlyPayment = amount * monthlyRate;
  } else {
    if (Math.abs(monthlyRate) < 1e-8) {
      rawMonthlyPayment = amount / numberOfPayments;
    } else {
      const factor = Math.pow(1 + monthlyRate, numberOfPayments);
      rawMonthlyPayment = (amount * monthlyRate * factor) / (factor - 1);
    }
  }

  // 1. Round the monthly payment first (this matches what is displayed)
  const monthlyPayment = Number(rawMonthlyPayment.toFixed(2));

  // 2. Convert monthly payment to cents to avoid floating-point multiplication bugs
  const monthlyCents = Math.round(monthlyPayment * 100);
  const amountCents = Math.round(amount * 100);

  let totalRepaymentCents = 0;
  if (type === "interestOnly") {
    totalRepaymentCents = monthlyCents * numberOfPayments + amountCents;
  } else {
    totalRepaymentCents = monthlyCents * numberOfPayments;
  }

  const totalInterestCents = totalRepaymentCents - amountCents;

  return {
    monthly: monthlyPayment,
    // Convert back from cents to standard currency units safely
    total: totalRepaymentCents / 100,
    interest: totalInterestCents / 100,
  };
}
