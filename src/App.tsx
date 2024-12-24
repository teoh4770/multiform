import "./App.css";

import {
  AddOns,
  FormContainer,
  PersonalInfoForm,
  Plans,
  Sidebar,
  StepControl,
  Summary,
  Steps,
} from "./components";
import { useState } from "react";
import { IFormStep } from "./types";
import { useAtomValue } from "jotai";
import { hasFormErrors } from "./lib";

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
  {
    heading: "Thank you",
    subheading:
      "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
    imageUrl: "/icon-thank-you.svg",
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const stepCount = formSteps.length;
  const {
    heading,
    subheading,
    imageUrl,
    component: StepComponent,
  } = formSteps[currentStep];

  const getPreviousStep = () => setCurrentStep((step) => Math.max(0, step - 1));
  const getNextStep = () => setCurrentStep((step) => (step + 1) % stepCount);

  // if current step is at thank you page, then hide the footer component, and set the current step to 4
  let temp = null;
  if (currentStep === stepCount - 1) {
    temp = stepCount - 2;
  }

  return (
    <>
      <Sidebar>
        <Steps
          stepList={["Your Info", "Select Plan", "Add-Ons", "Summary"]}
          currentStep={temp ?? currentStep}
        />
      </Sidebar>

      <FormContainer
        heading={heading}
        subheading={subheading}
        imageUrl={imageUrl}
      >
        {StepComponent && <StepComponent />}
      </FormContainer>

      {/* Disable the next button if form validation didn't pass... */}
      <div hidden={currentStep === stepCount - 1}>
        <StepControl
          currentStep={currentStep}
          handlePreviousStep={getPreviousStep}
          handleNextStep={getNextStep}
          disabled={useAtomValue(hasFormErrors)}
        />
      </div>
    </>
  );
}

export default App;
