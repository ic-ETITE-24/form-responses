export interface formResponse {
  ID: number;
  name: string;
  job_profile: string;
  company_name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
}

export interface api {
  Records: formResponse[];
  message: string;
  status: boolean;
}
