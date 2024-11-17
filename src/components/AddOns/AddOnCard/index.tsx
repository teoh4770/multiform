import { ChangeEvent } from "react";
import { Card, CheckBox } from "../../ui";
import style from "./AddOnCard.module.css";

type Frequency = "monthly" | "yearly";

interface IAddOnCard {
  label: string;
  sublabel: string;
  name: string;
  price: number;
  frequency: Frequency;
  // i should make both of them optional to make this component more flexible
  isChecked: boolean;
  onSelect: (event: ChangeEvent<HTMLInputElement>) => void;
}

function AddOnCard({
  label,
  sublabel,
  name,
  price,
  frequency,
  isChecked,
  onSelect,
}: IAddOnCard) {
  const planPeriod = frequency === "monthly" ? "mo" : "yr";

  return (
    <Card className={style.card}>
      <div className={style.addOn}>
        <CheckBox
          name={name}
          label={label}
          sublabel={sublabel}
          className={style.checkbox}
          checked={isChecked}
          onChange={onSelect}
        />

        <span className={style.price}>
          +${price}/{planPeriod}
        </span>
      </div>
    </Card>
  );
}

export { AddOnCard };
