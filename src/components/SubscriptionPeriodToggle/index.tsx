import style from "./SubscriptionPeriodToggle.module.css";
import { Toggle } from "../ui";
import { useState } from "react";

function SubscriptionPeriodToggle() {
  // State for subscription period: true for Yearly, false for Monthly
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className={style.subscriptionPeriodToggle}>
      {/* Monthly Label */}
      <span className={style.label} data-monthly={!isYearly}>
        Monthly
      </span>

      {/* Toggle Button */}
      <Toggle
        name="subscription-period"
        isToggled={isYearly}
        onToggled={() => setIsYearly(!isYearly)}
      />

      {/* Yearly Label */}
      <span className={style.label} data-yearly={isYearly}>
        Yearly
      </span>
    </div>
  );
}

export { SubscriptionPeriodToggle };
