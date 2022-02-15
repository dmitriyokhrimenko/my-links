import React from "react";
import { Routes ,Route } from 'react-router-dom';
import { Category } from './pages/Category/Category'

const ROUTES = [
    { path: "/", key: "ROOT", exact: true, component: () => <h1>Main page</h1> },
    { path: "/categories/english", key: "ENGLISH", exact: true, component: () => <Category categoryKey={"ENGLISH"}/> },
    { path: "/categories/algoritms", key: "ALGORITMS", exact: true, component: () => <Category categoryKey={"ALGORITMS"}/> },
    { path: "/categories/design-patterns", key: "DESIGN_PATTERNS", exact: true, component: () => <Category categoryKey={"DESIGN_PATTERNS"}/> },
    { path: "/categories/javascript", key: "JAVASCRIPT", exact: true, component: () => <Category categoryKey={"JAVASCRIPT"}/> },
    { path: "/categories/ci-cd", key: "CI_CD", exact: true, component: () => <Category categoryKey={"CI_CD"}/> },
    { path: "/categories/aws", key: "AWS", exact: true, component: () => <Category categoryKey={"AWS"}/> },

    // {
    //     path: "/category",
    //     key: "CATEGORY",
    //     component: () => <Category key={"CATEGORY"}/>,
    //     routes: [
    //         {
    //             path: "/category/algoritms",
    //             key: "ALGORITMS",
    //             exact: true,
    //             component: () => <Category key={"JAVASCRIPT"}/>,
    //         },
    //         {
    //             path: "/category/javascript",
    //             key: "JAVASCRIPT",
    //             exact: true,
    //             component: () => <Category key={"JAVASCRIPT"}/>,
    //         },
    //         {
    //             path: "/category/ci-cd",
    //             key: "CI_CD",
    //             exact: true,
    //             component: () => <Category key={"CI_CD"}/>,
    //         },
    //         {
    //             path: "/category/aws",
    //             key: "AWS",
    //             exact: true,
    //             component: () => <Category key={"AWS"}/>,
    //         },
    //     ],
    // },
];

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
// function RouteWithSubRoutes(route) {
//     console.log(route.component)
//     return <Route path={route.path} key={route.key} elment={<route.component />} />;
// }

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes({ routes }) {
    return (
        <Routes>
            {Object.keys(routes).map((categoryKey, i) => {
                const route = routes[categoryKey];
                return <Route path={route.path} key={route.key} element={ <route.component /> } />;
            })}

            <Route element={() => <h1>Not Found!</h1>} />
        </Routes>



    );
}
export default ROUTES;