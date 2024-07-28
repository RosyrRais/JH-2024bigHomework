import { request } from "@/apis/axios";

const getPostsAPI = () => {
  return request("/api/student/post", {
    method: "GET",
  });
};

export default getPostsAPI;