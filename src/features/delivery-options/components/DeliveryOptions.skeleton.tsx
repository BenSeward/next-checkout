import { Skeleton } from "@mui/material";

export const DeliveryOptionsLoading = () => {
  return (
    <div>
      <Skeleton variant="rounded" height={80} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" height={80} sx={{ mb: 2 }} />
      <Skeleton variant="rounded" height={80} />
    </div>
  );
};
