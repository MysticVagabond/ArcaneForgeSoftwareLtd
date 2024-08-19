import { JSX } from "solid-js";
import NavBar from "./components/nav-bar";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

export default function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <div class="body">
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    </>
  );
}

//https://docs.solidjs.com/guides/routing-and-navigation
