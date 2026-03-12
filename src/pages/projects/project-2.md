---
layout: ../../layouts/BaseLayout.astro
title: Voxel Game
description: Voxel game inspired by Minecraft written in C++ using OpenGL 4.5.
---

# Voxel Game

<img
  src="https://camo.githubusercontent.com/a02ef025f485827c6ec68a738ddc1b327e76c39848a07141db6894cffb857954/68747470733a2f2f73696d6f6e6f2e66722f766f786c322e706e67"
  alt="Voxel Game"
  width="100%"
/>

<div class="project-meta">

<div class="project-links">
<a href="https://github.com/sitalbi/voxl" target="_blank" rel="noopener noreferrer" class="project-link">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJjMCA0LjQyIDIuODcgOC4xNyA2Ljg0IDkuNWMuNS4wOC42Ni0uMjMuNjYtLjV2LTEuNjljLTIuNzcuNi0zLjM2LTEuMzQtMy4zNi0xLjM0Yy0uNDYtMS4xNi0xLjExLTEuNDctMS4xMS0xLjQ3Yy0uOTEtLjYyLjA3LS42LjA3LS42YzEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDNjLjg3IDEuNTIgMi4zNCAxLjA3IDIuOTEuODNjLjA5LS42NS4zNS0xLjA5LjYzLTEuMzRjLTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTJjMC0xLjExLjM4LTIgMS4wMy0yLjcxYy0uMS0uMjUtLjQ1LTEuMjkuMS0yLjY0YzAgMCAuODQtLjI3IDIuNzUgMS4wMmMuNzktLjIyIDEuNjUtLjMzIDIuNS0uMzNzMS43MS4xMSAyLjUuMzNjMS45MS0xLjI5IDIuNzUtMS4wMiAyLjc1LTEuMDJjLjU1IDEuMzUuMiAyLjM5LjEgMi42NGMuNjUuNzEgMS4wMyAxLjYgMS4wMyAyLjcxYzAgMy44Mi0yLjM0IDQuNjYtNC41NyA0LjkxYy4zNi4zMS42OS45Mi42OSAxLjg1VjIxYzAgLjI3LjE2LjU5LjY3LjVDMTkuMTQgMjAuMTYgMjIgMTYuNDIgMjIgMTJBMTAgMTAgMCAwIDAgMTIgMiIvPjwvc3ZnPg==" alt="GitHub" class="icon"/>
    GitHub Repository
</a>
</div>

<div class="project-tags">
<span>C++</span>
<span>OpenGL</span>
<span>Voxel</span>
<span>Multi-threading</span>
</div>

</div>

Voxel game inspired by Minecraft written in C++ using OpenGL 4.5.

## Overview

This is a demo of a minecraft inspired voxel game. It contains basic movement and interaction (placing and removing cubes). The world is procedurally generated and only contains one biome at the moment. 

The plan going forward is to extend the features: adding multi-block placement, multi biomes, caves, light-emitting blocks, etc...

## Features

This demo include the following features:

- Chunk-based rendering
- Infinite world generation using basic thread pool for chunk generation
- Basic player movement
- Basic block interaction (placing and removing blocks)
- Ambient occlusion
- Day/Night cycle

## Technical Details

### Chunk System

The world is partitioned into fixed-size chunks used as the main world unit.
This keeps updates localized and makes streaming terrain around the player manageable.
In its current form, this system is intentionally simple, but it already allows the world to stream in progressively without freezing the application.

### Greedy Meshing

To avoid the cost of generating one cube mesh per voxel, the project uses [greedy meshing](https://0fps.net/2012/06/30/meshing-in-a-minecraft-game/).
Adjacent faces of the same block type are merged into larger quads, which greatly reduces mesh complexity and improves rendering performance.

### Asynchronous Chunk Generation

Chunk generation is offloaded to a small thread pool.
This allows terrain data to be created in the background while the main thread continues handling rendering and player interaction, reducing visible stalls during world streaming.

### Voxel Ambient Occlusion

Ambient occlusion is computed from neighboring block occupancy during mesh generation and stored directly in the generated vertices.

### Future Improvements

Next steps include better chunk streaming priority, stronger multithreading architecture, visibility culling, more efficient chunk rebuilds, and more advanced world generation.

## Gallery

<div class="project-gallery">
  <img
    src="https://camo.githubusercontent.com/a02ef025f485827c6ec68a738ddc1b327e76c39848a07141db6894cffb857954/68747470733a2f2f73696d6f6e6f2e66722f766f786c322e706e67"
    alt="Screenshot 1"
    class="gallery-image"
  />
  <img
    src="https://raw.githubusercontent.com/sitalbi/voxl/refs/heads/main/res/repo/voxl.gif"
    alt="Screenshot 2"
    class="gallery-image"
  />
</div>