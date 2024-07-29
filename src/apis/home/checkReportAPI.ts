import { request } from "@/apis/axios";

const checkReportAPI = (data: {
  user_id: number
}) => {
  return request("/api/student/post", {
    params: data,
    method: "GET",
  });
};

export default checkReportAPI;