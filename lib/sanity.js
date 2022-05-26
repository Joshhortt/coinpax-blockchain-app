import sanityClient from '@sanity/client' 

export const client = sanityClient({
    projectId: '50gm8him',
    dataset: 'production',
    apiVersion: ' 2021-10-21', // use current UTC date - see "specifying API version"!
    token:
      'skew5x8LuYUS2L7Poi9I93WfFVX8kJONUFbVmMS02Hi2QfKiAqq0voX7ICocJ9jLWthsEutaF0NXTMVmAgo6Rhyl4JAVyaX2PN0XczPPoF0S509xCDmzYpc31LAX3mrlgaEEWuclFiKyG6ZKUCWzlbaznzCm7V1F5yVYC3OjWsmW5RAqfut3', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  })