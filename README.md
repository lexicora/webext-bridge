<p align="center">
	<a href="https://serversideup.net/open-source/webext-bridge/"><img src="./.github/header.png" width="1200" alt="webext-bridge Header" /></a>
</p>

> [!IMPORTANT]
> **ARCHIVED & DEPRECATED**
> This fork is **no longer maintained** and has been archived. The original author has also discontinued maintenance of the upstream repository. **Do not use this library for new projects.**
>
> This was a custom fork of the original [webext-bridge](https://github.com/serversideup/webext-bridge) by Server Side Up, originally created to add side panel support. The primary consumer ([lexicora/lexicora-extension](https://github.com/lexicora/lexicora-extension)) has migrated away from this library.

---

## ⚠️ Security & Maintenance Notice

### Status
- **This fork is NOT maintained** — only archival versions are available
- **Dependencies may contain security vulnerabilities** — no security updates are applied
- **Use at your own risk** — this library should NOT be used in new projects

### Usage Warnings

**Internal Use Only**
- This library should **only be used internally within your extension** — never expose it externally via `window` messaging or any public API
- Externalizing this library introduces significant security risks

**Content-Script Messaging Not Recommended**
- **Do NOT use this library for content-script messaging** due to:
  - Security concerns with cross-context messaging
  - Browser bfcache (back-forward cache) compatibility issues that can cause message delivery failures
- **Recommended alternatives:**
  - **Native Messaging** for extension-to-native app communication
  - **[@webext-core/messaging](https://github.com/webext-core/messaging)** for safer extension messaging patterns

---

# Introduction
**Messaging in web extensions made easy. Batteries included.** `webext-bridge` is a tiny library that provides a simple and consistent API for sending and receiving messages between different parts of your web extension, such as `background`, `content-script`, `devtools`, `popup`, `side-panel`, `options`, and `window` contexts.

## What This Fork Added
This fork originally added:
* **Side Panel support** — browser side panel messaging capabilities
* **Minor optimizations** for the Lexicora extension

## Installation (Legacy/Archived)

> **This library is archived. For new projects, use recommended alternatives instead.**

If you have an existing dependency on this fork (not recommended), you can install from the release archive:

``` console
pnpm add https://github.com/lexicora/webext-bridge/releases/download/[TAG OF A RELEASE]/webext-bridge-6.0.1.tgz
```

---

## Original Documentation (Archived)
This repository is archived and no longer maintained. For reference, the original `webext-bridge` documentation is available at the [Official Documentation](https://serversideup.net/open-source/webext-bridge/docs), though you should use the recommended alternatives listed above for new projects.

# Development
If you are contributing to this fork:

1. Clone the repository.
2. Install dependencies: pnpm install
3. Build the project: pnpm build (This is required to generate the dist folder used by the extension).

# Credits
The original `webext-bridge` is created and maintained by [Dan Pastori](https://twitter.com/danpastori) and [Jay Rogers](https://twitter.com/jaydrogers) at [Server Side Up](https://serversideup.net/).

# Original Resources
- **[Official GitHub](https://github.com/serversideup/webext-bridge)**
- **[Discord](https://serversideup.net/discord)**
- **[Professional Support](https://serversideup.net/professional-support)**

License
This project is open-source software licensed under the [MIT license](LICENSE).
