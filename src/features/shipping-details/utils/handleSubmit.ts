import { ShippingDetails } from "src/store/types/types";

export const onSubmit = async (data: ShippingDetails, dispatchShippingDetails: any, push: any) => {
  const { firstName, lastName, emailAddress, shippingAddress } = data;

  dispatchShippingDetails(
    {
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
    "UPDATE"
  );

  return push("/delivery-options");
};
