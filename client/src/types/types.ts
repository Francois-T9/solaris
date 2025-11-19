export type ContactData = {
  email: string;
  name: string;
  surname: string;
  requestType: string;
  question: string;
};

export type BillData = {
  email: string;
  file: string;
};
export type UsersStore = {
  sendContact: (data: ContactData) => void;
  sendBill: (formData: FormData) => void;
  resetBillingState: () => void;
  resetContactState: () => void;

  contactRequestError: string;
  contactRequestSuccess: string;
  billingRequestError: string;
  billingRequestSuccess: string;
};
