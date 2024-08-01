import { request } from "@/apis/axios";

const editReportAPI = (data: {
  user_id: number,
  post_id: string,
  approval: number,
}) => {
  return request("/api/user/login", {
    data: data,
    method: "POST",
  });
};

export default editReportAPI;