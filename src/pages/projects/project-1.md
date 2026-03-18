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

This project is primarily a learning and experimentation project. The goal is to explore rendering techniques and renderer/software architecture design rather than provide a production-ready engine. It is not fully optimized yet and may contain bugs.

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

The renderer is currently based on a forward rendering pipeline. Each renderable is submitted with its mesh, material, and transform data, and processed in a single lighting pass.

The rendering is organized into explicit passes, including shadow map generation, main lighting, and post-processing. While the pipeline remains forward for now, the architecture has been refactored to keep rendering stages clearly separated, allowing future extensions such as deferred rendering.

### Physically Based Shading

Shading is implemented using the Cook-Torrance microfacet BRDF.

Materials are defined through a data-driven approach, with parameters such as albedo, roughness, metallic, and ambient occlusion provided via textures or constants. This enables physically based rendering workflows and consistent material behavior under different lighting conditions.

### Image-Based Lighting

The renderer supports image-based lighting (IBL) for both diffuse and specular contributions.

HDR environment maps are processed at load time to generate:

- irradiance maps for diffuse lighting

- prefiltered environment maps for specular reflections

- a BRDF lookup texture for efficient specular integration

These precomputed resources are integrated into the lighting pass, allowing objects to receive realistic ambient lighting from the environment.

### Shadows

Shadow mapping is implemented for both directional and point lights.

- Directional lights use a 2D depth map rendered from the light’s view.

- Point lights use cubemap shadow maps to capture omnidirectional depth.

Shadow data is generated in dedicated passes and sampled during lighting to determine visibility.

### Post-Processing

Post-processing is handled through a sequence of fullscreen passes using framebuffers.

Current effects include:

- SSAO (Screen Space Ambient Occlusion) for local occlusion approximation

- HDR rendering with bloom for high-intensity light scattering

The post-processing pipeline is modular and can be extended with additional effects.

### Architecture

The project is split into two main components:

- **renderer/**  
  Contains the rendering backend (OpenGL abstraction, materials, render passes, etc.).  
  Designed to be reusable and integrated into other projects.

- **app/**  
  A lightweight application used to test and visualize the renderer.  
  Handles scene setup, camera, UI (ImGui), and model loading.

Rendering operates on lightweight data (render meshes, materials, transforms) rather than high-level scene objects, enabling better decoupling and scalability.

The goal of this architecture is to provide a reusable rendering backend that can be integrated into different applications or extended into a more complete engine.

### Future Improvements

The current implementation focuses on clarity and extensibility. The next steps aim to improve both performance and rendering capabilities:

- Deferred rendering pipeline

- Improved shadow techniques such as cascaded shadow maps

- CPU/GPU optimizations, such as draw call batching, resource reuse, and reduced state changes

- Global illumination experiments, exploring real-time techniques to extend beyond direct lighting and IBL

- Render pipeline extensibility, moving toward a more configurable system (e.g., render passes / render graph)

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