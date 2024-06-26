import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOwnerProjectApi } from "../../services/projectServices";
import toast from "react-hot-toast";
const useRemoveProjects = () => {
   const queryClient= useQueryClient()
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: deleteOwnerProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey:["owner-projects"]
      })
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isDeleting, removeProject };
};

export default useRemoveProjects;
