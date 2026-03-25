const UTM_STORAGE_KEY = "lhiq_utm";

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UTMParams = Partial<Record<(typeof UTM_PARAMS)[number], string>>;

/** Parse UTM params from a URL search string */
export function parseUTM(search: string): UTMParams | null {
  const params = new URLSearchParams(search);
  const utm: UTMParams = {};
  let found = false;

  for (const key of UTM_PARAMS) {
    const val = params.get(key);
    if (val) {
      utm[key] = val;
      found = true;
    }
  }

  return found ? utm : null;
}

/** Store UTM params in sessionStorage */
export function storeUTM(utm: UTMParams): void {
  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
  } catch {
    // sessionStorage may be unavailable
  }
}

/** Retrieve stored UTM params from sessionStorage */
export function getStoredUTM(): UTMParams {
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
