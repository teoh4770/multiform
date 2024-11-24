import style from "./Button.module.css";

interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "secondary" | "confirm";
  caption: string;
}

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
