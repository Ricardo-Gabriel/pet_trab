import styles from "./Input.module.css";

export default function Input({placeholder,name,txt}) {
  return (
    <div class="form__group field">
      <input
        type="input"
        class="form__field"
        placeholder={placeholder}
        name={name}
        id="name"
        required
      />
      <label for="name" class="form__label">
        {txt}
      </label>
    </div>
  );
}
