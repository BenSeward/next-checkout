import { ShippingDetails } from "src/store/types";

export const onSubmit = async (data: ShippingDetails, updateShippingDetails: any, push: any) => {
  const { firstName, lastName, emailAddress, shippingAddress } = data;

  updateShippingDetails({
    update: {
      firstName,
      lastName,
      emailAddress,
      shippingAddress: {
        addressLineOne: shippingAddress.addressLineOne,
        addressLineTwo: shippingAddress.addressLineTwo,
        townCity: shippingAddress.townCity,
        postCode: shippingAddress.postCode,
      },
    },
    type: "UPDATE",
  });

  return push("/delivery-options");
};
