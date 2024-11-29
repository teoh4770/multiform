import style from "./Toggle.module.css";

interface IToggle {
  name: string;
  label?: string;
  className?: string;
  isToggled: boolean;
  onToggled: () => void;
}

function Toggle({ name, label, className, isToggled, onToggled }: IToggle) {
  return (
    <label htmlFor={name} className={`${style.toggleContainer} ${className}`}>
      <div className={style.toggleBoxContainer}>
        <input
          type="checkbox"
          id={name}
          className={style.toggleBox}
          name={name}
          checked={!isToggled}
          onChange={onToggled}
        />
      </div>
      <p hidden>{label}</p>
    </label>
  );
}

export { Toggle };
