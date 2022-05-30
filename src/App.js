import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
// Layout
import DefaultLayout from './layout/DefaultLayout';

const App = () => {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Page = route.component;

                let Layout;

                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                } else {
                    Layout = DefaultLayout;
                }

                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default App;
