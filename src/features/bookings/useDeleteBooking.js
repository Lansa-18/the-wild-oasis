import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),

    onSuccess: () => {
      toast.success("Booking successfully deleted");

      queryClient.invalidateQueries({ active: true });
    },
    onError: () =>
      toast.error("There was an error while deleting the booking."),
  });

  return { isDeletingBooking, deleteBooking };
}
