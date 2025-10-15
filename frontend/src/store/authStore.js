import { create } from "zustand";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const getUserFromStorage = () => {
  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
    return null;
  }
};

export const useAuthStore = create((set) => ({
  user: getUserFromStorage(), 
  token: localStorage.getItem("token") || null,
  loading: false,
  userDetails: null,

  login: async (email, password) => {
    set({ loading: true });
    try {
      console.log("BASE_URL:", BASE_URL);
      const res = await fetch(`${BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      console.log("Login result:", result);
      
      if (!res.ok) {
        throw new Error(result.message || "Error in login");
      }
      
      console.log("Setting user:", result.user);
      console.log("Setting token:", result.token);
      set({ user: result.user, token: result.token });
    
      localStorage.setItem("token", result.token);
    
      localStorage.setItem("user", JSON.stringify(result.user));
      
      toast.success("Login Successful");
      
     
      const currentState = useAuthStore.getState();
      console.log("Current store state after login:", currentState);
      
      return result;
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err.message || "Error in login");
    } finally {
      set({ loading: false });
    }
  },

  sendOtp: async (data) => {
    set({ loading: true });
    try {
      const res = await fetch(`${BASE_URL}/user/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, otp: data.otp }),
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message || "Error in verification");
      }
      if (result.success) {
        set({ userDetails: data });
      }
      toast.success(result.message || "Verification Successful");

      return result;
    } catch (err) {
      toast.error(err.message || "Error in verification");
    } finally {
      set({ loading: false });
    }
  },
  signup: async (otp) => {
    set({ loading: true });
    try {
      const { userDetails } = useAuthStore.getState();
      const res = await fetch(`${BASE_URL}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userDetails, otp }),
      });
      console.log("userDetails signup", userDetails);
      const result = await res.json();
      console.log("result signup", result);
      if (!res.ok) {
        throw new Error(result.message || "Error in Signup");
      }
      set({ user: result.user, userDetails: null });
      toast.success("Signup Successful");
      return result;
    } catch (err) {
      toast.error(err.message || "Error in Signup");
    } finally {
      set({ loading: false });
    }
  },

  logout: () => {
    set({ user: null, token: null, userDetails: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
  },

  initializeAuth: () => {
    const token = localStorage.getItem("token");
    const user = getUserFromStorage();
    
    if (token && user) {
      console.log("Initializing auth with stored data:", { user, token });
      set({ user, token });
    } else {
      console.log("No stored auth data found");
      set({ user: null, token: null });
    }
  },


  updateUser: (userData) => {
    console.log("Updating user data:", userData);
    set({ user: userData });
    localStorage.setItem("user", JSON.stringify(userData));
  },
}));
