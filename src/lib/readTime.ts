/**
 * Calculates estimated read time based on word count
 * Average reading speed: 225 words per minute
 * @param text - The text content to analyze
 * @returns Estimated read time in minutes (rounded up)
 */
export function calculateReadTime(text: string): number {
    const wordsPerMinute = 225;

    // Remove HTML tags and count words
    const cleanText = text.replace(/<[^>]*>/g, ' ');
    const words = cleanText.trim().split(/\s+/).length;

    // Calculate minutes and round up (minimum 1 minute)
    const minutes = Math.ceil(words / wordsPerMinute);
    return Math.max(1, minutes);
}

/**
 * Alternative: Calculate read time from React component content
 * Strips JSX and counts remaining text
 * @param content - React component content as string
 * @returns Estimated read time in minutes
 */
export function calculateReadTimeFromJSX(content: string): number {
    const wordsPerMinute = 225;

    // Remove JSX tags, className props, and other React artifacts
    let cleanText = content
        .replace(/<\/?[^>]+(>|$)/g, ' ') // Remove JSX tags
        .replace(/className="[^"]*"/g, '') // Remove className
        .replace(/\{[^}]*\}/g, '') // Remove JSX expressions
        .replace(/import\s+.*?from\s+['"].*?['"];?/g, '') // Remove imports
        .replace(/export\s+.*?{/g, '') // Remove exports
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
        .replace(/\/\/.*/g, '') // Remove single-line comments
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();

    const words = cleanText.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);

    return Math.max(1, minutes);
}

