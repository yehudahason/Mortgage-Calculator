import type { Mortgage } from "../types/Mortgage";

export function calculate({ amount, years, annualRate, type }: Mortgage) {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  let monthlyPayment = 0;
  let totalRepayment = 0;

  if (type === "interestOnly") {
    monthlyPayment = amount * monthlyRate;
    totalRepayment = monthlyPayment * numberOfPayments + amount;
  } else {
    if (monthlyRate === 0) {
      monthlyPayment = amount / numberOfPayments;
    } else {
      monthlyPayment =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    totalRepayment = monthlyPayment * numberOfPayments;
  }

  return {
    monthly: Number(monthlyPayment.toFixed(2)),
    total: Number(totalRepayment.toFixed(2)),
  };
}
