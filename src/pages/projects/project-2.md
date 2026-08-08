---
layout: ../../layouts/BaseLayout.astro
title: Voxel Game
description: Voxel game inspired by Minecraft written in C++ using OpenGL 4.5.
---

# Voxel Game

<img
  src="/images/voxl.png"
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

Voxel game inspired by Minecraft, written in C++ using OpenGL 4.5.

## Overview

This project is a small Minecraft-inspired voxel game developed from scratch in C++ and OpenGL.

The main focus is on the technical systems behind a voxel world: chunk-based terrain management, procedural generation, mesh optimization, asynchronous chunk generation, voxel collision detection, and block interaction.

The world is generated procedurally and streams around the player as they move. The player can walk, jump, fly, place blocks, and remove blocks.

## Features

* Chunk-based voxel world
* Procedural world generation
* Asynchronous chunk generation using a thread pool
* Greedy meshing
* Voxel-based player collision detection
* Walking, jumping, sprinting, and flying
* Block selection using ray casting
* Block placement and removal
* Voxel ambient occlusion
* Day/night cycle

## Technical Details

### Chunk System

The world is partitioned into fixed-size chunks that act as the main unit for terrain generation, storage, meshing, and updates.

Only the relevant surrounding chunks need to be generated and maintained, allowing the world to progressively stream around the player instead of generating the entire terrain upfront.

This also keeps operations such as block modifications and mesh regeneration localized to individual chunks.

### Greedy Meshing

Rendering every voxel as an individual cube would generate a large number of unnecessary vertices and draw geometry for faces that are never visible.

The project therefore uses [greedy meshing](https://0fps.net/2012/06/30/meshing-in-a-minecraft-game/) to combine adjacent visible faces of the same block type into larger quads.

This significantly reduces the amount of geometry generated for each chunk compared with a naive one-cube-per-voxel approach.

### Asynchronous Chunk Generation

Terrain generation is performed using a small thread pool rather than entirely on the main thread.

Chunk data can therefore be generated in the background while the main thread continues rendering the world and processing player input.

This reduces stalls while new terrain is being generated as the player moves through the world.

### Player Movement & Voxel Collision

The project implements a lightweight collision system specifically for the voxel world rather than relying on an external physics engine.

The player is represented by a simple bounding volume and collision is determined by querying the occupancy of the surrounding voxel cells.

Horizontal movement is resolved independently along the X and Z axes. When movement intersects a solid voxel, the player position is corrected to the corresponding block boundary and movement along that axis is stopped.

Vertical collision is handled separately for floors and ceilings. The same voxel queries are also used to determine whether the player is grounded, allowing the movement system to support gravity and jumping.

A flying mode bypasses collision and gravity for easier navigation and debugging of the generated world.

### Block Interaction

Blocks are selected using a ray cast from the player's camera into the voxel world.

The ray is sampled through the world until it encounters a selectable voxel. The hit block and approximate face normal are then used to determine which block should be removed or where a new block should be placed.

When a block is modified, its chunk is updated so that the corresponding geometry can be regenerated.

### Voxel Ambient Occlusion

Ambient occlusion is calculated during chunk mesh generation using the occupancy of neighboring voxels.

The resulting occlusion values are stored directly in the generated vertex data, providing inexpensive local shading around voxel corners and edges without requiring a screen-space ambient occlusion pass.

## Future Improvements

Possible improvements include more advanced chunk streaming and prioritization, improved multithreading and job scheduling, visibility culling, more efficient chunk mesh rebuilding, faster voxel traversal for block selection, and more varied procedural world generation.
