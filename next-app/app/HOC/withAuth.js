"use client";
import { useSelector } from "react-redux";
import { selectToken } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const token = useSelector(selectToken);
    const router = useRouter();

    useEffect(() => {
      if (!token) {
        const timer = setTimeout(() => {
          router.push("/login");
        }, 3000); // Redirect after 3 seconds
        return () => clearTimeout(timer);
      }
    }, [token, router]);

    if (!token) {
      return (
        <div>
          <p>Please log in first to access this page. Redirecting...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
