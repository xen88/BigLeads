module.exports = {
  servers: {
    one: {
      host: '41.185.91.169',
      username: 'root',
      // pem:
      password: 'piSxhixL'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'bigleads',
    path: '/home/xen/Documents/reactmeteor/base/',
    port: 3090,
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'https://bigleads.xonesoftware.co.za',
      MONGO_URL: 'mongodb://localhost/meteor',
      // MONGO_URL: 'mongodb://njongo:wh3OD7iWFqRl@ds023566-a0.mlab.com:23566,ds023566-a1.mlab.com:23566/njongo?replicaSet=rs-ds023566',
      PORT: 3090
    },
    port: 3090,
    // docker: {
    //       image:'abernix/meteord:base',// !important for meteor 1.4
    //     },
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: { // (optional)
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },

  // mongo: {
  //   oplog: true,
  //   port: 27017,
  //   servers: {
  //     one: {},
  //   },
  // },
};
