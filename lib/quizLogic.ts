export interface QuizAnswers {
  vibe?: string;
  palette?: string;
  material?: string;
  propertyType?: string;
  budget?: string;
}

export const getStyleProfile = (answers: QuizAnswers): {
  style: string;
  description: string;
  imageKeywords: string;
} => {
  const { vibe, palette, material } = answers;

  if (vibe === 'Minimal & Clean' && palette === 'Neutrals & Whites') {
    return {
      style: 'Futuristic Minimalist',
      description:
        'Clean lines, white marble, and intelligent design. Your space is a sanctuary of modern minimalism with subtle gold accents.',
      imageKeywords: 'minimalist interior white marble',
    };
  }

  if (vibe === 'Bold & Dramatic' && palette === 'Dark & Moody') {
    return {
      style: 'Dark Dramatic Elite',
      description:
        'Deep obsidian tones, statement lighting, and bold materials. You live for drama and sophistication.',
      imageKeywords: 'dark luxury interior dramatic',
    };
  }

  if (
    (vibe === 'Warm & Cozy' || palette === 'Earth Tones') &&
    material === 'Wood & Rattan'
  ) {
    return {
      style: 'Soft Contemporary',
      description:
        'Warm wood textures, earth tones, and organic materials. Comfort meets elegance in your perfect retreat.',
      imageKeywords: 'warm modern interior wood',
    };
  }

  if (vibe === 'Futuristic' || palette === 'Jewel Tones') {
    return {
      style: 'Modern Arabian Luxe',
      description:
        'Rich jewel tones, geometric patterns, and cutting-edge technology. A fusion of heritage and innovation.',
      imageKeywords: 'luxury arabic modern interior',
    };
  }

  return {
    style: 'Modern Arabian Luxe',
    description:
      'Sophisticated blend of traditional elegance and contemporary design. Your space tells a story of refined taste.',
    imageKeywords: 'luxury modern interior dubai',
  };
};
