import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { routes } from './routes';
import { useAuth } from './auth-context';

function App() {
    const { token } = useAuth();

    const routeRender = (route, props) => {
        if (route.auth && !token) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {
                            from: props.location
                        }
                    }}
                />
            );
        }

        if (!route.layout) {
            route.component = withRouter(route.component);

            return <route.component {...props} />;
        }

        route.layout = withRouter(route.layout);

        global.document.title = route.title || route.path;

        return (
            <route.layout {...props}>
                <route.component {...props} />
            </route.layout>
        );
    };

    const mappedRoute = (route, key) => (
        <Route key={key} path={route.path} exact={route.exact} render={props => routeRender(route, props)} />
    );

    return <Switch>{routes.map(mappedRoute)}</Switch>;
}

export default App;
