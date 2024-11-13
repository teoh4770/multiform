import { useState } from "react";
import { PlanCard } from "../PlanCard";

type PlanOptions = "arcade" | "advanced" | "pro";

interface IAvailablePlan {
  title: string;
  name: PlanOptions;
  imgUrl: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

const availablePlans: IAvailablePlan[] = [
  {
    title: "Arcade",
    name: "arcade",
    imgUrl: "/icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    title: "Advanced",
    name: "advanced",
    imgUrl: "/icon-advanced.svg",
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    title: "Pro",
    name: "pro",
    imgUrl: "/icon-pro.svg",
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

function Plans({ monthly }: { monthly: boolean }) {
  const [selectedPlan, setSelectedPlan] = useState<PlanOptions>("arcade");

  return (
    <div>
      {availablePlans.map((plan, i) => (
        <PlanCard
          key={i}
          title={plan.title}
          price={monthly ? plan.price.monthly : plan.price.yearly}
          frequency={monthly ? "monthly" : "yearly"}
          imgUrl={plan.imgUrl}
          isSelected={selectedPlan === plan.name}
          onSelect={() => setSelectedPlan(plan.name)}
        />
      ))}
    </div>
  );
}

export { Plans };
