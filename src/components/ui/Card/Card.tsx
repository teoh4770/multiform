import { PropsWithChildren } from "react";
import style from "./Card.module.css";

function Card({ children }: PropsWithChildren) {
  // how to connect child state with parent state

  return <article className={style.card}>{children}</article>;
}

export { Card };
