import { request } from "@/apis/axios";

const reportPostAPI = (data: {
  user_id: number,
  post_id: number,
  reason: string,
}) => {
  return request("/api/student/report-post", {
    data: data,
    method: "POST",
  });
};

export default reportPostAPI;