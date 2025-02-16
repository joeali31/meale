import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client
    // لازم تغيرها ل client علشان لو معملتهوش علي client مش هيترفع علي vercel
  }
];
