import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Video from "./pages/Video";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/video",
				element: <Video />,
			},
			{
				path: "/video/:videoId",
				element: <VideoDetail />,
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
