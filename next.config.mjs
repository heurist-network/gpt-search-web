export default (phase, { defaultConfig }) => {
  const env = process.env.NODE_ENV;
  /**
   * @type {import("next").NextConfig}
   */

  return {
    async rewrites() {
      return [
        {
          source: "/query",
          destination: "https://n2bifuff-search-with-lepton-v2-1.tin.lepton.run/query" // Proxy to Backend
        }
      ];
    }
  };

}
