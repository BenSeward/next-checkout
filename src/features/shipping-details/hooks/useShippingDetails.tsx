import { useStore } from "src/store";
import { ShippingDetails } from "src/store/types";

export const useShippingDetails = () => {
  const { updateShippingDetails } = useStore();

  const updateField = (data: Partial<ShippingDetails>) => {
    updateShippingDetails({
      update: data,
      type: "UPDATE",
    });
  };

  return { updateField };
};
