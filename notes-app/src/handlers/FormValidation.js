export default class FormValidation {
  static validateInput(input, errorElement) {
    const value = input.value.trim();

    if (value === "") {
      errorElement.textContent = `${input.placeholder} is required`;
      input.classList.add("invalid");
      return false;
    }

    if (input.id === "title" && value.length > 50) {
      errorElement.textContent = "Title cannot be longer than 50 characters";
      input.classList.add("invalid");
      return false;
    }

    if (input.id === "body" && value.length > 500) {
      errorElement.textContent = "Note content cannot be longer than 500 characters";
      input.classList.add("invalid");
      return false;
    }

    errorElement.textContent = "";
    input.classList.remove("invalid");
    return true;
  }
}