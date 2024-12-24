import { useAtomValue, useSetAtom } from "jotai";
import { currentStepAtom, isMonthlyPaymentAtom, summaryAtom } from "../../lib";
import style from "./Summary.module.css";

function Summary() {
  const isMonthly = useAtomValue(isMonthlyPaymentAtom);
  const summary = useAtomValue(summaryAtom);
  const setCurrentStep = useSetAtom(currentStepAtom);

  const selectedPlan = summary.selectedPlan;
  const selectedAddOns = summary.selectedAddOns;
  const periodShortLabel = isMonthly ? "mo" : "yr";

  const handleSubscriptionChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const PLAN_SECTION_STEP = 1;
    setCurrentStep(PLAN_SECTION_STEP);
  };

  return (
    <article className={style.summary} aria-label="payment summary">
      <div>
        {/* Subscription section */}
        <div className={`${style.summaryItem} ${style.subscription}`}>
          <div>
            <div className={style.label}>
              {selectedPlan.title} ({isMonthly ? "Monthly" : "Yearly"})
            </div>
            <a
              href="#"
              className={style.link}
              onClick={handleSubscriptionChange}
            >
              Change
            </a>
          </div>
          <div className={`${style.subscription} ${style.price}`}>
            $
            {isMonthly ? selectedPlan.price.monthly : selectedPlan.price.yearly}
            /{periodShortLabel}
          </div>
        </div>

        <hr className={style.lineBreak} />

        {/* additional service */}
        {selectedAddOns.length > 0 &&
          selectedAddOns.map((addOn, index) => (
            <div key={index} className={`${style.summaryItem}`}>
              <div className={style.label}>{addOn.label}</div>
              <div className={style.price}>
                ${isMonthly ? addOn.price.monthly : addOn.price.yearly}/
                {periodShortLabel}
              </div>
            </div>
          ))}
      </div>

      <div className={`${style.summaryItem}`}>
        <div className={style.label}>
          Total (per {isMonthly ? "month" : "year"})
        </div>
        <div className={`${style.price} ${style.total}`}>
          +${summary.totalPrice}/{periodShortLabel}
        </div>
      </div>
    </article>
  );
}

export { Summary };
