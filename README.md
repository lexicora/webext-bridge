<p align="center">
	<a href="https://serversideup.net/open-source/webext-bridge/"><img src="./.github/header.png" width="1200" alt="webext-bridge Header" /></a>
</p>

> [!CAUTION]
> **THIS IS A FORK**
> This repository is a custom fork of the original [webext-bridge](https://github.com/serversideup/webext-bridge) by Server Side Up. 
> **Purpose:** Added side panel support.
> **Status:** This version is maintained specifically for [GitHub - lexicora/lexicora-extension](https://github.com/lexicora/lexicora-extension).

---

# Introduction
**Messaging in web extensions made easy. Batteries included.** `webext-bridge` is a tiny library that provides a simple and consistent API for sending and receiving messages between different parts of your web extension, such as `background`, `content-script`, `devtools`, `popup`, `side-panel`, `options`, and `window` contexts.

## Custom Features in this Fork
In addition to the standard features, this fork includes:
* **Side Panel support**: Added support for browser side panels.
* **Optimizations**: -.

## Installation
Since this is a custom fork, you should install it directly from this repository using `pnpm`:

```bash
pnpm add github:your-username/webext-bridge#your-branch-name
```

# Usage (Original Features)
For full documentation on the standard API, please refer to the [Official Documentation](https://serversideup.net/open-source/webext-bridge/docs).

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
