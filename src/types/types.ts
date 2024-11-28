import { AddOnOptions, PlanOptions } from "./enums";

interface IUserInfo {
  name: string;
  email: string;
  phone: string;
}

interface IAddOn {
  label: string;
  sublabel: string;
  name: AddOnOptions;
  price: {
    monthly: number;
    yearly: number;
  };
  selected: boolean;
}

interface IPlan {
  title: string;
  name: PlanOptions;
  imgUrl: string;
  price: {
    monthly: number;
    yearly: number;
  };
  selected: boolean;
}

interface ISummary {
  selectedPlan: IPlan;
  selectedAddOns: IAddOn[];
  totalPrice: number;
}

export type { IUserInfo, IAddOn, IPlan, ISummary };
