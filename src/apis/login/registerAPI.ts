import { request } from "@/apis/axios";

const registerAPI = (data: {
  username: string,
  password: string,
  name: string,
  user_type: number,
}) => {
  return request("/api/user/reg", {
    data: data,
    method: "POST",
  });
};

export default registerAPI;