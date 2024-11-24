import style from "./Summary.module.css";

interface AddOn {
  label: string; // Name of the add-on
  price: number; // Price of the add-on
}

interface Subscription {
  name: "arcade" | "advanced" | "pro"; // Subscription plan name (strict types)
  price: number; // Price of the subscription plan
}

interface ISummary {
  period: "monthly" | "yearly"; // Billing period
  subscription: Subscription; // Subscription details
  addOns: AddOn[]; // List of selected add-ons
}

// interface ISummary2 {
//   monthly: boolean;
//   plan: Subscription;
//   addOns: AddOn[];
// }

// will need to change the period here

function Summary({ period, subscription, addOns }: ISummary) {
  const periodLabel = period === "monthly" ? "mo" : "yr";

  return (
    <article className={style.summary} aria-label="payment summary">
      <div>
        {/* Subscription section */}
        <div className={`${style.summaryItem} ${style.subscription}`}>
          <div>
            <div className={style.label}>
              {subscription.name} ({period})
            </div>
            {/* Link to change subscription */}
            <a
              href="#"
              className={style.link}
              // onClick={handleSubscriptionChange}
            >
              Change
            </a>
          </div>
          <div className={`${style.subscription} ${style.price}`}>
            ${subscription.price}/{periodLabel}
          </div>
        </div>

        <hr className={style.lineBreak} />

        {/* additional service */}
        {addOns.length > 0 &&
          addOns.map((addOn, index) => (
            <div key={index} className={`${style.summaryItem}`}>
              <div className={style.label}>{addOn.label}</div>
              <div className={style.price}>
                ${addOn.price}/{periodLabel}
              </div>
            </div>
          ))}
      </div>

      <div className={`${style.summaryItem}`}>
        <div className={style.label}>Total (per {period})</div>
        <div className={`${style.price} ${style.total}`}>
          +$12/{periodLabel}
        </div>
      </div>
    </article>
  );
}

export { Summary };
