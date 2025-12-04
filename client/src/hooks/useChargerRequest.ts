import { deleteChargerRequest, getChargers } from "@/api/chargers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
export const useChargerRequest = () => {
  const queryClient = useQueryClient();

  const queryChargers = useQuery({
    queryKey: ["chargerRequests"],
    queryFn: getChargers,
  });

  const deleteChargerRequestMutation = useMutation({
    mutationFn: deleteChargerRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chargerRequests"] });
    },
  });

  return {
    ...queryChargers,
    deleteChargerRequest: deleteChargerRequestMutation.mutate,
    isDeleting: deleteChargerRequestMutation.isPending,
    deleteError: deleteChargerRequestMutation.isError,
  };
};
