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
    if (Math.abs(monthlyRate) < 1e-8) {
      monthlyPayment = amount / numberOfPayments;
    } else {
      const factor = Math.pow(1 + monthlyRate, numberOfPayments);

      monthlyPayment = (amount * monthlyRate * factor) / (factor - 1);
    }

    totalRepayment = monthlyPayment * numberOfPayments;
  }

  return {
    monthly: Number(monthlyPayment.toFixed(2)),
    total: Number(totalRepayment.toFixed(2)),
    interest: Number((totalRepayment - amount).toFixed(2)),
  };
}
