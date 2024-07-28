import { request } from "@/apis/axios";

const addPostAPI = (data: {
  content: string,
  user_id: number
}) => {
  return request("/api/student/post", {
    data: data,
    method: "POST",
  });
};

export default addPostAPI;