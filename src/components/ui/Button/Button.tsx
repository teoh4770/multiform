import style from "./Button.module.css";

interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "secondary" | "confirm";
  caption: string;
}

/* 
Usage:
1. <Button type="button" variant="secondary" caption="Go Back" />
2. <Button type="button" variant="primary" caption="Next Step" />
3. <Button type="button" variant="confirm" caption="Confirm" />
*/

function Button({
  variant = "primary",
  type = "button",
  caption = "button text",
}: IButton) {
  return (
    <button className={style.button} type={type} data-variant={variant}>
      {caption}
    </button>
  );
}

export { Button };
