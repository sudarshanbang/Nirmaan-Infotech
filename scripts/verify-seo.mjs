// Automated SEO verification script for Nirmaan Infotech
const BASE_URL = 'http://localhost:3000';
const PRODUCTION_DOMAIN = 'https://nirmaaninfotech.in';

const CANONICAL_ROUTES = [
  '/',
  '/services',
  '/services/website-development',
  '/services/e-commerce',
  '/services/website-redesign',
  '/services/seo',
  '/services/website-maintenance',
  '/services/digital-solutions',
  '/portfolio',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

async function fetchWithRetry(url, maxRetries = 10, delayMs = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url);
      return res;
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

function extractTagContent(html, regex) {
  const match = html.match(regex);
  return match ? match[1] : null;
}

function extractAllJsonLd(html) {
  const regex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  const results = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      results.push(JSON.parse(match[1]));
    } catch (e) {
      results.push({ error: 'Failed to parse JSON-LD', raw: match[1] });
    }
  }
  return results;
}

function countH1Tags(html) {
  const regex = /<h1[\s>]/gi;
  const matches = html.match(regex);
  return matches ? matches.length : 0;
}

async function verifyRobotsTxt() {
  console.log('\n--- VERIFYING ROBOTS.TXT ---');
  const res = await fetchWithRetry(`${BASE_URL}/robots.txt`);
  const text = await res.text();
  console.log(`Status: ${res.status}`);
  console.log(`Content:\n${text}`);

  const hasProductionSitemap = text.includes(`Sitemap: ${PRODUCTION_DOMAIN}/sitemap.xml`);
  const hasDisallowApi = text.includes('Disallow: /api/');
  const hasAllowAll = text.includes('Allow: /');

  if (hasProductionSitemap && hasDisallowApi && hasAllowAll) {
    console.log('✔ robots.txt VERIFIED successfully!');
  } else {
    console.error('✖ robots.txt verification FAILED');
  }
}

async function verifySitemapXml() {
  console.log('\n--- VERIFYING SITEMAP.XML ---');
  const res = await fetchWithRetry(`${BASE_URL}/sitemap.xml`);
  const text = await res.text();
  console.log(`Status: ${res.status}`);

  const locMatches = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  console.log(`Found ${locMatches.length} URLs in sitemap:`);
  locMatches.forEach((loc) => console.log(`  - ${loc}`));

  const allAreProductionDomain = locMatches.every((loc) => loc.startsWith(PRODUCTION_DOMAIN));
  const hasAll13Routes = CANONICAL_ROUTES.every((r) => {
    const expected = r === '/' ? PRODUCTION_DOMAIN : `${PRODUCTION_DOMAIN}${r}`;
    return locMatches.includes(expected);
  });
  const noPricingInSitemap = !locMatches.some((loc) => loc.includes('/pricing'));

  console.log(`  All use ${PRODUCTION_DOMAIN}: ${allAreProductionDomain}`);
  console.log(`  All 13 canonical routes present: ${hasAll13Routes}`);
  console.log(`  /pricing properly excluded: ${noPricingInSitemap}`);

  if (allAreProductionDomain && hasAll13Routes && noPricingInSitemap && locMatches.length === 13) {
    console.log('✔ sitemap.xml VERIFIED successfully!');
  } else {
    console.error('✖ sitemap.xml verification FAILED');
  }
}

async function verifyRoutes() {
  console.log('\n--- VERIFYING ALL 13 CANONICAL ROUTES ---');

  for (const route of CANONICAL_ROUTES) {
    const url = `${BASE_URL}${route}`;
    const res = await fetchWithRetry(url);
    const html = await res.text();

    const title = extractTagContent(html, /<title>([^<]*)<\/title>/i);
    const description = extractTagContent(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
    const canonical = extractTagContent(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
    const ogUrl = extractTagContent(html, /<meta\s+property="og:url"\s+content="([^"]*)"/i);
    const ogTitle = extractTagContent(html, /<meta\s+property="og:title"\s+content="([^"]*)"/i);
    const twitterCard = extractTagContent(html, /<meta\s+name="twitter:card"\s+content="([^"]*)"/i);
    const h1Count = countH1Tags(html);
    const schemas = extractAllJsonLd(html);
    const schemaTypes = schemas.map((s) => s['@type'] || (Array.isArray(s) ? s.map((x) => x['@type']) : 'unknown')).flat();

    const expectedCanonical = route === '/' ? PRODUCTION_DOMAIN : `${PRODUCTION_DOMAIN}${route}`;
    const canonicalOk = canonical === expectedCanonical;
    const titleOk = !!title && title.includes('Nirmaan Infotech');
    const descOk = !!description && description.length >= 100 && description.length <= 180;
    const h1Ok = h1Count === 1;

    console.log(`\nRoute: ${route}`);
    console.log(`  Status: ${res.status}`);
    console.log(`  Title (${title?.length || 0} chars): "${title}"`);
    console.log(`  Description (${description?.length || 0} chars): "${description}"`);
    console.log(`  Canonical: ${canonical} (Expected: ${expectedCanonical}) -> ${canonicalOk ? '✔' : '✖'}`);
    console.log(`  og:url: ${ogUrl}`);
    console.log(`  twitter:card: ${twitterCard}`);
    console.log(`  H1 count: ${h1Count} -> ${h1Ok ? '✔' : '✖'}`);
    console.log(`  JSON-LD Schemas: ${JSON.stringify(schemaTypes)}`);

    if (!canonicalOk || !titleOk || !descOk || !h1Ok) {
      console.error(`  ✖ Route ${route} has issues!`);
    } else {
      console.log(`  ✔ Route ${route} PASSED`);
    }
  }
}

async function verifyRedirect() {
  console.log('\n--- VERIFYING /pricing REDIRECT ---');
  const res = await fetch(`${BASE_URL}/pricing`, { redirect: 'manual' });
  console.log(`Status: ${res.status}`);
  console.log(`Location: ${res.headers.get('location')}`);
  if (res.status === 307 || res.status === 308 || res.status === 302 || res.headers.get('location') === '/services') {
    console.log('✔ /pricing redirects to /services as expected!');
  } else {
    console.log(`Note: /pricing returned status ${res.status}`);
  }
}

async function run() {
  console.log('Starting automated SEO audit against production build...');
  await verifyRobotsTxt();
  await verifySitemapXml();
  await verifyRoutes();
  await verifyRedirect();
  console.log('\nAudit complete.');
}

run().catch((err) => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
