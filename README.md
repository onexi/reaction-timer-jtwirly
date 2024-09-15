# Reaction Timer App

## Overview

This is a simple Reaction Timer App built with Next.js. It allows users to test their reaction times by clicking the stop button as soon as it changes color after a random delay. The user can enter their name, and their reaction time is recorded and displayed in a list of times.

### Features
- Randomized delay between 1 and 20 seconds.
- Prevents early clicks by ignoring them and displaying a warning.
- Cooldown period for false attempts to prevent spam-clicking.
- Logs the user's reaction time and name and displays them on the page.
- Stores the fastest reaction time on the server.

## Demo

Here's how the app works:
1. The user enters their name in the input field.
2. Click the "Start" button to begin the timer.
3. After a random delay, the "Stop" button will turn green.
4. Click the "Stop" button as quickly as possible once the color changes.
5. The reaction time will be recorded and displayed alongside the user’s name.
<img width="973" alt="Screen Shot 2024-09-15 at 4 53 10 PM" src="https://github.com/user-attachments/assets/44d60fa2-3e23-431f-b2b6-4018f30e06f2">

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>=14.x.x)
- npm (>=6.x.x)
- Git (>=2.x.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/reaction-timer.git

