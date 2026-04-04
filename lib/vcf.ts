export const generateVCard = (): string => {
  return `BEGIN:VCARD
VERSION:3.0
FN:Rorix Studio
ORG:Rorix Studio
TEL:+971500000000
EMAIL:hello@rorixstudio.ae
URL:www.rorixstudio.ae
ADR:;;Business Bay;Dubai;;00000;UAE
NOTE:Crafting Dubai's Most Prestigious Spaces
END:VCARD`;
};

export const downloadVCard = () => {
  const vCardData = generateVCard();
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'rorix-studio.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
