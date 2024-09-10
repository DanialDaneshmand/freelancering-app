import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProjectApi } from "../../services/projectServices";
const useCreateProject = () => {
   const queryClient= useQueryClient()
  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: createProjectApi,
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

  return { isCreating, createProject };
};

export default useCreateProject;
