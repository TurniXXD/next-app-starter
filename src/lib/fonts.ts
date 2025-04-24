import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // pick the weights you need
  variable: "--font-montserrat",
  display: "swap",
});
