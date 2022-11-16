module.exports = {
  apps : [{
    script: './bin/www',
    instances: 'max',
    autorestart: true,
    watch:true,
    env: {
      NODE_ENV: 'dev',
    },
    env_production: {
      NODE_ENV: 'prod',
    }
  }],

};
