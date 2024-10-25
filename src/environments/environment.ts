export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: 'TU-CLIENT_ID',
      authority: "TU-AUTHORITY",
      redirectUri: 'TU-REDIRECT',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
};
