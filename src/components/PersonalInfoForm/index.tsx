import { Input } from "../ui";
import style from "./PersonalInfoForm.module.css";

function PersonalInfoForm() {
  return (
    <>
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
    </>
  );
}

export { PersonalInfoForm };
