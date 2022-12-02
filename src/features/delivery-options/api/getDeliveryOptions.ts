export const getDeliveryOptions = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/BenSeward/77a2ba34575399ffc5b89ee15faefd45/raw/d28d0e09119ab859f529d281cad382c371f6efb9/DeliveryOptions.json"
  ).then((res) => res.json());

  return response.options;
};
