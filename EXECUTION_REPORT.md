# Final execution report

## 1. Workbook results

`SpeakerList.xlsx` contains one worksheet (`Sheet1`) with a used range of `A1:G16`. The participant table contains 14 people in workbook order:

- 13 rows with Role `invited`
- 1 row with Role `organizer` (Qi-huo Wei, position 11)

The production participant grid contains exactly those 14 people in the same order. Names, displayed affiliations, emails and roles follow the workbook text; role labels are title-cased only for presentation.

## 2. Organizing committee results

Three organizer portraits were supplied and all three are displayed:

1. Rui Zhang — Organizer — Associate Professor — HKUST
2. Qi-huo Wei — Organizer — Full Professor — SUSTech
3. Kristiaan Neyts — Organizer, TBC — SKL Director and Full Professor — HKUST

Qi-huo Wei is displayed both in the 14-person participant grid and in the organizing committee, with the appropriate role in both locations.

## 3. Person-to-photo mapping

| No. | Workbook name | Role | Workbook affiliation | Workbook email | Source photo | Production file | Match status |
|---:|---|---|---|---|---|---|---|
| 01 | Uros Tkalec | invited | U of Ljubljana | uros.tkalec@ijs.si | `Speaker/Uros Tkalec.jpg` | `assets/speakers/01-uros-tkalec.webp` | Exact full name |
| 02 | Satoshi Aya | invited | South China U of Tech. | satoshiaya@scut.edu.cn | `Speaker/Satoshi Aya.jpg` | `assets/speakers/02-satoshi-aya.webp` | Exact full name |
| 03 | Dong Chen | invited | Zhejiang U | chen_dong@zju.edu.cn | `Speaker/Dong Chen.jpg` | `assets/speakers/03-dong-chen.webp` | Exact full name |
| 04 | Mingjun Huang | invited | South China U of Tech. | huangmj25@scut.edu.cn | `Speaker/Mingjun Huang.jpg` | `assets/speakers/04-mingjun-huang.webp` | Exact full name |
| 05 | Yongzhong Huo | invited | Fudan U | yzhuo@fudan.edu.cn | `Speaker/Yongzhong Huo.jpg` | `assets/speakers/05-yongzhong-huo.webp` | Exact full name |
| 06 | Joonwoo Jeong | invited | UNIST | jjeong@unist.ac.kr | `Speaker/Joonwoo Jeong.png` | `assets/speakers/06-joonwoo-jeong.webp` | Exact full name |
| 07 | Young-Ki Kim | invited | POSTECH | ykkim@postech.ac.kr | `Speaker/Young-Ki Kim.jpg` | `assets/speakers/07-young-ki-kim.webp` | Exact full name |
| 08 | Bo Li | invited | Tsinghua U | libome@mail.tsinghua.edu.cn | `Speaker/LI Bo.jpg` | `assets/speakers/08-bo-li.webp` | Unique normalized name-order/case match |
| 09 | Cuiling Meng | invited | UESTC | cuilingmeng@uestc.edu.cn | `Speaker/Cuiling Meng.jpg` | `assets/speakers/09-cuiling-meng.webp` | Exact full name |
| 10 | Da Wang | invited | South China Normal U | 20220423@m.scnu.edu.cn | `Speaker/Da Wang.png` | `assets/speakers/10-da-wang.webp` | Exact full name |
| 11 | Qi-huo Wei | organizer | SUSTech | weiqh@sustech.edu.cn | `Speaker/Qi-huo Wei.jpg` | `assets/speakers/11-qi-huo-wei.webp` | Exact full name |
| 12 | Dengke Yang | invited | South China U of Tech. | dkyang@scut.edu.cn | `Speaker/Dengke Yang.jpg` | `assets/speakers/12-dengke-yang.webp` | Exact full name |
| 13 | Zhongqiang Yang | invited | Tsinghua U | zyang@mail.tsinghua.edu.cn | `Speaker/Zhongqiang Yang.jpg` | `assets/speakers/13-zhongqiang-yang.webp` | Exact full name |
| 14 | Zhigang Zheng | invited | East China UST | zgzheng@ecust.edu.cn | `Speaker/Zhigang Zheng.png` | `assets/speakers/14-zhigang-zheng.webp` | Exact full name |

Speaker mapping: **14 successful, 0 failed, 0 ambiguous, 0 duplicate-photo assignments**.

| Organizer | Source photo | Production file | Match status |
|---|---|---|---|
| Rui Zhang | `Organizer/ZHANG Rui.png` | `assets/organizers/rui-zhang.webp` | Exact full-name components, normalized order/case |
| Qi-huo Wei | `Organizer/Qi-huo Wei.jpg` | `assets/organizers/qi-huo-wei.webp` | Exact full name |
| Kristiaan Neyts | `Organizer/Kristiaan Neyts.jpg` | `assets/organizers/kristiaan-neyts.webp` | Exact full name |

Organizer mapping: **3 successful, 0 failed, 0 ambiguous**.

