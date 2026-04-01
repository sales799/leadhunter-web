module.exports = {
  apps: [{
    name: 'leadhunter-web',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/opt/apps/leadhunter-web',
    interpreter: '/usr/bin/node',
    exec_mode: 'cluster',
    instances: 2,
    env: {
      NODE_ENV: 'production',
      PORT: 3011,
    },
    max_memory_restart: '512M',
    max_restarts: 15,
    min_uptime: '10s',
    wait_ready: true,
    listen_timeout: 10000,
    kill_timeout: 5000,
    error_file: '/var/log/pm2/leadhunter-web-error.log',
    out_file: '/var/log/pm2/leadhunter-web-out.log',
    merge_logs: true
  }]
};
