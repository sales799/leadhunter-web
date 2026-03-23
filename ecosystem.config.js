module.exports = {
  apps: [{
    name: 'leadhunter-web',
    script: 'node_modules/.bin/next',
    args: 'start -p 3011',
    cwd: '/opt/apps/leadhunter-web',
    env: { NODE_ENV: 'production', PORT: '3011' },
    max_memory_restart: '512M',
    node_args: '--max-old-space-size=384',
  }]
};
