# 🛍 Next Checkout
## Introduction

This is a simple checkout demonstrating simple architecture patterns to build a production ready checkout. Inspired by Bulletproof React and Hexagonal architecture.

## Table of Contents

- [💻 Application Overview](./docs/application-overview.md)
- [⚙️ Project Configuration](./docs/project-configuration.md)
- [📕 Getting Started](./docs/getting-started.md)
- [🗃 State Management](./docs/state-management.md)

## Technical Decision Record

### Why did I choose Zustand?

Within a checkout it is likely we will have state that will want to be shared across multiple levels, nd modified frequently. Whilst Context was a consideration, it is my opinion that Zustand will do a better job at updating state frequently. As well as this I think the developmet experience would be better. This is open for discussioin.
