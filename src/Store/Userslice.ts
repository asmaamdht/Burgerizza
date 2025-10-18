import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// تعريف نوع المستخدم
type User = {
  id?: string;
  email: string;
  username: string;
  role:string;
  // [key: string]: any; // لو فيه حقول إضافية ممكن تتحط هنا


  password?: string;
  re_password?: string;
  location?: string;
  phone?: string;

};

// تعريف نوع state للـ slice
type UserState = {
  user: User | null;
};

// الحالة الابتدائية
const initialState: UserState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

// إنشاء الـ slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

// تصدير الـ actions و reducer
export const { setuser, logout } = userSlice.actions;
export default userSlice.reducer;
