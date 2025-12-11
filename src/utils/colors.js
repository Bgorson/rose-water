// Sophisticated, calming color palette for therapy practice
// Inspired by natural elements - dusty rose, sage, warm earth tones

export const colors = {
  // Primary palette - Dusty Rose & Sage
  roseLight: '#F5E6E0', // Soft blush background
  rose: '#E8C4BC', // Dusty rose
  roseDark: '#D4A69A', // Deep rose accent

  sage: '#A8B5A0', // Primary sage green
  sageLight: '#C5D1BE', // Light sage
  sageDark: '#7A8B72', // Deep sage

  // Neutrals
  cream: '#FBF8F5', // Off-white background
  warmWhite: '#FFFEFA', // Warm white
  sand: '#E8E2D9', // Sandy neutral
  stone: '#D4CEC4', // Stone gray

  // Text colors
  charcoal: '#3D3D3D', // Primary text
  slate: '#5A5A5A', // Secondary text
  muted: '#8A8A8A', // Muted text

  // Accents
  gold: '#C9A962', // Warm gold accent
  goldLight: '#E8D9B5', // Light gold

  // Legacy colors (for backwards compatibility)
  grey: '#E8E2D9',
  lightGreen: '#A8B5A0',
  green: '#7A8B72',
  darkerGreen: '#5E6E56',
  darkestGreen: '#4A5844',
};

// Gradient presets
export const gradients = {
  heroOverlay:
    'linear-gradient(135deg, rgba(248, 232, 226, 0.95) 0%, rgba(168, 181, 160, 0.85) 100%)',
  sageText: `linear-gradient(135deg, ${colors.sage} 0%, ${colors.sageDark} 50%, ${colors.sage} 100%)`,
  roseText: `linear-gradient(135deg, ${colors.rose} 0%, ${colors.roseDark} 100%)`,
  cardHover:
    'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(168, 181, 160, 0.1) 100%)',
  glass:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
};

// Shadow presets
export const shadows = {
  soft: '0 4px 20px rgba(61, 61, 61, 0.08)',
  medium: '0 8px 30px rgba(61, 61, 61, 0.12)',
  elevated: '0 12px 40px rgba(61, 61, 61, 0.15)',
  card: '0 2px 12px rgba(61, 61, 61, 0.06)',
  cardHover: '0 8px 25px rgba(61, 61, 61, 0.12)',
};
