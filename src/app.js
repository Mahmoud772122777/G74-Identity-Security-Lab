const checks = [
  { id: "callback", label: "Trusted callback" },
  { id: "proof", label: "Identity proof" },
  { id: "approval", label: "Second approval" }
];

const evaluateBtn = document.getElementById("evaluateBtn");
const resetBtn = document.getElementById("resetBtn");

function evaluateRequest() {
  const passed = checks.filter(item => document.getElementById(item.id).checked);
  const count = passed.length;
  const complete = count === checks.length;

  document.getElementById("scoreText").textContent = `${count} / 3`;
  document.getElementById("meterFill").style.width = `${(count / 3) * 100}%`;

  const badge = document.getElementById("riskBadge");
  const icon = document.getElementById("resultIcon");
  const title = document.getElementById("resultTitle");
  const text = document.getElementById("resultText");

  if (complete) {
    badge.textContent = "CHECKS COMPLETE";
    badge.style.color = "var(--green)";
    badge.style.borderColor = "#38775f";
    icon.textContent = "✓";
    icon.style.color = "var(--green)";
    icon.style.background = "#15382f";
    title.textContent = "Eligible for review";
    text.textContent = "All three training checks are marked complete. Follow your organization's formal workflow and record the approval before making any change.";
  } else {
    badge.textContent = "HOLD REQUEST";
    badge.style.color = "var(--red)";
    badge.style.borderColor = "#7b3a4a";
    icon.textContent = "!";
    icon.style.color = "var(--red)";
    icon.style.background = "#3b1e30";
    title.textContent = "Do not reset MFA yet";
    text.textContent = `Only ${count} of 3 controls are complete. Keep the request on hold, complete the missing checks, and escalate any pressure to bypass the process.`;
  }

  document.getElementById("resultList").innerHTML = checks.map(item => {
    const ok = document.getElementById(item.id).checked;
    return `<div><span class="dot ${ok ? "green" : "red"}"></span>${item.label}<b>${ok ? "Complete" : "Missing"}</b></div>`;
  }).join("");
}

function resetSimulation() {
  checks.forEach(item => { document.getElementById(item.id).checked = false; });
  document.getElementById("scoreText").textContent = "0 / 3";
  document.getElementById("meterFill").style.width = "0%";
  document.getElementById("riskBadge").textContent = "UNVERIFIED";
  document.getElementById("riskBadge").style.color = "var(--gold)";
  document.getElementById("riskBadge").style.borderColor = "#725b37";
  document.getElementById("resultIcon").textContent = "?";
  document.getElementById("resultIcon").style.color = "var(--gold)";
  document.getElementById("resultIcon").style.background = "#25344d";
  document.getElementById("resultTitle").textContent = "Request not evaluated";
  document.getElementById("resultText").textContent = "Complete the checks on the left, then evaluate the request to see the recommended decision.";
  document.getElementById("resultList").innerHTML = checks.map(item =>
    `<div><span class="dot gray"></span>${item.label}<b>Not checked</b></div>`
  ).join("");
}

evaluateBtn.addEventListener("click", evaluateRequest);
resetBtn.addEventListener("click", resetSimulation);
