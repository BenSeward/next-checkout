# 🗃 State Management

State management is split into 2 main areas. These are component state, and application state.

## Component State Management

This is local state broadly scopes around one or a few components. For this it is advised to use React `useState`. State should ideally live as close as possible to where it is being used. Start by using local state. If you find it being used elsewhere, then move it into the global state.

## Global State Management

We use Zustand for global state management. Here are a few rules to follow when using the global store

1. There is one store for everything
2. All store items must be typed
