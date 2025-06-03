// src/index.ts

/**
 * A lookup table from ISO 3166-1 alpha-2 country codes to a generic domain
 * suffix (e.g. "US" → ".com", "GB" → ".co.uk", "DE" → ".de", "AU" → ".com.au").
 *
 * Any code not in this map will fall back to ".com".
 */
const COUNTRY_TO_DOMAIN_SUFFIX: Record<string, string> = {
    // North America
    US: '.com',
    CA: '.ca',

    // United Kingdom & Europe
    GB: '.co.uk',
    IE: '.ie',
    AT: '.at',
    BE: '.be',
    FR: '.fr',
    DE: '.de',
    IT: '.it',
    NL: '.nl',
    ES: '.es',
    CH: '.ch',
    SE: '.se',
    PL: '.pl',
    RU: '.ru',

    // Asia-Pacific
    AU: '.com.au',
    NZ: '.com.au',     // New Zealand often uses .com.au
    IN: '.in',
    HK: '.com.hk',
    MY: '.com.my',
    SG: '.com.sg',
    PH: '.ph',
    TW: '.com.tw',

    // China
    CN: '.com.cn'
};

/**
 * Given an ISO 3166-1 alpha-2 country code (e.g. “GB”, “US”, “IN”),
 * returns the corresponding domain suffix. For example:
 *
 *   getDomainSuffixForCountry('US') → '.com'
 *   getDomainSuffixForCountry('gb') → '.co.uk'
 *   getDomainSuffixForCountry('DE') → '.de'
 *   getDomainSuffixForCountry('ZZ') → fallback '.com'
 *
 * @param countryCode - Two-letter ISO 3166-1 alpha-2 (case-insensitive).
 * @returns A string starting with a dot (e.g. '.de', '.co.uk', '.com.au', etc.).
 */
export function getDomainSuffixForCountry(countryCode: string): string {
    const upper = countryCode.trim().toUpperCase();
    return COUNTRY_TO_DOMAIN_SUFFIX[upper] || '.com';
}

// Export the raw map so users can inspect or extend it if needed.
export { COUNTRY_TO_DOMAIN_SUFFIX };
  