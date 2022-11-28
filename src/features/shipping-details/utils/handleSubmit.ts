import { useRouter } from "next/router";
import { ShippingDetails } from "src/store/types/types";

export const onSubmit = async (
  data: ShippingDetails,
  updateShippingDetails: any,
  push: any
) => {
  const { firstName, lastName, emailAddress, shippingAddress } = data;

  updateShippingDetails({
    firstName,
    lastName,
    emailAddress,
    shippingAddress: {
      addressLineOne: shippingAddress.addressLineOne,
      addressLineTwo: shippingAddress.addressLineTwo,
      townCity: shippingAddress.townCity,
      postCode: shippingAddress.postCode,
    },
  });

  return push("/delivery-options");
};
