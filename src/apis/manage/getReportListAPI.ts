import { request } from "@/apis/axios";

const getReportListAPI = (data: {
  user_id: number
}) => {
  return request("/api/admin/report", {
    params: data,
    method: "GET",
  });
};

export default getReportListAPI;