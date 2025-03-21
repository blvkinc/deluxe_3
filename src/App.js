import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

const About = lazy(() => import("./components/about/About"));
const Blog = lazy(() => import("./components/blog/Blog"));
const Video = lazy(() => import("./components/video/Video"));
const Maintenance = lazy(() => import("./components/maintenance/Maintenance"));
const Eclipse21CouplesOffRoad = lazy(() =>
  import("./components/products/Eclipse21-Couplesoffroad")
);
const Eclipse21CouplesXPTech = lazy(() =>
  import("./components/products/Eclipse21-Couplesxptech")
);
const Eclipse22CouplesOffRoad = lazy(() =>
  import("./components/products/Eclipse22-Couplesoffroad")
);
const Eclipse22CouplesXPTech = lazy(() =>
  import("./components/products/Eclipse22-Couplesxptech")
);
const Riptide22FamilyOffRoad = lazy(() =>
  import("./components/products/Riptide22-Familyoffroad")
);
const Riptide20FamilyOffRoad = lazy(() =>
  import("./components/products/Riptide20-Familyoffroad")
);
const Riptide20FamilyXPTech = lazy(() =>
  import("./components/products/Riptide20-Familyxptech")
);
const Riptide22FamilyXPTech = lazy(() =>
  import("./components/products/Riptide22-Familyxptech")
);
const Stormbreaker18FamilyOffRoad = lazy(() =>
  import("./components/products/Stormbreaker18-Familyoffroad")
);
const Stormbreaker18FamilyXPTech = lazy(() =>
  import("./components/products/Stormbreaker18-Familyxptech")
);
const Stormbreaker19FamilyOffRoad = lazy(() =>
  import("./components/products/Stormbreaker19-Familyoffroad")
);
const Stormbreaker19FamilyXPTech = lazy(() =>
  import("./components/products/Stormbreaker19-Familyxptech")
);
const Stormbreaker21FamilyOffRoad = lazy(() =>
  import("./components/products/Stormbreaker21-Familyoffroad")
);
const Stormbreaker21FamilyXPTech = lazy(() =>
  import("./components/products/Stormbreaker21-Familyxptech")
);
const Stormbreaker23FamilyOffRoad = lazy(() =>
  import("./components/products/Stormbreaker23-Familyoffroad")
);
const Stormbreaker23FamilyXPTech = lazy(() =>
  import("./components/products/Stormbreaker23-Familyxptech")
);
// const Stormbreaker19 = lazy(() =>
//   import("./components/products/Stormbreaker19")
// );
// const Stormbreaker21 = lazy(() =>
//   import("./components/products/Stormbreaker21")
// );
// const Stormbreaker18 = lazy(() =>
//   import("./components/products/Stormbreaker18")
// );
// const Stormbreaker23 = lazy(() =>
//   import("./components/products/Stormbreaker23")
// );
// const Eclipse21 = lazy(() => import("./components/products/Eclipse21"));
// const Eclipse22 = lazy(() => import("./components/products/Eclipse22"));
// const Riptide22 = lazy(() =>
//   import("./components/products/Riptide22-Familyoffroad")
// );
const Contact = lazy(() => import("./components/contact/Contact"));
const Appointment = lazy(() => import("./components/bookus/Appointment"));
const Tour = lazy(() => import("./components/tour/Tour"));
const Xptec = lazy(() => import("./components/xptec/Xptec"));
const Warranty = lazy(() =>
  import("./components/warrantypolicy/WarrantyPolicy")
);
const Familyoffroad = lazy(() =>
  import("./components/products/ProductList/Familyoffroad")
);
const Familyxptech = lazy(() =>
  import("./components/products/ProductList/Familyxptech")
);
const Couplesxptech = lazy(() =>
  import("./components/products/ProductList/Couplesxptech")
);
const Couplesoffroad = lazy(() =>
  import("./components/products/ProductList/Couplesoffroad")
);

const MemoizedHeader = React.memo(Header);
const MemoizedFooter = React.memo(Footer);

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <MemoizedHeader />
        <Suspense fallback={<div className="viewport-filler"></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/video" element={<Video />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route
              path="/eclipse21couplesoffroad"
              element={<Eclipse21CouplesOffRoad />}
            />
            <Route
              path="/eclipse21couplesxptech"
              element={<Eclipse21CouplesXPTech />}
            />
            <Route
              path="/eclipse22couplesoffroad"
              element={<Eclipse22CouplesOffRoad />}
            />
            <Route
              path="/eclipse22couplesxptech"
              element={<Eclipse22CouplesXPTech />}
            />
            <Route
              path="/riptide22familyoffroad"
              element={<Riptide22FamilyOffRoad />}
            />
            <Route
              path="/riptide20familyoffroad"
              element={<Riptide20FamilyOffRoad />}
            />
            <Route
              path="/riptide20familyxptech"
              element={<Riptide20FamilyXPTech />}
            />
            <Route
              path="/riptide22familyxptech"
              element={<Riptide22FamilyXPTech />}
            />
            <Route
              path="/stormbreaker18familyoffroad"
              element={<Stormbreaker18FamilyOffRoad />}
            />
            <Route
              path="/stormbreaker18familyxptech"
              element={<Stormbreaker18FamilyXPTech />}
            />
            <Route
              path="/stormbreaker19familyoffroad"
              element={<Stormbreaker19FamilyOffRoad />}
            />
            <Route
              path="/stormbreaker19familyxptech"
              element={<Stormbreaker19FamilyXPTech />}
            />
            <Route
              path="/stormbreaker21familyoffroad"
              element={<Stormbreaker21FamilyOffRoad />}
            />
            <Route
              path="/stormbreaker21familyxptech"
              element={<Stormbreaker21FamilyXPTech />}
            />
            <Route
              path="/stormbreaker23familyoffroad"
              element={<Stormbreaker23FamilyOffRoad />}
            />
            <Route
              path="/stormbreaker23familyxptech"
              element={<Stormbreaker23FamilyXPTech />}
            />
            {/* <Route path="/stormbreaker19" element={<Stormbreaker19 />} />
            <Route path="/stormbreaker21" element={<Stormbreaker21 />} />
            <Route path="/stormbreaker18" element={<Stormbreaker18 />} />
            <Route path="/stormbreaker23" element={<Stormbreaker23 />} />
            <Route path="/eclipse21" element={<Eclipse21 />} />
            <Route path="/eclipse22" element={<Eclipse22 />} />
            <Route path="/riptide22" element={<Riptide22 />} />*/}
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/Xptec" element={<Xptec />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/familyoffroad" element={<Familyoffroad />} />
            <Route path="/familyxptech" element={<Familyxptech />} />
            <Route path="/couplesxptech" element={<Couplesxptech />} />
            <Route path="/couplesoffroad" element={<Couplesoffroad />} />
          </Routes>
        </Suspense>
        <MemoizedFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
