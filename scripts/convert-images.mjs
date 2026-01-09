import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images';

const SIZES = [
    { suffix: '-sm', width: 400 },
    { suffix: '-md', width: 800 },
    { suffix: '', width: 1200 }, // Original size optimization
];

async function convertToWebP() {
    console.log('🖼️  Converting images to WebP...\n');

    const files = await readdir(INPUT_DIR);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !f.includes('-sm') && !f.includes('-md'));

    for (const file of imageFiles) {
        const inputPath = join(INPUT_DIR, file);
        const { name } = parse(file);

        // Skip if it's already a size variant
        if (name.endsWith('-sm') || name.endsWith('-md')) continue;

        const fileStat = await stat(inputPath);
        const originalSize = fileStat.size;

        console.log(`📁 Processing: ${file} (${(originalSize / 1024).toFixed(1)} KB)`);

        for (const { suffix, width } of SIZES) {
            const outputPath = join(OUTPUT_DIR, `${name}${suffix}.webp`);

            try {
                const result = await sharp(inputPath)
                    .resize(width, null, {
                        withoutEnlargement: true,
                        fit: 'inside'
                    })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`   ✅ Created: ${name}${suffix}.webp (${(result.size / 1024).toFixed(1)} KB) - ${((1 - result.size / originalSize) * 100).toFixed(0)}% smaller`);
            } catch (err) {
                console.error(`   ❌ Error: ${err.message}`);
            }
        }
        console.log('');
    }

    console.log('✨ Done! WebP images created successfully.');
}

convertToWebP().catch(console.error);
