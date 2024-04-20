// import { clerkMiddleware } from '@clerk/nextjs';

import { authMiddleware } from "@clerk/nextjs/server";

 
export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
        '/assets/images/logo.svg',
        '/assets/images/hero.svg',
        '/assets/images/dotted-pattern.png',
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ]
});

// export default clerkMiddleware({});
 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};