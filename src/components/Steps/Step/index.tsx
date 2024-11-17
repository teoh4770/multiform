import { StepIndicator } from "../../ui";
import style from "./Step.module.css";

interface IStep {
  caption: string;
  stepCount: number;
  isCurrentStep: boolean;
}

function Step({ caption, stepCount, isCurrentStep }: IStep) {
  return (
    <div className={style.stepContainer}>
      <div>
        <StepIndicator
          stepLabel={String(stepCount)}
          isActive={isCurrentStep}
          ariaLabel={String(stepCount)}
        />
      </div>

      <div className={style.info}>
        <div className={style.sublabel}>step {stepCount}</div>
        <p className={style.label}>{caption}</p>
      </div>
    </div>
  );
}

export { Step };
