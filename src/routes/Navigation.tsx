import { Suspense } from "react";
import { BrowserRouter, NavLink, Navigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import logo from "../logo.svg";


// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={(isActive) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}

              {/* <li>
                    <NavLink to="/lazy1" className={(isActive) => isActive ? 'nav-active' : ''  }>Lazy 1</NavLink>
                </li>
                  <li>
                    <NavLink to="/lazy2" className={(isActive) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="/lazy3" className={(isActive) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
                </li> */}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.to}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            {/* <Route path="lazy1" element={ <LazyPage1/>}/>
            <Route path="lazy2" element={ <LazyPage2/>}/>
            <Route path="lazy3"  element={ <LazyPage3/>}/> */}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
