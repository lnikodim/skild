<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Skild TanStack Start application. Changes include installing `@posthog/react`, initializing the PostHog provider in the root layout with a EU reverse proxy, identifying Clerk-authenticated users automatically, and instrumenting all key user interactions across the skill registry.

## Summary of changes

| File | Change |
|------|--------|
| `vite.config.ts` | Added reverse proxy routes for `/ingest`, `/ingest/static`, `/ingest/array` → EU PostHog endpoints |
| `src/routes/__root.tsx` | Added `PostHogProvider` wrapping the app with EU config; added `PostHogAuthSync` component to identify/reset users via Clerk's `useUser` hook |
| `src/components/SkillCard.tsx` | Added `usePostHog` hook; tracking copy, upvote, save, and open actions per skill |
| `src/routes/index.tsx` | Added `usePostHog` hook; tracking Browse Registry and Publish Skill CTA clicks |
| `.env` | Added `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` |

## Instrumented events

| Event name | Description | File |
|---|---|---|
| `skill_install_command_copied` | User copied the install command from a skill card | `src/components/SkillCard.tsx` |
| `skill_upvoted` | User clicked the upvote button on a skill card | `src/components/SkillCard.tsx` |
| `skill_saved` | User clicked the save/bookmark button on a skill card | `src/components/SkillCard.tsx` |
| `skill_opened` | User clicked to open a skill from the skill card | `src/components/SkillCard.tsx` |
| `browse_registry_clicked` | User clicked the Browse Registry CTA on the homepage hero | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicked the Publish Skill CTA on the homepage hero | `src/routes/index.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/170901/dashboard/657235
- **Homepage → Skill Discovery Funnel** (browse → open → copy): https://eu.posthog.com/project/170901/insights/5fLWJDBU
- **Skill Engagement Trend** (daily copies, upvotes, saves): https://eu.posthog.com/project/170901/insights/uLk4Mzrz
- **Homepage CTA Clicks** (Browse Registry vs Publish Skill): https://eu.posthog.com/project/170901/insights/aKZSlpAN
- **Install Command Copy Rate** (open → copy funnel): https://eu.posthog.com/project/170901/insights/2d6Q9XnX
- **Skill Engagement Breakdown** (all interactions, last 30d): https://eu.posthog.com/project/170901/insights/1WYJDvc4

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
