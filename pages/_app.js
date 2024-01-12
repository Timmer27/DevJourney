// import { ThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import PageHeader from "../components/pageHeader";
import PageFooter from "../components/pageFooter";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </ThemeProvider>
  );
};

export default App;
