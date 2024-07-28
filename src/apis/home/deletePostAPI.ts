import { request } from "@/apis/axios";

const deletePostAPI = (data: {
  user_id: number,
  post_id: number,
}) => {
  return request("/api/student/post", {
    params: data,
    method: "DELETE",
  });
};

export default deletePostAPI;