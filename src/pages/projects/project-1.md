---
layout: ../../layouts/BaseLayout.astro
title: PBR Renderer
description: 3D Real Time Physically Based Renderer in C++ and OpenGL
---

# PBR Renderer

<img
  src="https://raw.githubusercontent.com/sitalbi/PBR-Renderer/refs/heads/main/res/screenshots/screen1.png"
  alt="PBR Renderer"
  width="100%"
/>


<div class="project-meta">

<div class="project-links">
<a href="https://github.com/sitalbi/PBR-Renderer" target="_blank" rel="noopener noreferrer" class="project-link">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJjMCA0LjQyIDIuODcgOC4xNyA2Ljg0IDkuNWMuNS4wOC42Ni0uMjMuNjYtLjV2LTEuNjljLTIuNzcuNi0zLjM2LTEuMzQtMy4zNi0xLjM0Yy0uNDYtMS4xNi0xLjExLTEuNDctMS4xMS0xLjQ3Yy0uOTEtLjYyLjA3LS42LjA3LS42YzEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDNjLjg3IDEuNTIgMi4zNCAxLjA3IDIuOTEuODNjLjA5LS42NS4zNS0xLjA5LjYzLTEuMzRjLTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTJjMC0xLjExLjM4LTIgMS4wMy0yLjcxYy0uMS0uMjUtLjQ1LTEuMjkuMS0yLjY0YzAgMCAuODQtLjI3IDIuNzUgMS4wMmMuNzktLjIyIDEuNjUtLjMzIDIuNS0uMzNzMS43MS4xMSAyLjUuMzNjMS45MS0xLjI5IDIuNzUtMS4wMiAyLjc1LTEuMDJjLjU1IDEuMzUuMiAyLjM5LjEgMi42NGMuNjUuNzEgMS4wMyAxLjYgMS4wMyAyLjcxYzAgMy44Mi0yLjM0IDQuNjYtNC41NyA0LjkxYy4zNi4zMS42OS45Mi42OSAxLjg1VjIxYzAgLjI3LjE2LjU5LjY3LjVDMTkuMTQgMjAuMTYgMjIgMTYuNDIgMjIgMTJBMTAgMTAgMCAwIDAgMTIgMiIvPjwvc3ZnPg==" alt="GitHub" class="icon"/>
    GitHub Repository
</a>
</div>

<div class="project-tags">
<span>C++</span>
<span>OpenGL</span>
<span>PBR</span>
<span>Rendering</span>
</div>

</div>

A real time physically based renderer written in C++ with OpenGL.

## Overview

This is a simple real time physically based renderer written in C++ with OpenGL. It implements the Cook-Torrance BRDF microfacet model to simulate the reflection of light on a surface.

This project started as a learning exercise and was not intended for production use. The goal was for me to have a project where I could try to design a renderer and its base architecture as well as implement various PBR techniques using OpenGL. It is now a goal to refactor it to make it modular and usable as a library for future graphics projects.

## Features

- Cook-Torrance BRDF model
- Material system with texture support
- Forward rendering
- Diffuse and Specular IBL (Image Based Lighting)
- HDRI skyboxes for environment lighting
- Model loading with Assimp
- SSAO (Screen Space Ambient Occlusion)
- HDR Bloom
- Directional light and point lights
- Shadow mapping for both directional and point lights

## Technical Details

### Rendering Pipeline

The renderer currently uses a forward rendering pipeline. Each object is rendered using its associated material and lighting information in a single pass. While simple, this approach was chosen to keep the architecture understandable during the early stages of the project.

The rendering process includes several stages such as shadow map generation, lighting evaluation, and post-processing effects including SSAO and HDR bloom.

### Physically Based Shading

The shading model is based on the Cook-Torrance microfacet BRDF.

Material properties such as albedo, roughness, and metallic are provided through textures, in order to have physically based materials.

### Image Based Lighting

The renderer supports image based lighting (IBL) for both diffuse and specular lighting contributions.

Environment lighting is derived from HDR skyboxes. The renderer generates the required precomputed maps, including irradiance maps for diffuse lighting and prefiltered environment maps for specular reflections. A BRDF lookup texture is also used to approximate the specular integration.

This allows objects to receive realistic lighting from the environment even without direct light sources.

### Shadows

The renderer supports shadow mapping for both directional lights and point lights.

Directional lights use a standard depth map generated from the light’s perspective.
Point lights use a cubemap shadow map to capture depth in all directions around the light source.

These shadow maps are then sampled during the lighting pass to determine shadowed fragments.

### Post Processing

Several screen-space effects are implemented:

SSAO (Screen Space Ambient Occlusion) to approximate small-scale occlusion

HDR rendering and bloom to simulate high-intensity light bleeding

These effects are applied as post-processing passes using framebuffers.

### Architecture

The project is structured around a small rendering framework responsible for:

- mesh and model loading using Assimp

- material management

- shader abstraction

- texture and framebuffer management

- scene rendering

The goal is to progressively refactor the renderer into a more modular architecture where the rendering backend can be reused independently of the application layer.

### Future Improvements

The current implementation focuses on experimentation and learning. Several improvements are planned:

- cleaner separation between renderer and application

- support for deferred rendering

- improved shadow techniques such as cascaded shadow maps

- better resource management and abstraction

- improved lighting features such as global illumination experiments

## Gallery

<div class="project-gallery">
  <img
    src="https://raw.githubusercontent.com/sitalbi/PBR-Renderer/refs/heads/main/res/screenshots/screen2.png"
    alt="Screenshot 1"
    class="gallery-image"
  />
  <img
    src="https://raw.githubusercontent.com/sitalbi/PBR-Renderer/refs/heads/main/res/screenshots/screen3.png"
    alt="Screenshot 2"
    class="gallery-image"
  />
  <img
    src="https://raw.githubusercontent.com/sitalbi/PBR-Renderer/refs/heads/main/res/screenshots/screen4.png"
    alt="Screenshot 3"
    class="gallery-image"
  />
  <img
    src="https://raw.githubusercontent.com/sitalbi/PBR-Renderer/refs/heads/main/res/screenshots/screen5.png"
    alt="Screenshot 4"
    class="gallery-image"
  />
</div>