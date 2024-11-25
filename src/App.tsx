// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import { FormSection, SideBar, StepControl } from "./components";
import { Input } from "./components/ui";

function App() {
  return (
    <>
      <SideBar />

      <FormSection
        heading="Personal info"
        subheading="Please provide your name, email address, and phone number."
      >
        {/* Part that change */}
        <div>
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="e.g. Stephen King"
          />
          <Input
            type="email"
            name="email"
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
          />
          <Input
            type="tel"
            name="phone"
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </FormSection>

      <StepControl  />
    </>
  );
}

export default App;
