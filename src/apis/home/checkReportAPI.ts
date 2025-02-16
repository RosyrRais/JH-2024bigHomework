import { request } from "@/apis/axios";

const checkReportAPI = (data: {
  user_id: number
}) => {
  return request("/api/student/report-post", {
    params: data,
    method: "GET",
  });
};

export default checkReportAPI;