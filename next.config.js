module.exports = {
    env: {
      SUNSICK_API_URL: process.env.SUNSICK_API_URL,
    },
    async redirects() {
      return [
        {
          source: '/admin',
          destination: 'https://api.sunsickstudio.mezaweblab.com/admin',
          permanent: true
        }
      ]
    }
}