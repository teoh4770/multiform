// container components that holds a list of steps?
// position will change depends on the viewport?
// mobile view (top, just step indicators)
// tablet view / desktop view (side, step indicators and their detail)

// sidebar shouldn't know about steps
// just a container
// the container
import { Steps } from "../Steps";
import style from "./SideBar.module.css";

type PaymentFormStep = "Your Info" | "Select Plan" | "Add-Ons" | "Summary";

const steps: PaymentFormStep[] = [
  "Your Info",
  "Select Plan",
  "Add-Ons",
  "Summary",
];

function SideBar() {
  return (
    <aside className={style.sideBar}>
      <Steps stepList={steps} currentStep={2} />
    </aside>
  );
}

export { SideBar };
