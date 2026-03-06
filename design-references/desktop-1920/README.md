# Figma Desktop Reference Screenshots (1920px)

Figma design file: P0kpMV8kbGuwNJmuoS3Xxy

## Pages with Desktop frames

| Page | Node ID | Status |
|------|---------|--------|
| home | 2:3 | Captured |
| whats-on | 12:1158 | Captured |
| radio | 12:1185 | Captured |
| policies | 8:948 | Captured |
| groups | 4:622 | Captured |
| kids | 8:791 | Captured |
| corporate | 8:890 | Captured |
| launch | 4:718 | Captured |
| birthday-cakes | 8:1021 | Captured |
| drinks-menu | 8:1042 | Captured |
| merch | 8:936 | Captured |

## How to export as PNG files

Use the Figma REST API:

```bash
curl -H "X-Figma-Token: YOUR_TOKEN" \
  "https://api.figma.com/v1/images/P0kpMV8kbGuwNJmuoS3Xxy?ids=2:3,12:1158,12:1185,8:948,4:622,8:791,8:890,4:718,8:1021,8:1042,8:936&format=png&scale=1"
```

This returns download URLs for each node. Save each as `{page-name}.png`.

## Pages without Desktop frames

- /eats-drinks (hub) - No standalone frame
- /organise - Only exists as home page section
- /yucatan - Content in section labeled /eats-drinks
- /pizza - No dedicated frame
- /line-upsevents - Placeholder screenshot only
