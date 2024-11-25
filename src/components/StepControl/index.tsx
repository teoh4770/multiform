import { Card, Button } from "../ui";
import style from "./StepControl.module.css";

interface IStepControl {
  className?: string;
}

function StepControl({ className }: IStepControl) {
  // having a global state of current steps
  // the button state will change based on the current steps condition
  // if at first step, then no previous button
  // if at last step, next step change to confirm button
  // previous button -> go back to the previous page
  // next button -> go to the next step

  return (
    <Card className={`${style.card} ${className}`}>
      <Button type="button" variant="secondary" caption="Go Back" />
      <Button type="button" variant="primary" caption="Next Step" />
      <Button type="button" variant="confirm" caption="Confirm" />
    </Card>
  );
}

export { StepControl };
