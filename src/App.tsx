import "./App.css";

import {
  AddOns,
  FormSection,
  PersonalInfoForm,
  Plans,
  Sidebar,
  StepControl,
  Summary,
  Steps,
} from "./components";
import { useState } from "react";
import { IFormStep } from "./types";

const formSteps: IFormStep[] = [
  {
    heading: "Personal info",
    subheading: "Please provide your name, email address, and phone number.",
    component: PersonalInfoForm,
  },
  {
    heading: "Select your plan",
    subheading: "You have the option of monthly or yearly billing.",
    component: Plans,
  },
  {
    heading: "Pick add-ons",
    subheading: "Add-ons help enhance your gaming experience.",
    component: AddOns,
  },
  {
    heading: "Finishing up",
    subheading: "Double-check everything looks OK before confirming.",
    component: Summary,
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const stepCount = formSteps.length;
  const {
    heading,
    subheading,
    component: StepComponent,
  } = formSteps[currentStep];

  const getPreviousStep = () => setCurrentStep((step) => Math.max(0, step - 1));
  const getNextStep = () => setCurrentStep((step) => (step + 1) % stepCount);

  return (
    <>
      <Sidebar>
        <Steps
          stepList={["Your Info", "Select Plan", "Add-Ons", "Summary"]}
          currentStep={currentStep}
        />
      </Sidebar>

      <FormSection heading={heading} subheading={subheading}>
        <StepComponent />
      </FormSection>

      <StepControl
        currentStep={currentStep}
        handlePreviousStep={getPreviousStep}
        handleNextStep={getNextStep}
      />
    </>
  );
}

export default App;
