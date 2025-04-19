function copyWallet() {
  const input = document.getElementById("wallet-address");
  input.select();
  document.execCommand("copy");
  alert("Wallet address copied!");
}

function copyReferral() {
  const input = document.getElementById("referral-link");
  input.select();
  document.execCommand("copy");
  alert("Referral link copied!");
}

// Example for calculating presale progress
document.addEventListener("DOMContentLoaded", function () {
  const transactions = []; // No transactions yet

  const goalBNB = 20;
  const collectedBNB = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const progressPercent = Math.min((collectedBNB / goalBNB) * 100, 100).toFixed(2);

  document.getElementById("filled").style.width = progressPercent + "%";
  document.getElementById("progress-text").textContent = ${progressPercent}% completed;

  const tbody = document.querySelector("#transactions-table tbody");
  transactions.forEach(tx => {
    const row = document.createElement("tr");
    row.innerHTML = 
      <td>${tx.date}</td>
      <td>${tx.buyer}</td>
      <td>${tx.referrer}</td>
      <td>${tx.amount.toFixed(2)}</td>
      <td>${(tx.amount * 2500000000).toLocaleString()}</td>
    ;
    tbody.appendChild(row);
  });
});