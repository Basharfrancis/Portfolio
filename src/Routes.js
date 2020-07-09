import React, { Suspense, Fragment } from "react";
import Hero from "./components/Hero";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ClimbingBoxLoader } from "react-spinners";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };
  const SuspenseLoading = () => {
    return (
      <Fragment>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            <ClimbingBoxLoader color={"#3c44b1"} loading={true} />
          </div>
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait while we load the live preview examples
            <span className="font-size-lg d-block text-dark">
              This live preview instance can be slower than a real production
              build!
            </span>
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <AnimatePresence>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <Route path={["/"]}>
            <Switch location={location} key={location.pathname}>
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Route path="/" component={Hero} />
                <Route path="/" component={About} />
                <Route path="/" component={Projects} />
                <Route path="/" component={Contact} />
                <Route path="/" component={Footer} />
              </motion.div>
            </Switch>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};
export default Routes;
