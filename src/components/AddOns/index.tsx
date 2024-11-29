import { AddOnCard } from "./AddOnCard";
import { useAtom, useAtomValue } from "jotai";
import { addOnAtom, isMonthlyPaymentAtom } from "../../lib";
import { IAddOn } from "../../types";

function AddOns() {
  const isMonthly = useAtomValue(isMonthlyPaymentAtom);
  const [addOns, setAddOns] = useAtom(addOnAtom);

  const handleSelectedAddOn = (selectedAddOn: IAddOn) => {
    setAddOns((value) =>
      value.map((addOn) => {
        return addOn.name === selectedAddOn.name
          ? {
              ...addOn,
              selected: !addOn.selected,
            }
          : addOn;
      }),
    );
  };

  return (
    <div>
      {addOns.map((addOn, i) => (
        <AddOnCard
          key={i}
          label={addOn.label}
          sublabel={addOn.sublabel}
          name={addOn.name}
          price={isMonthly ? addOn.price.monthly : addOn.price.yearly}
          frequency={isMonthly ? "monthly" : "yearly"}
          isChecked={addOn.selected}
          onSelect={() => handleSelectedAddOn(addOn)}
        />
      ))}
    </div>
  );
}

export { AddOns };
