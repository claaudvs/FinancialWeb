/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const nextConfig = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      env: {
        NEXT_PUBLIC_API_URL: '#{{ApiUrl}}#',
        NEXT_PUBLIC_PRODUCTION: 'PROD'
      },
      basePath: '/trackfinancefront',
      output: 'standalone'
    }
  } else {
    return {
      env: {
        NEXT_PUBLIC_API_URL: 'http://localhost:3001/financialHistory',
        NEXT_PUBLIC_PRODUCTION: 'Dev'
      },
      basePath: '',
      output: 'standalone'
    }
  }
}

module.exports = nextConfig
