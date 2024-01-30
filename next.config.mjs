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
          destination: "https://iw86xz4y-search-with-lepton-v2-2.tin.lepton.run/query" // Proxy to Backend
        }
      ];
    }
  };

}
