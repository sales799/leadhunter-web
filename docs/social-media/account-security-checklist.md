# Social Account Security Checklist — LeadHunterIQ

**Purpose**: Protect social media accounts as business-critical assets.
**Governing Order**: CTO — Infrastructure (Gap C9)
**Review frequency**: Monthly

---

## Account Security Matrix

| Action | LinkedIn (Personal) | LinkedIn (Company) | Twitter/X | YouTube | Email (associated) |
|--------|--------------------|--------------------|-----------|---------|-------------------|
| 2FA enabled | [ ] | [ ] | [ ] | [ ] | [ ] |
| Recovery phone set | [ ] | [ ] | [ ] | [ ] | [ ] |
| Backup email set | [ ] | [ ] | [ ] | [ ] | [ ] |
| Strong unique password | [ ] | [ ] | [ ] | [ ] | [ ] |
| Password in Bitwarden | [ ] | [ ] | [ ] | [ ] | [ ] |
| Second admin added | N/A | [ ] | N/A | [ ] | N/A |

## 2FA Setup Instructions

### LinkedIn
1. Settings > Sign in & Security > Two-step verification
2. Use authenticator app (NOT SMS — SIM swap risk)
3. Save backup codes in Bitwarden secure notes

### Twitter/X
1. Settings > Security and Account Access > Security > Two-factor authentication
2. Enable via authenticator app
3. Generate and save backup code

### YouTube (Google Account)
1. myaccount.google.com > Security > 2-Step Verification
2. Use Google Authenticator or hardware key
3. Add backup phone number

## Admin Access Protocol

### LinkedIn Company Page
- **Primary admin**: Bhaskar Anand (personal LinkedIn)
- **Backup admin**: [Add trusted team member]
- **Policy**: Minimum 2 super admins at all times
- **Access review**: Monthly — remove anyone who's left the team

### Twitter/X
- **Primary**: @LeadHunterIQ account
- **Password shared with**: Stored in Bitwarden org vault only
- **Policy**: Never share credentials via chat/email

### YouTube
- **Channel owner**: Google account [email]
- **Manager access**: [Add backup person]

## Monthly Backup Protocol

| Platform | Backup Method | Frequency |
|----------|--------------|-----------|
| LinkedIn | Export all post copy to Google Drive content repo | Monthly |
| Twitter/X | Download archive (Settings > Your Account > Download Archive) | Monthly |
| YouTube | Download all videos via YouTube Studio | Monthly |
| Content repo | Full Google Drive backup | Monthly |

## Credential Storage

All social media credentials must be stored in:
- **Primary**: Bitwarden (free tier) — shared organization vault
- **Backup**: Encrypted note in Google Drive (password-protected)
- **Never**: Browser saved passwords, sticky notes, chat messages, email

## Incident Response

If an account is compromised:
1. Immediately change password from a trusted device
2. Revoke all active sessions
3. Check for unauthorized posts — delete if found
4. Review connected apps and revoke unknown ones
5. Enable/re-enable 2FA
6. Notify team via Signal Squad WhatsApp
7. If account locked: follow platform recovery process (see Crisis Protocol Tier 3)

---

*Last updated: 25 March 2026*
*Owner: CTO (SENTINEL)*
