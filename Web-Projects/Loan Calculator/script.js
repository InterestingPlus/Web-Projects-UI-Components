document.getElementById("calculate").addEventListener("click", () => {
  const amount = parseFloat(document.getElementById("amount").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);

  if (
    isNaN(amount) ||
    isNaN(rate) ||
    isNaN(years) ||
    amount <= 0 ||
    rate <= 0 ||
    years <= 0
  ) {
    document.getElementById("result").textContent =
      "Please enter valid inputs.";
    return;
  }

  const interest = (amount * rate * years) / 100;
  const totalPayment = amount + interest;
  const monthlyPayment = totalPayment / (years * 12);

  document.getElementById("result").innerHTML = `
      Total Payment: ₹${totalPayment.toFixed(2)}<br>
      Monthly Payment: ₹${monthlyPayment.toFixed(2)}
    `;
});
