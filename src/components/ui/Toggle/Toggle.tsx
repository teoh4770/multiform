import style from "./Toggle.module.css";

interface IToggle {
  name: string;
  label?: string;
  // isToggled: boolean;
}

function Toggle({ name, label }: IToggle) {
  return (
    <label htmlFor={name} className={style.toggleContainer}>
      <div className={style.toggleBoxContainer}>
        <input
          type="checkbox"
          id={name}
          className={style.toggleBox}
          name={name}
          // take togglebox value
        />
      </div>
      <p hidden>{label}</p>
    </label>
  );
}

// toggle circle is 12x12, white bg, full circle
// toggle container is 38x20, denim bg, rounded 10px
//

export { Toggle };
