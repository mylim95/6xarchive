# Guardians of Asia — Phase 1 asset handoff

The current landing scene uses procedural Three.js geometry as temporary visual stand-ins. No licensed ruins model or production HBC ape guardian model was found in this route's existing files or the project's `public/` asset collection.

## Replace before production

- **Guardian:** Replace the assembled ellipsoid silhouette in `components/GuardianStatue.tsx` with the approved HBC ape guardian sculpt, supplied as a properly licensed GLB/GLTF. The model must preserve the recognizable HBC ape face and proportions, include usable stone surface detail and normal maps, and be authored at a known real-world scale with its feet at ground level. Keep the current pedestal and camera composition unless the approved model's proportions require a small framing adjustment.
- **Ruins:** Replace the hand-built shapes in `components/Environment.tsx` with a licensed ancient imperial courtyard/ruins environment. It should include broken, varied columns and wall sections, collapsed stone debris, baked or real-time ambient occlusion, and texture maps. Keep clear sightlines around the central guardian and allow the current camera push-in to remain unobstructed.

Until those assets are supplied and their license terms are confirmed, the scene intentionally remains procedural and should be treated as a composition prototype, not a final HBC character or final environment.
