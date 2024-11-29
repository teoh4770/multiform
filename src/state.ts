type PaymentFormStep = "Your Info" | "Select Plan" | "Add-Ons" | "Summary";

interface AddOn {
  label: string; // Name of the add-on
  price: number; // Price of the add-on
}

interface Subscription {
  name: "Arcade" | "Advanced" | "Pro"; // Subscription plan name (strict types)
  price: number; // Price of the subscription plan
}

interface ISummary {
  period: "monthly" | "yearly"; // Billing period
  subscription: Subscription; // Subscription details
  addOns: AddOn[]; // List of selected add-ons
}

const steps: PaymentFormStep[] = [
  "Your Info",
  "Select Plan",
  "Add-Ons",
  "Summary",
];

// 1. determine the data structure for this payment form
// - paymentformlabels
// - structure to keep track of
//  - personal info
//  - plan
//  - pick add-ons
//  - summary

const paymentFormLabels = [
  {
    step: 1,
    label: "Your Info",
    heading: "Personal info",
    subheading: "Please provide your name, email address, and phone number.",
  },
  {
    step: 2,
    label: "Select Plan",
    heading: "Select your plan",
    subheading: "You have the option of monthly or yearly billing.",
  },
  {
    step: 3,
    label: "Add-ons",
    heading: "Pick add-ons",
    subheading: "Add-ons help enhance your gaming experience.",
  },
  {
    step: 4,
    label: "Summary",
    heading: "Finishing up",
    subheading: "Double-check everything looks OK before confirming.",
  },
];

const personalInfo = [
  {
    name: "name",
    value: "",
  },
  {
    name: "email",
    value: "",
  },
  {
    name: "phone",
    value: "",
  },
];

let monthly = true; // as a state for user to toggle to show monthly or yearly pricing

type PlanOptions = "arcade" | "advanced" | "pro";

interface IAvailablePlan {
  title: string;
  name: PlanOptions;
  imgUrl: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

const availablePlans: IAvailablePlan[] = [
  {
    title: "Arcade",
    name: "arcade",
    imgUrl: "/icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    title: "Advanced",
    name: "advanced",
    imgUrl: "/icon-advanced.svg",
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    title: "Pro",
    name: "pro",
    imgUrl: "/icon-pro.svg",
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

const selectedPlan = {
  name: "arcade", // PlanOptions
  price: 9, // arcade monthly price as default
  monthly: true,
};

type AddOnOptions = "online-service" | "larger-storage" | "custom-profile";

interface IAvailableAddOns {
  label: string;
  sublabel: string;
  name: AddOnOptions;
  price: {
    monthly: number;
    yearly: number;
  };
}

const availableAddOns: IAvailableAddOns[] = [
  {
    label: "Online Service",
    sublabel: "Access to multiplayer game",
    name: "online-service",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    label: "Larger storage",
    sublabel: "Extra 1TB of cloud save",
    name: "larger-storage",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    label: "Customizable Profile",
    sublabel: "Custom theme on your profile",
    name: "custom-profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

const addOnOptions: Record<AddOnOptions, boolean> = {
  "online-service": false,
  "larger-storage": false,
  "custom-profile": false,
};

// derived state (this state changed based on other states)
const summary: ISummary = {
  period: "monthly",
  subscription: {
    name: "Arcade",
    price: 9,
  },
  addOns: [
    { label: "Online Service", price: 1 },
    { label: "Larger Storage", price: 2 },
  ],
};
