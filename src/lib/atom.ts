import { atom } from "jotai";
import { IAddOn, IPlan, ISummary, IUserInfo } from "../types";

// primitive atom
// readonly atom?

// monthly payment
const isMonthlyPaymentAtom = atom(true);

// user info
const userInfoAtom = atom<IUserInfo>({
  name: "",
  email: "",
  phone: "",
});

// form validation
const hasFormErrors = atom(true);

// plans
const planAtom = atom<IPlan[]>([
  {
    title: "Arcade",
    name: "arcade",
    imgUrl: "/icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90,
    },
    selected: true,
  },
  {
    title: "Advanced",
    name: "advanced",
    imgUrl: "/icon-advanced.svg",
    price: {
      monthly: 12,
      yearly: 120,
    },
    selected: false,
  },
  {
    title: "Pro",
    name: "pro",
    imgUrl: "/icon-pro.svg",
    price: {
      monthly: 15,
      yearly: 150,
    },
    selected: false,
  },
]);

const selectedPlanAtom = atom((get) => {
  const plans = get(planAtom);
  return plans.find((plan) => plan.selected) as IPlan;
});

// addOns
const addOnAtom = atom<IAddOn[]>([
  {
    label: "Online Service",
    sublabel: "Access to multiplayer game",
    name: "online-service",
    price: {
      monthly: 1,
      yearly: 10,
    },
    selected: false,
  },
  {
    label: "Larger storage",
    sublabel: "Extra 1TB of cloud save",
    name: "larger-storage",
    price: {
      monthly: 2,
      yearly: 20,
    },
    selected: false,
  },
  {
    label: "Customizable Profile",
    sublabel: "Custom theme on your profile",
    name: "custom-profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
    selected: false,
  },
]);

const selectedAddOnAtom = atom<IAddOn[]>((get) => {
  const addOns = get(addOnAtom);
  return addOns.filter((addOn) => addOn.selected);
});

const totalPriceAtom = atom((get) => {
  const isMonthlyPayment = get(isMonthlyPaymentAtom);
  const selectedPlan = get(selectedPlanAtom);
  const selectedAddOn = get(selectedAddOnAtom);

  const planPrice = isMonthlyPayment
    ? selectedPlan?.price.monthly
    : selectedPlan?.price.yearly;

  const addOnPrice = selectedAddOn.reduce((prev, curr) => {
    return isMonthlyPayment
      ? prev + curr.price.monthly
      : prev + curr.price.yearly;
  }, 0);

  return planPrice + addOnPrice;
});

// summary (derived)
const summaryAtom = atom<ISummary>((get) => {
  const selectedPlan = get(selectedPlanAtom);
  const selectedAddOns = get(selectedAddOnAtom);
  const totalPrice = get(totalPriceAtom);

  return {
    selectedPlan,
    selectedAddOns,
    totalPrice,
  };
});

export {
  isMonthlyPaymentAtom,
  hasFormErrors,
  userInfoAtom,
  planAtom,
  selectedPlanAtom,
  addOnAtom,
  selectedAddOnAtom,
  summaryAtom,
};
