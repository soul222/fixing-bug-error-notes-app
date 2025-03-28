const FormStyled = `
:host {
  --white: #ffffff;
  --secondary-emphasis: #f1f3f4;
  --secondary: #5f6368;
  --dark: #202124;
  --border-color: #dadce0;
  --primary: #fbbc04;
  --danger: #ea4335;
  --success: #34a853;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
   :host {
    display: block;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
    resize: none;
  }

  input:focus, textarea:focus {
    border-color: var(--secondary);
    outline: none;
  }

  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: -0.5rem;
  }

  input.invalid, textarea.invalid {
    border-color: red;
  }

  button {
    padding: 0.75rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: var(--secondary);
  }

  textarea {
    overflow-y: auto;
    max-height: 8rem;
    padding: 0.5rem;
    transition: height 0.2s ease-in-out;
  }
`;

export default FormStyled;
