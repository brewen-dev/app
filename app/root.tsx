import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration, useRouteError,
} from "@remix-run/react";

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta/>
            <Links/>
        </head>
        <body>
            <Outlet/>
            <ScrollRestoration/>
            <Scripts/>
            <LiveReload/>
        </body>
        </html>
    )
}

export function ErrorBoundary() {
    const error = useRouteError();

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            {error.status} {error.statusText}
        </body>
        </html>
    )
}