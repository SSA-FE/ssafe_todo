import { create } from "zustand";
import  { createJSONStorage, persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      forms: [],
      addForm: (form) => set((state) => ({ forms: [...state.forms, 
        {
            id: Date.toLocalTimeString(),
            

        }] })),
      removeForm: (id) =>
        set((state) => ({
          forms: state.forms.filter((form) => form.id !== id),
        })),
    }),

    {
      name: "forms-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
