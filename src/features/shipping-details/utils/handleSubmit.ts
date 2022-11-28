import { ShippingDetails as ShippingDetailsType, useStore } from "src/store";

export const onSubmit = async (
  data: ShippingDetailsType,
  updateShippingDetails: any
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
};
