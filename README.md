# country-to-domain

> A simple utility to map ISO 3166-1 alpha-2 country codes to a generic domain suffix (e.g. `.co.uk`, `.de`, `.com.au`). Ideal for situations where you want to construct a locale-specific URL (e.g. “example.co.uk” vs. “example.com”) based on the user’s country.

---

## Why use this package?

In many frontend or backend applications, you may need to build or redirect to a local version of a website—perhaps to show prices in a user’s local market, point them to the correct storefront, or comply with regional regulations. Rather than hard-coding multiple domain mappings, **country-to-domain** provides a small lookup table that:

1. Takes a **two-letter country code** (ISO 3166-1 alpha-2).
2. Returns the **appropriate domain suffix** (always starts with a dot, e.g. `.ca`, `.co.uk`, `.de`, etc.).
3. Falls back to `.com` for any unsupported or unknown codes.

By plugging this into your routing logic or URL builder, you can quickly generate a country-specific URL:  
```ts
import { getDomainSuffixForCountry } from 'country-to-domain';

const base = 'example';
const suffix = getDomainSuffixForCountry('GB'); // → '.co.uk'
console.log(`${base}${suffix}`);               // → 'example.co.uk'
```

## Installation
```
npm install country-to-domain
```
### or
```
yarn add country-to-domain
```

## Quick Usage

```ts
import {
  getDomainSuffixForCountry,
  COUNTRY_TO_DOMAIN_SUFFIX,
} from 'country-to-domain';

// — Basic examples —
console.log(getDomainSuffixForCountry('us')); // → '.com'
console.log(getDomainSuffixForCountry('GB')); // → '.co.uk'
console.log(getDomainSuffixForCountry('de')); // → '.de'
console.log(getDomainSuffixForCountry('xx')); // → fallback '.com'

// — Building a full URL —
const shopName = 'myshop';
const country = 'CA';
const url = `${shopName}${getDomainSuffixForCountry(country)}`;
// → 'myshop.ca'

// — Inspect or extend the raw map —
console.log(COUNTRY_TO_DOMAIN_SUFFIX['IN']); // → '.in'
```


## Full Supported Country Codes
- **North America**  
  - `US` → `.com`  
  - `CA` → `.ca`  

- **United Kingdom & Europe**  
  - `GB` → `.co.uk`  
  - `IE` → `.ie`  
  - `AT` → `.at`  
  - `BE` → `.be`  
  - `FR` → `.fr`  
  - `DE` → `.de`  
  - `IT` → `.it`  
  - `NL` → `.nl`  
  - `ES` → `.es`  
  - `CH` → `.ch`  
  - `SE` → `.se`  
  - `PL` → `.pl`  
  - `RU` → `.ru`  

- **Asia-Pacific**  
  - `AU` → `.com.au`  
  - `NZ` → `.com.au` (redirects to Australia)  
  - `IN` → `.in`  
  - `HK` → `.com.hk`  
  - `MY` → `.com.my`  
  - `SG` → `.com.sg`  
  - `PH` → `.ph`  
  - `TW` → `.com.tw`  

- **China**  
  - `CN` → `.com.cn`  

**Fallback**  
- Any other code (e.g. `JP`, `BR`, `XY`) → `.com`
