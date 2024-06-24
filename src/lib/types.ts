const foundAtOptions = [
  "linkedin",
  "indeed",
  "weworkremotely",
  "commitasync",
  "wellfound",
  "direct",
] as const;
export type foundAt = (typeof foundAtOptions)[number];

export type Application = {
  name: string;
  foundAt: foundAt;
  role: string;
  website: string;
  assessmentAt?: string;
  status: status;
  appliedAt: string;
  interviewedAt?: string;
  rejectedAt?: string;
  acceptedAt?: string;
  notes?: string;
  salary?: {
    min: number;
    max: number;
  };
};

const statusOptions = [
  "Applied",
  "Rejected",
  "No Response",
  "Interviewed",
  "Assessment",
  "Accepted",
  "To",
] as const;
export type status = (typeof statusOptions)[number];

export type PieSlice = [status, number];
export type LineChartDataPoint = { [month: string]: number } & {
  date?: string;
  day: number;
};
