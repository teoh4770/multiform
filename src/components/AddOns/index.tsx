import { useEffect, useState } from "react";
import { AddOnCard } from "./AddOnCard";

type AddOnOptions = "online-service" | "larger-storage" | "custom-profile";

interface IAvailableAddOns {
  label: string;
  sublabel: string;
  name: AddOnOptions;
  price: {
    monthly: number;
    yearly: number;
  };
}

const availableAddOns: IAvailableAddOns[] = [
  {
    label: "Online Service",
    sublabel: "Access to multiplayer game",
    name: "online-service",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    label: "Larger storage",
    sublabel: "Extra 1TB of cloud save",
    name: "larger-storage",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    label: "Customizable Profile",
    sublabel: "Custom theme on your profile",
    name: "custom-profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const addOnOptions: Record<AddOnOptions, boolean> = {
  "online-service": false,
  "larger-storage": false,
  "custom-profile": false,
};

function AddOns({ monthly }: { monthly: boolean }) {
  const [addOnOptionsState, setAddOnOptionsState] = useState(addOnOptions);

  useEffect(() => {
    console.log(addOnOptionsState);
  }, [addOnOptionsState]);

  return (
    <div>
      {availableAddOns.map((addOn, i) => (
        <AddOnCard
          key={i}
          label={addOn.label}
          sublabel={addOn.sublabel}
          name={addOn.name}
          price={monthly ? addOn.price.monthly : addOn.price.yearly}
          frequency={monthly ? "monthly" : "yearly"}
          isChecked={addOnOptionsState[addOn.name]}
          onSelect={() =>
            setAddOnOptionsState({
              ...addOnOptionsState,
              [addOn.name]: !addOnOptionsState[addOn.name],
            })
          }
        />
      ))}
    </div>
  );
}

export { AddOns };
