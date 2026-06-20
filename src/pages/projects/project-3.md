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

This project is a third-person gameplay prototype developed in Unreal Engine 5. Its original goal was to experiment with gameplay 3C (Controls, Character, and Camera), but it has since evolved into a Gameplay Ability System (GAS) learning project focused on building reusable gameplay systems in C++.

The project uses a GAS-driven architecture for character abilities, combat interactions, animation integration, attribute management, and gameplay events. The long-term objective is to create a solid gameplay framework that can serve as a foundation for more advanced action-combat mechanics.

## Features

- Third-person character controller based on Unreal Engine 5
- C++ gameplay architecture
- Gameplay Ability System integration
- Enhanced Input integration with GAS
- Directional dash ability using root motion
- Reusable attack and combo framework
- GAS-driven combat system (attributes, damage, hit reactions, death)
- Gameplay Events and Gameplay Cues for combat interactions and visual feedback
- Animation montage integration for gameplay abilities

## Technical Details

The project uses Unreal Engine 5 and C++ to implement a modular gameplay architecture built around the Gameplay Ability System. Character actions are encapsulated as Gameplay Abilities, allowing input handling, animation playback, gameplay logic, and combat interactions to remain decoupled and reusable.

Movement abilities are implemented using GAS and root motion tasks. The dash ability supports directional movement and directional animation playback based on player input.

Combat is structured around a reusable attack ability base class. Attack abilities use Gameplay Events and animation notifies to drive hit detection and combat timing. Weapon data assets define combat parameters such as damage values and Gameplay Effects, allowing combat behavior to be configured independently from ability implementations.

Damage is applied through Gameplay Effects and Attribute Sets. Enemies use a health attribute system and react to incoming attacks through Gameplay Event-triggered hit reaction abilities. Directional hit reactions determine the appropriate animation section to play based on the attacker's relative position.

Visual combat feedback is handled through Gameplay Cues, enabling effects such as hit flashes to remain decoupled from gameplay logic. This architecture allows gameplay systems, animation systems, and visual presentation systems to remain independent while communicating through GAS events and tags.

Current development focuses on expanding the combat framework, improving enemy interactions, and continuing to explore scalable GAS-based gameplay patterns.

## Gallery

Coming soon.

</div>