async function fetchJSON(path: string) {
  return await (await fetch(`http://localhost:3602${path}`)).json();
}

interface Locale {
  id: string;
  messages: Record<string, string>;
}

const API = {
  async settings(): Promise<{ defaultLocale: string }> {
    return fetchJSON("/settings");
  },
  async locales(): Promise<Array<Locale>> {
    return fetchJSON(`/locales`);
  },
  async locale(locale: string): Promise<Locale> {
    return fetchJSON(`/locales/${locale}`).then((data) => {
      if (data.id === undefined) throw new Error("404");
      return data;
    });
  },
};

export default API;
