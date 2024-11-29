import { PlanCard } from "./PlanCard";
import { SubscriptionPeriodToggle } from "../SubscriptionPeriodToggle";
import style from "./Plans.module.css";
import { useAtom, useAtomValue } from "jotai";
import { isMonthlyPaymentAtom, planAtom } from "../../lib";
import { IPlan } from "../../types";

function Plans() {
  const isMonthly = useAtomValue(isMonthlyPaymentAtom);
  const [plans, setPlans] = useAtom(planAtom);

  const handleSelectedPlan = (selectedPlan: IPlan) => {
    setPlans((plans) =>
      plans.map((plan) => {
        return {
          ...plan,
          selected: plan.name === selectedPlan.name,
        };
      }),
    );
  };

  return (
    <div className={style.plans}>
      <div className={style.planCards}>
        {plans.map((plan, i) => (
          <PlanCard
            key={i}
            title={plan.title}
            price={isMonthly ? plan.price.monthly : plan.price.yearly}
            frequency={isMonthly ? "monthly" : "yearly"}
            imgUrl={plan.imgUrl}
            isSelected={plan.selected}
            onSelect={() => handleSelectedPlan(plan)}
          />
        ))}
      </div>

      <SubscriptionPeriodToggle />
    </div>
  );
}

export { Plans };
