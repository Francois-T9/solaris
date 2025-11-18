export type ContactData = {
  email: string;
  name: string;
  surname: string;
  requestType: string;
  question: string;
};
export type UsersStore = {
  sendContact: (data: ContactData) => void;
  contactRequestError: string;
  contactRequestSuccess: string;
};
