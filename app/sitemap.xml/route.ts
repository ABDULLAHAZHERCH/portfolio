import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://abdullahch.vercel.app';
  const pages = [
    '', // homepage
    'projects', // projects page
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>${page === '' ? '1.0' : '0.7'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 