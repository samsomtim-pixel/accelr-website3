import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all pathnames except:
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /images, /favicon (static files)
    // - files with extensions (e.g. .ico, .png, .xml, .txt)
    "/((?!api|_next|_vercel|images|favicon|.*\\..*).*)",
  ],
};
