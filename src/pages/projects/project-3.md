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

A third-person action gameplay prototype developed in Unreal Engine 5, focused on character abilities, combat systems, responsive controls, and reusable gameplay architecture using C++ and the Gameplay Ability System.

## Overview

This project is a third-person action gameplay prototype developed in Unreal Engine 5.

It originally started as an experiment around gameplay 3C — Controls, Character, and Camera — and gradually evolved into a broader action-combat prototype built around Unreal Engine's Gameplay Ability System.

The main goal is to explore how player abilities, combat interactions, animation, attributes, and feedback systems can work together to create responsive and extensible gameplay mechanics.

While the project is also used to deepen my understanding of GAS and Unreal Engine architecture, the primary focus remains on building and iterating on player-facing gameplay systems.

## Features

* Third-person character movement and controls
* C++ gameplay architecture
* Gameplay Ability System integration
* Enhanced Input integration with gameplay abilities
* Directional dash with root-motion-based movement
* Reusable attack and combo framework
* Attribute-based health and damage system
* Enemy hit reactions and death handling
* Gameplay Events for combat timing and interactions
* Gameplay Cues for visual gameplay feedback
* Animation montage integration with gameplay abilities
* Data-driven weapon and combat configuration

## Gameplay Systems

### Character Abilities

Character actions are implemented as Gameplay Abilities, allowing movement, attacks, animation playback, and gameplay state changes to be handled through a common ability framework.

The directional dash is one example of this approach. Player input determines the dash direction, while root motion controls movement and directional montage sections provide matching animation feedback.

This structure makes it possible to experiment with new abilities while keeping input, movement logic, animation, and gameplay state clearly separated.

### Combat

The combat system is built around reusable attack abilities rather than individual hard-coded attacks.

Attack timing is driven by animation events, while Gameplay Events are used to communicate between animation and gameplay logic. Hit detection can therefore remain synchronized with the active portion of an attack animation.

Weapon data defines parameters such as damage and Gameplay Effects, allowing individual attacks and weapons to be configured without duplicating combat logic.

Damage is applied through Gameplay Effects and Attribute Sets. Enemies react to incoming attacks through dedicated hit-reaction abilities, with the reaction direction determined from the relative position of the attacker.

This allows attacks to produce different reactions depending on where the hit originated.

### Gameplay Feedback

Gameplay Cues are used for visual feedback such as hit flashes and other combat effects.

Keeping presentation feedback separate from the core combat logic makes it easier to iterate on how attacks feel without modifying damage or ability behavior.

Animation montages, hit reactions, ability events, and Gameplay Cues work together to reinforce the timing and readability of combat interactions.

## Architecture

The project uses Unreal Engine 5 and C++ with GAS as the foundation for a modular gameplay architecture.

Gameplay Abilities encapsulate individual character actions, while Gameplay Events and Gameplay Tags provide communication between systems. Attribute Sets and Gameplay Effects handle character state and combat values, and data assets are used where appropriate to keep gameplay parameters configurable.

The objective is not only to build individual mechanics, but to create systems that remain flexible enough to support continued gameplay experimentation.

## Current Development

Current work focuses on expanding the combat system and improving the overall feel of player interactions.

Planned areas of development include:

* Additional attacks and abilities
* More advanced combo behavior
* Improved enemy reactions and interactions
* Further iteration on character movement and responsiveness
* More gameplay feedback and combat polish
* Continued experimentation with scalable GAS-based gameplay patterns

## Gallery

Coming soon.
