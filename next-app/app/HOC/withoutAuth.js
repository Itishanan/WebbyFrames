import { useSelector } from "react-redux";
import { selectToken } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withoutAuth = (WrappedComponent) => {
  return (props) => {
    const token = useSelector(selectToken);
    const router = useRouter();

    useEffect(() => {
      if (token) {
        router.push("/dashboard");
      }
    }, [token]);

    return !token ? <WrappedComponent {...props} /> : null;
  };
};

export default withoutAuth;
