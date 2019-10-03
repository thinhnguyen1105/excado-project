export const overrideConfig = {
  appName: 'excado-develop',
  web: {
    cors: {
      whitelistUrls: [
        'http://localhost:3000',
        /timmay.local:3000$/,
        /.*\.timmay.local:3000$/,
      ],
    },
    api: {
      prefix: '/api',
      docsUrl: '/apiDocs',
      'docsJson': '/apiJson',
    },
    log: {
      apiRequest: true,
    },
  },
  database: {
    connectionString: 'mongodb://admin:admin123@ds117145.mlab.com:17145/excado',
    // connectionString: 'mongodb://localhost:27017/excado',
  },
  logger: {
    streams: [{
      level: 'debug',
      stream: 'process.stdout',
    }],
  },
  storage: {
    type: 'local',
    folder: 'local_storage',
  },
  firebase: {
    serviceAccount: {
      'type': 'service_account',
      'project_id': 'techkids-ac7a7',
      'private_key_id': 'ce71005216551aa69a09f301d2931da62fd89f78',
      // tslint:disable-next-line:max-line-length
      'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0wEMjpjnBQRLn\n9cFRrTpcnJWoggUlF0CQVD6QXN42MJRqSENnpaB4p0ddDYDSC2eo9wVykiUwrv8P\nsG6Y5nUO/hR0yuPp2vmYJBHEFqDYlhassL10Tcg/c5G9HCRrSOiitDEy468SCz37\nHNdSg+kRHVEWS/Axl8EouNpfq/4AtyVCpZLfIoCrOP9n+VjkLJdDkWVlkLaV6n4S\nnxCIKvVs5mt7a1+WajkYnXE1oGxwMWkChRy9mO2M7nAb6hKmp138CTo2gcIwf1ZP\nyITwuJfCag3aVj154akWRsN72f744fQkO2o0ziOMkRZ44cAEAkdDX6MsKnyKXDyL\ntY5S4codAgMBAAECggEASfDKplc2EiXmL4i7lAd6s+8EU+IYa7Nm4IPt8g1jg6R8\n2juEg25gRmsbyOegtowe1CJ1EojReOhlg8wHejnwUflDcgGbmYtQBlpfACnHk8JW\nNT+5yM2W6MoEqOlNxquVKxXueGRmtkluCf8i4GkA21T0WlwnPopXZKq1/mQz7KNO\ny5OemuiHxWKeortqh1Ppw2idUo587EU1VonENvuoMlcautePOEQPOfstrOn0BN6B\npMZBozS7zCJ0d4by+hGBYgqPoiQ9JgJ8nhUiZSMfg8AOM6DzhTsAyw8lpQ0r4Mtr\neXByytKU/1CmQKVGgKLhj9j/7s5SKNkxUvtgcRj2OwKBgQDmdicOm0+15fifqUAp\nwmZml6GMHB8ZFfeScgE2+92v5n4Lb8YZjnvjPnq2NMj9R9F9HwhEETVgJ7R6gq1y\nydu0cy0vwfeONp0rZ9HiBD2UMlzghSk0N7DJitKhwA+x0FS2xh3crU+MKC/nSYzA\nGMhCQiZLN888tXIdEIcdDUTT3wKBgQDIx+Wx79SUrVPuCx+ODMvAX8Cmv3lnC4S6\n+nmfsaYM4tLL5nqL715hth0Pzkd1DRHK53msFxRW+4cZTBGMrvYS7fy5kxLTRIj9\nWQ2I58IpNdQVvstZl2F7P20dvrk24tK5Yn1TXVefzQTzh8cshbukspfnN8OfmHUX\nL7NZUtqBgwKBgQClcdzIF6c5pka+F/r//5cTv3cx5l5M3ABHGaDVoCqdxJJoE23b\nmvZFRO1DMNG5Qn2ZnVWJx/DRfq+J45Yw+cjH2odt6YmWho5+QqHh57ltUlpqtC3I\nVtKLXSWpCQA7XpvyOnflnGWm8JKzL5HjtebN6j8jcIVNx9SMGPlmWcg3cQKBgAHH\nq+Sg8KyEwNq6ZIQ43tGMx8NyrRvZwUp7D/r3czZoCGBgYbO94oNRPv614HJMNF0t\nIioBZl/DCRaTUxCBOJNAYt4uTJts3x4H3RPaoiEFZiTvNRRNQEL8c/Ywi6nN5vpX\nwi6sBCvZgHK8QGrHoLs8Dhaxqt1OV7Nl69wd3OwLAoGBAIMaIjnAxhrrqUBsMS9N\nonSoeQQCQVsw29xRZut8t+g7ELNIwwjlX/ACg7jO3l12JTHQTwSLiYS0AZpEW/qR\nIjWx9yh1Mu/2wREm24ozf5ZpDLxnDYhj6vS9IP6+f0uQKAMJ0uduwxCyFHDIcoWs\n7Qwx+TmZKl83kotOkI+7YcL2\n-----END PRIVATE KEY-----\n',
      'client_email': 'firebase-adminsdk-m1s7e@techkids-ac7a7.iam.gserviceaccount.com',
      'client_id': '104064699597311074186',
      'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
      'token_uri': 'https://oauth2.googleapis.com/token',
      'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
      'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-m1s7e%40techkids-ac7a7.iam.gserviceaccount.com',
    },
    databaseURL: 'https://techkids-ac7a7.firebaseio.com',
  },
};
