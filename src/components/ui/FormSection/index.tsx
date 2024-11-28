import { Card } from "../Card";
import style from "./FormSection.module.css";

import { PropsWithChildren } from "react";

interface IFormSection {
  heading: string;
  subheading: string;
}

function FormSection({
  heading,
  subheading,
  children,
}: PropsWithChildren<IFormSection>) {
  return (
    <Card className={style.formContent}>
      <header>
        <h2 className={style.heading}>{heading}</h2>
        <div className={style.subheading} role="doc-subtitle">
          {subheading}
        </div>
      </header>
      {children}
    </Card>
  );
}

export { FormSection };
