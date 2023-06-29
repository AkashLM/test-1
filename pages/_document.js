import { Html, Head, Main, NextScript } from "next/document";
import { UserProvider } from "../context/userContext";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" w-screen min-w-[350px] px-2 lg:px-6 xl:px-8 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
