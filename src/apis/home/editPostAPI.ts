import { request } from "@/apis/axios";

const editPostAPI = (data: {
  user_id: number,
  post_id: number,
  content: string,
}) => {
  return request("/api/student/post", {
    data: data,
    method: "PUT",
  });
};

export default editPostAPI;