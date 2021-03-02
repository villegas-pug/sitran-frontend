export const breakpoints = [
   { name: 'mobile', measure: 320 },
   { name: 'mobileLandscape', measure: 480 },
   { name: 'tablet', measure: 768 },
   { name: 'tabletLandscape', measure: 1024 },
   { name: 'desktop', measure: 1200 },
   { name: 'desktopLarge', measure: 1500 },
   { name: 'desktopWide', measure: 1920 },
].sort(({ measure: a }, { measure: b }) => {
   if (a > b)
      return -1
   else if (a < b)
      return 1
   else
      return 0
})