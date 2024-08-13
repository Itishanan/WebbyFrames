"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "500", "700"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html>
        <body>{children}</body>
      </html>
    </Provider>
  );
}
