const btn = document.querySelector("button");
const input = document.querySelector("input");

function toggleFunctionField() {
    if (input.type === "password") {
        input.type = "text";
     btn.textContent = "Hide Password";
    } else {
     input.type = "password";
        btn.textContent = "Show Password";
    }
}
btn.addEventListener("click", toggleFunctionField);