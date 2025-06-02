# Todo-app (v.2)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)

[![Live Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge)](https://todo-app-three-tau-90.vercel.app/)

A simple and lightweight Todo application built with React, styled with CSS, and powered by Vite. Users can add tasks, mark them as completed, and remove completed tasks. Todos are saved in the browser's local storage, so they persist across page reloads.

## Stack

- HTML
- CSS
- JavaScript (React)
- Vite

## Features

- Add new todos
- Mark todos as completed
- Remove completed todos
- Persistent storage via localStorage
- Option to toggle view (list and grid)

## How it works

The app consists of three main buttons.

- **Create** - Opens up a modal popup which contains an input field and a "Create" and "Cancel" button
- **Remove completed** - Removes the todos that have been marked as completed from the list
- **Grid/list view** - toggles how the todos are shown: either as a grid or a list

## Future plans

- Add **tags/categories** to todos
- Set **priority levels**
- Implement **filtering** by:
  - Completion status
  - Category/tag
  - Priority
- Add **light mode/dark mode** toggle
