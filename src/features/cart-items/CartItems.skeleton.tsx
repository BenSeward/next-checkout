import { Grid, Skeleton } from "@mui/material";

export const CartItemsSkeleton = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Skeleton variant="rounded" width={"fullWidth"} height={80} />
      </Grid>
      <Grid item xs={8}>
        <Skeleton variant="rounded" width={100} height={20} sx={{ mb: 1 }} />
        <Skeleton
          variant="rounded"
          width={"fullWidth"}
          height={20}
          sx={{ mb: 1 }}
        />
        <Skeleton
          variant="rounded"
          width={"fullWidth"}
          height={"20"}
          sx={{ mb: 1 }}
        />
      </Grid>
    </Grid>
  );
};
