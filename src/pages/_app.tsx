import type { AppProps } from "next/app";

import "./globals.css";
import ScreenBack from "@/components/ScreenBack";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import ReactQueryWrapper from "@/components/ReactQueryWrapper";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ReactQueryWrapper initalState={[]}>
      <ScreenBack>
        <AnimatePresence mode="wait" initial={false}>
          <PageWrapper key={router.pathname}>
            <Component {...pageProps} />
          </PageWrapper>
        </AnimatePresence>
      </ScreenBack>
    </ReactQueryWrapper>
  );
}
