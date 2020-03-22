//listen for submit
document.querySelector("#loan-form").addEventListener("submit", function(e) {
  //hide results
  document.querySelector("#results").style.display = "none";
  //show loader
  document.querySelector("#loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults(e) {
  console.log("calculating...");

  const loanAmount = document.querySelector("#amount");
  const interestRate = document.querySelector("#interest-rate");
  const yearsToRepay = document.querySelector("#years-to-repay");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  // CALCULATION
  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(interestRate.value) / 100 / 12;
  const calculatedPayments = parseFloat(yearsToRepay.value) * 12;

  //complete monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    document.querySelector("#results").style.display = "block";
    document.querySelector("#loading").style.display = "none";
  } else {
    showError("please check input");
  }
}

function showError(error) {
  document.querySelector("#results").style.display = "none";
  document.querySelector("#loading").style.display = "none";

  //create a div
  const errorDiv = document.createElement("div");

  const card = document.querySelector(".card");
  const heading = document.querySelector("#calculator-heading");

  //add classes
  errorDiv.className = "alert alert-danger";

  // create text node & append
  errorDiv.appendChild(document.createTextNode(error));

  //insert error above heading
  card.insertBefore(errorDiv, heading);

  //clear error
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}
