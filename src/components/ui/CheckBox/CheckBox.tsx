import style from "./CheckBox.module.css";

interface ICheckBox {
  name: string;
  label: string;
  sublabel?: string;
  // pass in the value
}

function CheckBox({ name, label = "this is a label", sublabel }: ICheckBox) {
  return (
    <label htmlFor={name} className={style.formControl}>
      <input type="checkbox" id={name} className={style.checkbox} name={name} />
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
