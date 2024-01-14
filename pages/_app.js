// import { ThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import PageHeader from "../components/pageHeader";
import PageFooter from "../components/pageFooter";
import "../styles/global.css";
import { createContext, useRef } from "react";
export const refContext = createContext();

const App = ({ Component, pageProps }) => {
  const ContextStore = (props) => {
    const aboutRef = useRef();
    const skillRef = useRef();
    const projectRef = useRef();
    const values = {
      aboutRef: aboutRef,
      skillRef: skillRef,
      projectRef: projectRef
    };
    return (
      <refContext.Provider value={values}>{props.children}</refContext.Provider>
    );
  };

  return (
    <ThemeProvider>
      <ContextStore>
        <PageHeader />
        <Component {...pageProps} />
        <PageFooter />
      </ContextStore>
    </ThemeProvider>
  );
};

export default App;
