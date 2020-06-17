NODE_ENV: process.env.NODE_ENV || 'development',

PUBLIC_URL: publicUrl,

// Stringify all values so we can feed into Webpack DefinePlugin
const stringify = {
    'process.env': Object.keys(raw).reduce((env, key) => {

    }
  )
}