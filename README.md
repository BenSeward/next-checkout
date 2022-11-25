# Next Checkout 🛍

This is a simple checkout demonstrating simple architecture patterns to build a production ready checkout. Inspired by Bulletproof React.

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet luctus nibh, eget posuere neque. Integer scelerisque, urna ut dignissim pulvinar, sapien erat tristique libero, sit amet laoreet lorem mi porta odio. Morbi sit amet metus a dolor tincidunt auctor sit amet id sem. Donec tempor felis et eros convallis ultrices.

## Table of Contents

- [⚙️ Project Configuration](./docs/project-configuration.md)
- [📕 Getting Started](./docs/getting-started.md)
- [🗃 State Management](./docs/state-management.md)

## Technical Decision Record

### Why did I choose Zustand?

Within a checkout it is likely we will have state that will want to be shared across multiple levels, nd modified frequently. Whilst Context was a consideration, it is my opinion that Zustand will do a better job at updating state frequently. As well as this I think the developmet experience would be better. This is open for discussioin.
