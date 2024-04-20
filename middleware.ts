import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing'
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
        '/assets/images/logo.svg',
        '/assets/images/hero.svg',
        '/assets/images/dotted-pattern.png',
    ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};