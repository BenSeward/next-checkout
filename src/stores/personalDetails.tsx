import create from "zustand";

type PersonalDetails = {
  firstName: string;
  lastName: string;
  emailAddress: string;
};

type PersonalDetailsStore = {
  personalDetails: PersonalDetails;
  updatePersonalDetails: (personalDetail: Partial<PersonalDetails>) => void;
};

export const usePersonalDetailsStore = create<PersonalDetailsStore>((set) => ({
  personalDetails: {
    firstName: "",
    lastName: "",
    emailAddress: "",
  },
  updatePersonalDetails: (update) =>
    set((state) => ({
      personalDetails: {
        ...state.personalDetails,
        ...update,
      },
    })),
}));
