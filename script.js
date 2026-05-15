const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const num = btn.dataset.number;
    const action = btn.dataset.action;

    if (num !== undefined) {
      if (input === "0") input = "";
      input += num;
      display.textContent = input;
    }

    if (action !== undefined) {
      if (action === "clear") {
        input = "";
        display.textContent = "0";
      }

      else if (action === "delete") {
        input = input.slice(0, -1);
        display.textContent = input || "0";
      }

      else if (action === "=") {
        try {
          input = eval(input).toString();
          display.textContent = input;
        } catch {
          display.textContent = "Error";
          input = "";
        }
      }

      else {
        input += action;
        display.textContent = input;
      }
    }
  });
});