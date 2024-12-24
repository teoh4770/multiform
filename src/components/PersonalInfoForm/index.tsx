// import { useAtom } from "jotai";
// import { Input } from "../ui";
// import { userInfoAtom } from "../../lib";
// import { useForm, SubmitHandler } from "react-hook-form";

import style from "./PersonalInfoForm.module.css";

import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import { hasFormErrors, userInfoAtom } from "../../lib";

interface IUserInfo {
  name: string;
  email: string;
  phone: string;
}

function PersonalInfoForm() {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  const [errors, setErrors] = useState<IUserInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const setFormErrorState = useSetAtom(hasFormErrors);

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "name": {
        if (!value) return "This field is required";
        if (value.length < 4) return "Must have at least 4 characters";
        if (value.length > 70) return "Must be between 4 to 70 characters";
        return "";
      }

      case "email": {
        if (!value) return "This field is required";
        // eslint-disable-next-line no-useless-escape
        const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        if (!isEmailValid) return "Please provide a valid email address";
        return "";
      }

      case "phone": {
        if (!value) return "This field is required";
        const isPhoneValid = /^\d{10}$/.test(value);
        if (!isPhoneValid) return "Must have 10 digits only";
        return "";
      }

      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    // Update userInfo state
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate field and update errors state
    const errorMessage = validateField(name, value);
    const newErrors = {
      ...errors,
      [name]: errorMessage,
    };
    setErrors(newErrors);

    // Update global form error state
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    setFormErrorState(hasErrors);
  };

  return (
    <>
      <form className={style.formContainer}>
        <div className={style.formControl}>
          <div className={style.heading}>
            <label htmlFor="name">Name</label>
            {errors.name && (
              <span className={style.error} role="alert">
                {errors.name}
              </span>
            )}
          </div>
          <input
            className={style.inputBox}
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={userInfo.name}
            onChange={handleChange}
            aria-invalid={errors.name != ""}
          />
        </div>

        <div className={style.formControl}>
          <div className={style.heading}>
            <label htmlFor="email">Email</label>
            {errors.email && (
              <span className={style.error} role="alert">
                {errors.email}
              </span>
            )}
          </div>
          <input
            className={style.inputBox}
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={userInfo.email}
            onChange={handleChange}
            aria-invalid={errors.email != ""}
          />
        </div>

        <div className={style.formControl}>
          <div className={style.heading}>
            <label htmlFor="phone">Phone Number</label>
            {errors.email && (
              <span className={style.error} role="alert">
                {errors.phone}
              </span>
            )}
          </div>
          <input
            className={style.inputBox}
            type="tel"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={userInfo.phone}
            onChange={handleChange}
            aria-invalid={errors.phone != ""}
          />
        </div>
      </form>
    </>
  );
}

export { PersonalInfoForm };
