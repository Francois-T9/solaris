export type ContactData = {
  email: string;
  name: string;
  surname: string;
  requestType: string;
  comment: string;
};

export type BillData = {
  email: string;
  file: string;
};

export type Bill = {
  id: number;
  email: string;
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
};

export type CarRequest = {
  email: string;
  name: string;
  surname: string;
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

  contactRequestError: string;
  contactRequestSuccess: string;
  billingRequestError: string;
  billingRequestSuccess: string;
  carRequestError: string;
  carRequestSuccess: string;
  allBills: Bill[] | null;
  allBrands: Brand[];
};
