import { useAtom } from "jotai";
import { Input } from "../ui";
import { userInfoAtom } from "../../lib";

function PersonalInfoForm() {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  // required does not work on client side?

  return (
    <>
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="e.g. Stephen King"
        value={userInfo.name}
        onChange={(e) => {
          setUserInfo((userInfo) => ({
            ...userInfo,
            name: e.target.value,
          }));
        }}
      />
      <Input
        type="email"
        name="email"
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        value={userInfo.email}
        onChange={(e) => {
          setUserInfo((userInfo) => ({
            ...userInfo,
            email: e.target.value,
          }));
        }}
      />
      <Input
        type="tel"
        name="phone"
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        value={userInfo.phone}
        onChange={(e) => {
          setUserInfo((userInfo) => ({
            ...userInfo,
            phone: e.target.value,
          }));
        }}
      />
    </>
  );
}

export { PersonalInfoForm };
