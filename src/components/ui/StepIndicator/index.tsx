import style from "./StepIndicator.module.css";

interface IStepIndicator {
  stepLabel: string;
  isActive: boolean;
  ariaLabel?: string;
  totalSteps?: number;
}

function StepIndicator({
  stepLabel,
  isActive,
  ariaLabel,
  totalSteps,
}: IStepIndicator) {
  // Fallback for aria-label if parent doesn't provide it
  const ariaLabelValue =
    ariaLabel ??
    `Step ${stepLabel}${totalSteps ? ` of ${totalSteps}` : ""}${isActive ? ", current step" : ""}`;

  return (
    <div
      className={style.stepIndicator}
      data-active={isActive}
      aria-label={ariaLabelValue}
    >
      {stepLabel}
    </div>
  );
}

export { StepIndicator };
