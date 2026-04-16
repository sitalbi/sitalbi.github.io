---
layout: ../../layouts/BaseLayout.astro
title: Signed Distance Field Raymarching
description: An experimental real-time Signed Distance Field (SDF) raymarching renderer written in C++ and OpenGL. 
---

# PBR Renderer

<img
  src="https://raw.githubusercontent.com/sitalbi/sdf-renderer/refs/heads/main/res/screenshots/screen1.png"
  alt="Signed Distance Field Raymarching"
  width="100%"
/>


<div class="project-meta">

<div class="project-links">
<a href="https://github.com/sitalbi/sdf-renderer" target="_blank" rel="noopener noreferrer" class="project-link">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJjMCA0LjQyIDIuODcgOC4xNyA2Ljg0IDkuNWMuNS4wOC42Ni0uMjMuNjYtLjV2LTEuNjljLTIuNzcuNi0zLjM2LTEuMzQtMy4zNi0xLjM0Yy0uNDYtMS4xNi0xLjExLTEuNDctMS4xMS0xLjQ3Yy0uOTEtLjYyLjA3LS42LjA3LS42YzEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDNjLjg3IDEuNTIgMi4zNCAxLjA3IDIuOTEuODNjLjA5LS42NS4zNS0xLjA5LjYzLTEuMzRjLTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTJjMC0xLjExLjM4LTIgMS4wMy0yLjcxYy0uMS0uMjUtLjQ1LTEuMjkuMS0yLjY0YzAgMCAuODQtLjI3IDIuNzUgMS4wMmMuNzktLjIyIDEuNjUtLjMzIDIuNS0uMzNzMS43MS4xMSAyLjUuMzNjMS45MS0xLjI5IDIuNzUtMS4wMiAyLjc1LTEuMDJjLjU1IDEuMzUuMiAyLjM5LjEgMi42NGMuNjUuNzEgMS4wMyAxLjYgMS4wMyAyLjcxYzAgMy44Mi0yLjM0IDQuNjYtNC41NyA0LjkxYy4zNi4zMS42OS45Mi42OSAxLjg1VjIxYzAgLjI3LjE2LjU5LjY3LjVDMTkuMTQgMjAuMTYgMjIgMTYuNDIgMjIgMTJBMTAgMTAgMCAwIDAgMTIgMiIvPjwvc3ZnPg==" alt="GitHub" class="icon"/>
    GitHub Repository
</a>
</div>

<div class="project-tags">
<span>C++</span>
<span>OpenGL</span>
<span>Signed Distance Field</span>
<span>Raymarching</span>
</div>

</div>

An experimental real-time Signed Distance Field (SDF) raymarching renderer written in C++ and OpenGL.

## Overview

This project is a personal rendering experiment focused on real-time SDF rendering and raymarching.  
The scene is rendered by raymarching SDF primitives in the fragment shader over a fullscreen quad, with shape composition and shading evaluated procedurally at runtime.

The goal of the project is to explore the foundations of implicit surface rendering and build a deeper understanding of rendering techniques outside of a traditional rasterization pipeline.

## Features

- Raymarching-based rendering of Signed Distance Fields
- Primitive support: spheres, rounded boxes, planes
- Scene composition using SDF operations
- Skybox background
- Basic ambient + diffuse lighting with soft shadows.
- Basic scene editor with ImGui:
  - inspect and edit shapes
  - create / delete shapes
  - scene tweaking
- Free camera controls

## Technical Details

The renderer uses a fullscreen quad and performs raymarching in the fragment shader to evaluate the scene. Each object is represented as a signed distance function, and the final scene is built through SDF composition operations such as unions and smooth unions.

Surface normals are reconstructed from the SDF gradient using finite differences, used for real-time lighting and shadowing.  

The current lighting model is based on simple ambient and diffuse shading, with soft shadows computed through secondary raymarching toward the light source and checking for light obstruction.

Image quality is improved through optional supersampling anti-aliasing, where multiple subpixel samples are evaluated and averaged per pixel.

The project also includes a lightweight ImGui-based editor to modify scene parameters interactively during runtime.

### Future Improvements

- Configurable per-shape composition operations
- Reflections
- PBR shading
- Additional texturing
- Improved anti-aliasing (exploring multiple approaches)
- Performance optimizations

## Gallery

Coming soon.