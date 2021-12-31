export const textShortner = (text: string) => text.length > 14 ? text.substring(0, 14) + ".." : text;
