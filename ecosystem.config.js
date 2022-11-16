module.exports = {
  apps : [{
    script: './bin/www',
    mode: 'cluster',
    instances: 1,
    autorestart: true,
    watch:true,
    env: {
      NODE_ENV: 'dev',
    },
    env_prod: {
      NODE_ENV: 'prod',
    }
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

};
