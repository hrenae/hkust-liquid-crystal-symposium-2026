# HKUST Liquid Crystal Symposium website

This folder is a self-contained static website for the International Symposium on Liquid Crystals and Interfacial Phenomena. No build step or local server is required: open `index.html` directly in a modern browser.

## Data and image sources

- Participant names, affiliations, emails and roles follow `SpeakerList.xlsx` and `NewAddedSpeakerList.xlsx`; the four additions use the supplied 15–18 portrait numbering.
- The current participant list contains 18 people: 17 invited participants and Qi-huo Wei as organizer.
- The organizing committee contains Rui Zhang and Qi-huo Wei, using the supplied `Organizer/` portraits and symposium information.
- The hero artwork is a composite derived from the supplied `HK.png` and the actual liquid-crystal source file `LC.jpg`.
- The venue visual uses the supplied `GoogleMap.png`, optimized into WebP with a PNG fallback while preserving the complete map, place panel and attribution.
- The official supplied `HKUSTLOGO.svg` is used as the production logo, with its blue and gold mapped to the website palette for consistent contrast.

## Folder structure

```text
index.html
styles.css
script.js
hkust_liquid_crystal_symposium_standalone.html
assets/
  brand/hkust-logo.svg
  hero/hero-hk-lc-1600.webp
  hero/hero-hk-lc-900.webp
  hero/hero-hk-lc-fallback.png
  venue/google-map-hkust.webp
  venue/google-map-hkust.png
  speakers/*.webp
  organizers/*.webp
```

The regular page uses relative paths only and works when opened from disk. The standalone file embeds the final CSS, JavaScript, logo and raster assets as data URLs for fully offline use.

## Replacing a portrait

1. Prepare a 4:5 portrait in sRGB WebP.
2. Keep the existing production filename in `assets/speakers/` or `assets/organizers/`, or update the matching `src` in `index.html`.
3. Preserve the image's `width`, `height`, `alt`, `loading="lazy"` and `decoding="async"` attributes.
4. Regenerate the standalone file after any asset, CSS, JavaScript or HTML change.

From the website folder, regenerate it with the bundled Python runtime or any Python 3 installation:

```text
python tools/build_standalone.py
```

Participant cards are 720 × 900 pixels. Committee portraits are 600 × 750 pixels. Use cropping rather than stretching, and keep the face and shoulders inside the safe central area.

## Design tokens

- HKUST blue: `#003974`
- HKUST gold: `#A68137`
- Deep navy: `#001D3D`
- Cool background: `#F1F5F8`
