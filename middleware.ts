import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  "/contact",
  "/cart",
  "/menu",
  "/food-item(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
