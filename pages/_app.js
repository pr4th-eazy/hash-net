import "../styles/globals.css";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.router}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: 0.3,
          },
          pageExit: {
            backgroundColor: 'white',
            filter: `invert()`,
            opacity: 0,
          }
        }
      }
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
