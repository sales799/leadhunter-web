## Summary
<!-- What does this PR do? 1-3 sentences -->

## Type of Change
- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Database migration
- [ ] Configuration change
- [ ] Documentation

## Database Changes
<!-- If this PR includes migrations, fill this section. Otherwise write "None" -->
- [ ] Migration is additive only (ADD column/table/index) per SO-83
- [ ] Pre-migration backup command: `pg_dump -Fc <db> -f /tmp/<db>_pre_<migration>.dump`
- [ ] Rollback SQL provided below

```sql
-- ROLLBACK SQL (required for any DB change)
-- Example: ALTER TABLE x DROP COLUMN y;
```

## Checklist
- [ ] `npm run build` passes clean
- [ ] `npx tsc --noEmit` passes clean
- [ ] Tests pass (`npm test`)
- [ ] No secrets in code (checked .env.example)
- [ ] Security headers verified (if touching Nginx)
- [ ] CHANGELOG.md updated
- [ ] RUNBOOK.md updated (if ops impact)

## Deployment Notes
<!-- Any special deployment steps? Port changes? Environment variables? -->
