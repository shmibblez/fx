# Fx

FX lets you make audio effects chains on pretty much any device that can load websites and run javascript. [TODO: add link here]

# Why?

Pedals are expensive, i thought it would be cool to be able to plug in my guitar to a website that can generate guitar effects.

<small>
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.4.
</small>

<br/>

# Structure

This is how stuff will be organized:

## Effects
- objects that take an audio context and add themselves to it
- examples:
  - distortion (waveshaper node)
  - gain - `GainNode`
  - delay - `DelayNode`
  - chorus - `DelayNode`?
  - tremolo - `OscillatorNode` as LFO
  - amp sim - `ConvolverNode`, use impulse response graphs for common amps, stolen idea from [this comment](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion#comment59796643_22313408)

## Chains
- fx chains that store multiple effects in series
- fx chains are objects with accompanying angular components

## Data Model
- top level 

# Layout

## Effects
- effects will have:
  - controls (left arrow, trash, right arrow)
    - arrows to change pedal posiion
  - tone name below controls
  - vertical control sliders distributed evenly
  - slider names along sliders (in vertical direction)

## Chains
- chains will display:
  - all effects lined up horizontally, overflow onto next row

## Controls
- slider
  - add vertical text / label 
- add switch eventually

# Global TODOamp sim / `ConvolverNode`, use impulse response graphs for common amps, stolen idea from [this comment](https://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion#comment59796643_22313408)

- layout:
  - top menu options:
    - effects
    - output - sets up `BaseAudioContext.destination` either for irig or speakers / headset
- effects
  - distortion
  - gain
  - delay
  - chorus
  - tremolo
  - amp sim

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
