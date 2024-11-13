import style from "./CheckBox.module.css";

interface ICheckBox {
  name: string;
  label: string;
  sublabel?: string;
  className?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckBox({
  name,
  label = "this is a label",
  sublabel,
  className,
  checked,
  onChange,
}: ICheckBox) {
  return (
    <label htmlFor={name} className={`${style.formControl} ${className}`}>
      <input
        type="checkbox"
        id={name}
        className={style.checkbox}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <div>
        <p className={style.label}>{label}</p>
        <p className={style.sublabel} hidden={!sublabel}>
          {sublabel}
        </p>
      </div>
    </label>
  );
}

export { CheckBox };

// I want to transform checkbox from pure ui component to interactable
