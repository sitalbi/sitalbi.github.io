---
layout: ../../layouts/BaseLayout.astro
title: Signed Distance Field Raymarching
description: An experimental real-time Signed Distance Field (SDF) raymarching renderer written in C++ and OpenGL. 
---

# PBR Renderer

<img
  src="https://raw.githubusercontent.com/sitalbi/sdf-renderer/refs/heads/main/res/screenshots/screen1.gif"
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

The goal of the project is to explore the possibilities of implicit surface rendering outside of a traditional rasterization pipeline.

## Features

- Raymarching-based rendering of Signed Distance Fields
- Primitive support: spheres, rounded boxes, planes
- Scene composition using SDF operations
- Skybox background
- PBR shading (albedo, metalic, roughness, ambient occlusion) with image based lighting (IBL)
- Basic scene editor with ImGui:
  - inspect and edit shapes
  - create / delete shapes
  - scene tweaking
- Free camera controls

## Technical Details

The renderer uses a fullscreen quad and performs raymarching in the fragment shader to evaluate a scene composed of signed distance functions. Each primitive is represented by an SDF, and the final scene is built through operations such as union, smooth union, intersection, subtraction, and smooth subtraction.

Surface normals are reconstructed from the SDF gradient using finite differences and are used for real-time lighting, reflections, and shadowing. The renderer implements a physically based shading model using a Cook-Torrance BRDF with configurable material parameters such as albedo, metallic, roughness, and ambient occlusion.

Image-based lighting is supported through HDR environment maps. The renderer converts an equirectangular HDR texture into a cubemap, generates irradiance and prefiltered environment maps, and uses a BRDF lookup texture for specular IBL. This allows metallic and rough surfaces to reflect the environment with roughness-dependent filtering.

Direct lighting is provided through a configurable light, with soft shadows computed by secondary raymarching toward the light source. The final image is tone mapped and gamma corrected, with optional supersampling anti-aliasing for improved image quality.

The project also includes a lightweight ImGui-based editor for modifying scene objects, material parameters, lighting settings, and raymarching quality at runtime. Selected objects can be manipulated interactively using ImGuizmo translation and scaling controls.

### Future Improvements

Future improvements will focus on scalability, performance, and editor usability. Moving scene data from uniform arrays to SSBOs to support larger scenes and cleaner GPU-side data access. Separating distance-only SDF evaluation from full surface and material evaluation, which should reduce the cost of raymarching, normal reconstruction, and shadow rays.

Additional rendering improvements would be the implementation of some acceleration structure and also exploring cheaper anti-aliasing methods such as FXAA or temporal accumulation.


## Gallery

<div class="project-gallery">
  <img
    src="https://github.com/sitalbi/sdf-renderer/raw/main/res/screenshots/screen2.png"
    alt="Screenshot 1"
    class="gallery-image"
  />
  <img
    src="https://github.com/sitalbi/sdf-renderer/raw/main/res/screenshots/screen3.png"
    alt="Screenshot 2"
    class="gallery-image"
  />