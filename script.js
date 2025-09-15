const display = document.getElementById("display");
const body = document.body;
const themeBtn = document.querySelector(".theme-toggle");

// ✅ Select all calculator buttons
const buttons = document.querySelectorAll("button");

// Add events to each button
buttons.forEach(btn => {
  // On hover
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "#ff9800";  // orange on hover
    btn.style.color = "white";
    btn.style.cursor = "pointer";           // pointer cursor
  });

  // On mouse leave
  btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";  // reset to CSS default
    btn.style.color = "";
  });

  // On click (mousedown)
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
    btn.style.backgroundColor = "#e64a19"; // darker orange
  });

  // On release (mouseup)
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
    btn.style.backgroundColor = "#ff9800"; // back to hover color
  });
});

// ===== Existing Calculator Functions =====
function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleTheme() {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  if (body.classList.contains("dark")) {
    themeBtn.textContent = "Switch to Light Mode";
  } else {
    themeBtn.textContent = "Switch to Dark Mode";
  }
}
