import { Card } from "../../ui";
import style from "./PlanCard.module.css";

type Frequency = "monthly" | "yearly";

interface IPlan {
  title: string;
  price: number;
  frequency: Frequency;
  imgUrl: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

function PlanCard({
  title,
  price,
  frequency,
  imgUrl,
  isSelected,
  onSelect,
}: IPlan) {
  // Determine whether the plan is monthly or yearly
  const planPeriod = frequency === "monthly" ? "mo" : "yr";
  const yearlyExtraInfo = frequency === "yearly" ? "2 months free" : "";

  // Optionally, explicitly handle the rendering of yearly extra info
  let yearlyExtraInfoContent = null;
  if (frequency === "yearly") {
    yearlyExtraInfoContent = <p className={style.info}>{yearlyExtraInfo}</p>;
  }

  // due to padding inside, we can't click on the card where the padding exists
  return (
    <Card className={style.planCard}>
      <div className={style.plan} onClick={onSelect} data-active={isSelected}>
        <div className={style.imageContainer}>
          <img className={style.image} src={imgUrl} alt="" />
        </div>

        <div className={style.content}>
          <p className={style.title}>{title}</p>
          <p className={style.price}>
            ${price}/{planPeriod}
          </p>
          {yearlyExtraInfoContent}
        </div>
      </div>
    </Card>
  );
}

export { PlanCard };
