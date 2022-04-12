import axios from "axios";

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const userRequest = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  header: {
    token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTM0MTQzM2FiM2QyYjU0Y2Q3ZGZjMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTc3OTQxOCwiZXhwIjoxNjUwMDM4NjE4fQ.xOfZSnCOCPLDzEq9RlDztl9CZLXRMSau0qJCD0H4n5o",
  },
});
