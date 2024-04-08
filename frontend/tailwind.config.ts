import type { Config } from "tailwindcss";
import { PluginUtils } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./app/chats/**/*.{ts,tsx}",
    "./src/page-s/**/**/*.{ts,tsx}",
    "./src/widgets/**/**/*.{ts,tsx}",
    "./src/features/**/**/*.{ts,tsx}",
    "./src/entities/**/**/*.{ts,tsx}",
    "./src/shared/**/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        chatDefaultBg: "url('/src/shared/assets/chatContent/defaultBg.png')",
      },
      utilities: {
        ".h-custom-calc": {
          height: "calc(100vh - 100px)",
        },
      },
      colors: {
        primary: {
          bold: "#25D366",
          normal: "#D9FDD3",
          main: "#00a884",
        },
        danger: "#ea0038",
        white: "#fff",
        gray: {
          bold: "#6B7C85",
          background: "#F0F2F5",
          main: "#DDDEDD",
        },
      },
      fontSize: {
        sm: "14px",
        base: "20px",
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".h-custom-calc": {
          height: "calc(100vh - 100px)",
        },
      });
    },
  ],
};
export default config;
