import style from "./Button.module.css";

interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "secondary" | "confirm";
  caption: string;
  clickHandler?: () => void;
}

function Button({
  variant = "primary",
  type = "button",
  caption = "button text",
  clickHandler,
}: IButton) {
  return (
    <button
      className={style.button}
      type={type}
      data-variant={variant}
      onClick={clickHandler}
    >
      {caption}
    </button>
  );
}

export { Button };
