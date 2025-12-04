import { deleteBill, getBills } from "@/api/bills";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useBills = () => {
  const queryClient = useQueryClient();

  const billsQuery = useQuery({
    queryKey: ["bills"],
    queryFn: getBills,
  });

  const deleteBillMutation = useMutation({
    mutationFn: deleteBill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bills"] });
    },
  });

  return {
    ...billsQuery,
    deleteBill: deleteBillMutation.mutate,
    deleteError: deleteBillMutation.isError,
    isDeleting: deleteBillMutation.isPending,
  };
};
