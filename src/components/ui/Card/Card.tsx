import { PropsWithChildren } from "react";
import style from "./Card.module.css";

interface ICard {
  className?: string;
}

function Card({ children, className }: PropsWithChildren<ICard>) {
  // how to connect child state with parent state

  return <article className={`${style.card} ${className}`}>{children}</article>;
}

export { Card };
