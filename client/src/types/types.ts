export type ContactData = {
  email: string;
  name: string;
  surname: string;
  requestType: string;
  comment: string;
};

export type AuthStore = {
  accessToken: string | null;
  fetchMe: (password: string) => void;
  loginError: string | null;
  loginSuccess: string | null;
  isAuth: boolean | null;
  ensureAuth: () => boolean;
};

export type EnergyFormFields = {
  name: string;
  surname: string;
  email: string;
  paquete: string;
  file: FileList;
};

export type FlagsStore = {
  urlArray: Country[];
  fetchFlags: () => void;
};

export type Country = {
  code: string;
  language: string;
  flagUrl: string;
};

export type BillData = {
  email: string;
  file: string;
};

export type Bill = {
  id: number;
  userEmail: string;
  billUrl: string;
  billName: string;
  createdAt: string;
};

export type Brand = {
  name: string;
};

export type BillRequest = {
  email: string;
  name: string;
  surname: string;
  paquete: string;
};

export type CarRequest = {
  email: string;
  name: string;
  surname: string;
  manufacturerName: string;
};

export type ChargerRequest = {
  id: number;
  userEmail: string;
  createdAt: string;
  manufacturerName: string;
};
export type UsersStore = {
  sendContact: (data: ContactData) => void;
  sendCar: (formData: FormData) => void;
  sendBill: (formData: FormData) => void;
  resetBillingState: () => void;
  resetContactState: () => void;
  getBills: () => Promise<boolean>;
  deleteBill: (billId: number) => void;
  getCarBrands: () => void;
  deleteChargerRequest: (chargerRequestId: number) => void;

  getChargerRequests: () => void;
  accessToken: string | null;

  contactRequestError: string;
  contactRequestSuccess: string;
  billingRequestError: string;
  billingRequestSuccess: string;
  carRequestError: string;
  carRequestSuccess: string;
  allBills: Bill[] | null;
  allChargerRequests: ChargerRequest[] | null;

  allBrands: Brand[];
};
