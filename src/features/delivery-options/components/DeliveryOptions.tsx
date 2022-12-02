import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getDeliveryOptions } from "src/features/delivery-options/api/getDeliveryOptions";
import { DeliveryOptionsLoading } from "src/features/delivery-options/components/DeliveryOptions.skeleton";
import { useStore } from "src/store";

type ShippingOption = {
  id: string;
  name: string;
  label: string;
  price: number;
};

export const DeliveryOptions = () => {
  const [deliveryOptions, setDeliveryOptions] = useState<false | ShippingOption[]>(false);
  const { deliveryOption, updateDeliveryOption } = useStore();

  useEffect(() => {
    (async () => {
      const deliveryOptions = await getDeliveryOptions();
      setDeliveryOptions(deliveryOptions);
    })();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h6">Delivery Options</Typography>
      <FormControl>
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={deliveryOption}
          onChange={(e) => updateDeliveryOption({ update: e.target.value, type: "UPDATE" })}
        >
          {!deliveryOptions ? (
            <DeliveryOptionsLoading />
          ) : (
            deliveryOptions.map((shippingItem) => (
              <FormControlLabel
                key={shippingItem.id}
                value={shippingItem.id}
                control={<Radio />}
                label={shippingItem.name}
              />
            ))
          )}
        </RadioGroup>
      </FormControl>
    </Container>
  );
};
