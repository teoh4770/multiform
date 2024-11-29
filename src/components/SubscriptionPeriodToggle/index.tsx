import style from "./SubscriptionPeriodToggle.module.css";
import { Toggle } from "../ui";
import { useAtom } from "jotai";
import { isMonthlyPaymentAtom } from "../../lib";

function SubscriptionPeriodToggle() {
  const [isMonthly, setIsMonthly] = useAtom(isMonthlyPaymentAtom);

  return (
    <div className={style.subscriptionPeriodToggle}>
      {/* Monthly Label */}
      <span className={style.label} data-monthly={isMonthly}>
        Monthly
      </span>

      {/* Toggle Button */}
      <Toggle
        name="subscription-period"
        isToggled={isMonthly}
        onToggled={() => setIsMonthly((prev) => !prev)}
      />

      {/* Yearly Label */}
      <span className={style.label} data-yearly={!isMonthly}>
        Yearly
      </span>
    </div>
  );
}

export { SubscriptionPeriodToggle };
