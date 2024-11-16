import { useState } from "react";
import style from "./StepIndicator.module.css";

interface IStepIndicator {
  stepLabel: string;
  isActive: boolean;
}

function StepIndicator({ stepLabel, isActive }: IStepIndicator) {
  return (
    <div className={style.stepIndicator} data-active={isActive}>
      {stepLabel}
    </div>
  );
}

export { StepIndicator };
