---
layout: ../../layouts/BaseLayout.astro
title: UE5 Gameplay prototype
description: A third person gameplay prototype on Unreal Engine 5.
---

# UE5 Gameplay prototype

<img
  src="/images/thirdperson.gif"
  alt="UE5 Gameplay prototype"
  width="100%"
/>

<div class="project-meta">

<div class="project-links">
<a href="https://github.com/sitalbi/UE-Proto" target="_blank" rel="noopener noreferrer" class="project-link">
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJjMCA0LjQyIDIuODcgOC4xNyA2Ljg0IDkuNWMuNS4wOC42Ni0uMjMuNjYtLjV2LTEuNjljLTIuNzcuNi0zLjM2LTEuMzQtMy4zNi0xLjM0Yy0uNDYtMS4xNi0xLjExLTEuNDctMS4xMS0xLjQ3Yy0uOTEtLjYyLjA3LS42LjA3LS42YzEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDNjLjg3IDEuNTIgMi4zNCAxLjA3IDIuOTEuODNjLjA5LS42NS4zNS0xLjA5LjYzLTEuMzRjLTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTJjMC0xLjExLjM4LTIgMS4wMy0yLjcxYy0uMS0uMjUtLjQ1LTEuMjkuMS0yLjY0YzAgMCAuODQtLjI3IDIuNzUgMS4wMmMuNzktLjIyIDEuNjUtLjMzIDIuNS0uMzNzMS43MS4xMSAyLjUuMzNjMS45MS0xLjI5IDIuNzUtMS4wMiAyLjc1LTEuMDJjLjU1IDEuMzUuMiAyLjM5LjEgMi42NGMuNjUuNzEgMS4wMyAxLjYgMS4wMyAyLjcxYzAgMy44Mi0yLjM0IDQuNjYtNC41NyA0LjkxYy4zNi4zMS42OS45Mi42OSAxLjg1VjIxYzAgLjI3LjE2LjU5LjY3LjVDMTkuMTQgMjAuMTYgMjIgMTYuNDIgMjIgMTJBMTAgMTAgMCAwIDAgMTIgMiIvPjwvc3ZnPg==" alt="GitHub" class="icon"/>
    GitHub Repository
</a>
</div>

<div class="project-tags">
<span>C++</span>
<span>Unreal Engine 5</span>
<span>Gameplay Ability System</span>
</div>

</div>

A 3D Unreal Engine 5 action gameplay prototype focused on character abilities, combat systems, and gameplay architecture using C++ and the Gameplay Ability System.

## Overview

This project is a third-person gameplay prototype developed in Unreal Engine 5. Its original goal was to experiment with gameplay 3C: Controls, Character, and Camera.

The project is currently being reworked into a Gameplay Ability System-based prototype. The goal is to build reusable UE5 C++ gameplay systems around character abilities, movement actions, combat actions, animation integration, and ability-driven gameplay logic.

The current version includes a GAS-based dash ability, an attack ability base, and a first light attack ability implemented with a basic combo system and damage handling.

## Features

- Third-person character controller based on Unreal Engine 5
- C++ gameplay architecture
- Gameplay Ability System integration
- Ability input binding using Enhanced Input
- GAS-based dash ability
- Reusable attack ability base
- Light attack ability with a basic combo system
- Animation montage integration for ability actions
- Ongoing combat system implementation

## Technical Details

The project uses Unreal Engine 5 and C++ to implement a modular gameplay ability architecture. Character actions are being moved into Gameplay Ability classes in order to separate input, ability activation, animation playback, and gameplay logic.

The dash ability is implemented as a GAS ability and uses directional input to trigger movement behavior and animation. The combat system is being structured around a reusable attack ability base. The first implemented attack is a light attack ability using a basic combo system, allowing consecutive attack inputs to transition through multiple attack steps. This provides a foundation for expanding the combat system with damage application, hit detection, hit reactions, and enemy interactions.

The current focus is to build a clean foundation for ability-driven gameplay, including input handling, ability activation, animation montage playback, and future combat interactions such as damage application and hit reactions.

## Gallery

Coming soon.

</div>