import { Card } from "../Card";
import style from "./FormContainer.module.css";

import { PropsWithChildren } from "react";

interface IFormContainer {
  heading: string;
  subheading: string;
  imageUrl?: string;
}

function FormContainer({
  heading,
  subheading,
  imageUrl,
  children,
}: PropsWithChildren<IFormContainer>) {
  return (
    <Card className={style.formContent}>
      {imageUrl && <img src={imageUrl} alt="" />}

      <header className={style.header}>
        <h2 className={style.heading}>{heading}</h2>
        <div className={style.subheading} role="doc-subtitle">
          {subheading}
        </div>
      </header>
      {children}
    </Card>
  );
}

export { FormContainer };
