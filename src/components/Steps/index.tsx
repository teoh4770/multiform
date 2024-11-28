import { Step } from "./Step";
import style from "./Steps.module.css";

type PaymentFormStep = "Your Info" | "Select Plan" | "Add-Ons" | "Summary";

// Belonged to Steps component
interface ISteps {
  stepList: PaymentFormStep[];
  currentStep: number;
}

function Steps({ stepList, currentStep }: ISteps) {
  return (
    <ol className={style.steps} role="list">
      {stepList.map((step, i) => (
        <li key={i}>
          <Step
            caption={step}
            stepCount={i + 1} // think of it as label, so base 1
            isCurrentStep={currentStep === i} // base 0
          />
        </li>
      ))}
    </ol>
  );
}

export { Steps };