All production portraits use one 4:5 ratio. Speaker files are 720 × 900 WebP; organizer files are 600 × 750 WebP. Crops use manually verified face/subject focal points, remove EXIF metadata and do not alter facial features.

## 4. Hero composite

The actual liquid-crystal input present in the workspace is `LC.jpg` (1380 × 776), not `LC.png`. It was combined with `HK.png` (1613 × 736) using the built-in image compositing mode:

- Hong Kong's Victoria Harbour remains the recognizable spatial base.
- The supplied polarized liquid-crystal domain image is integrated through the sky, harbour reflections and selected architectural edges.
- Shadows were harmonized toward `#003974` and deeper navy; restrained highlights were tuned toward `#A68137` while retaining cyan/magenta iridescence.
- The final image uses graduated transitions, local bloom, mild vignette/depth falloff and fine photographic grain, with no embedded text or logo.

Production outputs:

- `assets/hero/hero-hk-lc-1600.webp` — 1600 × 1200, 389,824 bytes
- `assets/hero/hero-hk-lc-900.webp` — 900 × 675, 170,456 bytes
- `assets/hero/hero-hk-lc-fallback.png` — 1600 × 1200

Final normalized prompt: *Use the supplied Victoria Harbour dusk panorama as the exact recognizable base and the supplied polarized liquid-crystal image as an optical structure layer; create a cohesive cinematic 4:3 website hero with natural domain textures in the sky, reflections and selected building edges; harmonize navy shadows and gold highlights; preserve city geometry; no new landmarks, text, logos, watermark, split screen, hard seams, circular frame, floating cards or overexposure.*

## 5. Updated and generated files

- `index.html` — rebuilt content structure, hero, 14 participant cards, venue numbering and three organizer cards
- `styles.css` — rebuilt responsive styling; deleted removed-section/placeholder/old-hero rules
- `script.js` — retained and verified for menu, reveal, countdown, sticky navigation and section state
- `assets/brand/hkust-logo.svg` — supplied logo with production blue/gold mapping
- `assets/hero/*` — three hero production files
- `assets/venue/*` — supplied Google Maps venue image as an optimized WebP plus PNG fallback
- `assets/speakers/*` — 14 optimized participant portraits
- `assets/organizers/*` — three optimized committee portraits
- `README.md` — offline use, data provenance, asset layout and portrait replacement instructions
- `CHANGELOG.md` — final revision history
- `asset-manifest.json` — dimensions, source/output mapping, focal points and file sizes
- `tools/build_standalone.py` — reproducible standalone generator
- `hkust_liquid_crystal_symposium_standalone.html` — regenerated, fully embedded offline page
- `preview.png`, `preview-full.png`, `preview-mobile.png` — refreshed desktop/mobile previews
- `preview-venue.png`, `preview-venue-mobile.png` — focused desktop/mobile Venue verification captures

The unused legacy hero SVG was removed from the working/final production tree. It remains available in the untouched original source folder.

## 6. Test results

| Viewport | Participant columns | Horizontal overflow | Images | Console |
|---|---:|---|---|---|
| 1440 × 1000 | 4; final two centered | None | 21/21 load | No warnings or errors |
| 1024 × 900 | 2 | None | Lazy images load during scroll | No warnings or errors |
| 768 × 900 | 2 | None | Lazy images load during scroll | No warnings or errors |
| 390 × 844 | 1 | None | 21/21 load during full-page pass | No warnings or errors |

Additional checks passed:

- Mobile menu changes `aria-expanded`, opens the navigation and locks body scroll.
- Content section labels are exactly 01, 02, 03 and 04 in order.
- All production image references are relative and exist.
- Every image has `alt`, `width` and `height`; people use lazy/async loading; the hero uses async decoding and high fetch priority.
- `prefers-reduced-motion` disables reveal motion, smooth scrolling and hero drift.
- The standalone page contains 14 participant cards, three organizer cards and 21 embedded `<img>` elements; its responsive `<source>` images, CSS and JavaScript are also embedded.
- Standalone and multi-file text sequences are identical; standalone browser logs are empty and it has no external stylesheet, script or image references.
- The required residual-string scan passes for all production files.

## 7. Items for human confirmation

1. `SpeakerList.xlsx` contains only one organizer row (Qi-huo Wei). Rui Zhang and Kristiaan Neyts are absent from that workbook. Their committee names, titles, affiliations and emails were retained from the supplied symposium information and confirmed by their supplied `Organizer/` photographs. These two records should be confirmed by the symposium owner before publication.
2. Kristiaan Neyts remains marked `TBC`, as required by the supplied information.
3. The source portraits for Dong Chen (139 × 185), Bo Li (147 × 188) and Da Wang (139 × 167) are low resolution. They are correctly matched and cleanly rendered, but higher-resolution originals would improve large-screen sharpness without changing layout.
4. The built-in browser security policy blocks `file://` navigation, so direct double-click behavior was validated structurally (relative-path existence and no absolute references) while visual/console testing used a read-only local HTTP server. The standalone file additionally passed a no-external-reference audit.
