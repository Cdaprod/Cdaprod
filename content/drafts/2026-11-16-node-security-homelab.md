# Cdaprod creator draft — 2026-11-16

**Status: draft only. Not approved for publication or solicitation.**

## Working title
Node.js November 2026 security update: what homelab maintainers should check

## Short-form script (60–90 seconds)
On November 11, the Node.js project released security fixes for the supported 22, 24, and 26 lines. The advisory includes HTTP/2 denial-of-service and memory-disclosure issues, TLS handling flaws, and a proxy-error path that can leak credentials into logs. If you run Next.js, a Node API gateway, or Node-based monitoring tools, inventory the actual Node runtime in each container and host. Don't assume updating a package.json dependency updates the runtime image. Pin a patched release, rebuild in a test environment, run HTTP and TLS smoke tests, and review logs without publishing credentials. No production change without validation.

## Reproducible companion checklist
1. Inventory runtime versions with `node --version` on development hosts and inside each relevant container; record image digest and base image.
2. Compare against Node.js security releases: 22.23.5, 24.22.3, 26.13.1 (November 11, 2026).
3. Inspect Dockerfiles, Compose services, and GitHub Actions `setup-node` versions; distinguish Node runtime from npm package versions.
4. Prepare a scoped PR with patched images and lockfiles, avoiding untested framework major upgrades.
5. Validate builds, tests, TLS/HTTP2 routes, health checks, and rollback; never expose tokens in diagnostic logs.

## Revenue experiment (approval required)
Offer a low-cost, fixed-scope **Node/Compose Security Inventory Kit**: a downloadable Markdown checklist plus a local read-only shell inventory script and sample CI policy. Suggested hypothesis: $9–$19 digital download. Validate demand before investing in paid distribution. No purchase, listing, marketing post, or outbound contact is authorized by this draft.

## Primary sources
- Node.js security advisory (2026-11-11): https://nodejs.org/en/blog/vulnerability/november-2026-security-releases
- GitHub ARM32 hosted-runner retirement (2026-11-12): https://github.blog/changelog/2026-11-12-actions-for-arm32-linux-windows-retirement/
- GitHub Dependabot inactivity policy (2026-11-10): https://github.blog/changelog/2026-11-10-dependabot-alerts-will-pause-on-inactive-repositories/

## Verification
This is a documentation-only draft. No software tests or runtime changes are represented as completed. Editorial and technical review are required before publishing.
