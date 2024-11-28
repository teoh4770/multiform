import { Card, Button } from "../ui";
import style from "./StepControl.module.css";

interface IStepControl {
  className?: string;
  currentStep: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

function StepControl({
  className,
  currentStep,
  handleNextStep,
  handlePreviousStep,
}: IStepControl) {
  return (
    <Card className={`${style.card} ${className}`}>
      {currentStep > 0 ? (
        <Button
          type="button"
          variant="secondary"
          caption="Go Back"
          clickHandler={handlePreviousStep}
        />
      ) : (
        <div></div>
      )}

      <Button
        type="button"
        variant="primary"
        caption="Next Step"
        clickHandler={handleNextStep}
      />
      {/* <Button type="button" variant="confirm" caption="Confirm" /> */}
    </Card>
  );
}

export { StepControl };
