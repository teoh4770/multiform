import style from "./Button.module.css";

interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "secondary" | "confirm";
  caption: string;
  clickHandler?: () => void;
  disabled?: boolean;
}

function Button({
  variant = "primary",
  type = "button",
  caption = "button text",
  clickHandler,
  disabled,
}: IButton) {
  return (
    <button
      className={style.button}
      type={type}
      data-variant={variant}
      onClick={clickHandler}
      disabled={disabled}
    >
      {caption}
    </button>
  );
}

export { Button };
