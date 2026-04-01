# Operational Runbook — leadhunter-web
## SO-106 Compliance | Created: 2026-04-01

### Quick Reference
| Field | Value |
|-------|-------|
| Port | 3008 |
| PM2 Mode | cluster |
| SLO Tier | Tier1 |
| Database | N/A |
| Health | http://localhost:3008/api/health |

### Deploy
```bash
bash /opt/apps/talpro-sentinel/universal-deploy.sh /opt/apps/leadhunter-web leadhunter-web
```

### Rollback
```bash
cd /opt/apps/leadhunter-web
git log --oneline -5  # find previous good commit
git checkout <commit> -- .
npm run build && pm2 reload leadhunter-web
```

### Restart
```bash
pm2 reload leadhunter-web    # zero-downtime (cluster)
pm2 restart leadhunter-web   # if fork mode
```

### Logs
```bash
pm2 logs leadhunter-web --lines 50 --nostream
```

### Backup/Restore (N/A)
```bash
# Backup
pg_dump -Fc N/A > /opt/backups/leadhunter-web-$(date +%Y%m%d).dump
# Restore
pg_restore -d N/A /opt/backups/leadhunter-web-YYYYMMDD.dump
```

### Common Failures
| Symptom | Cause | Fix |
|---------|-------|-----|
| 502 Bad Gateway | App crashed | pm2 restart leadhunter-web |
| High memory | Memory leak | pm2 reload leadhunter-web (resets) |
| DB connection error | Pool exhausted | Check pg connections, restart |
| Build fails | Dep issue | rm -rf node_modules && npm ci |
