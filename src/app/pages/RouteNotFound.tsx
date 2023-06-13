import { useMemo } from "react";
import { useLocation } from "react-router";

export const RouteNotFound = () =>
{
	const { pathname, search, hash } = useLocation();

	const url = useMemo(() => pathname + search + hash, [pathname, search, hash]);

	return (
		<>
			<h1>404</h1>
			<h3>{url} not found!</h3>
		</>
	);
};