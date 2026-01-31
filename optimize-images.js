
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');


async function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    let processedCount = 0;

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processedCount += await processDirectory(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const fileName = path.basename(file, ext);
                // Handle the case where extension might be .JPG but ext is .jpg, 
                // path.basename('file.JPG', '.jpg') keeps the extension if it doesn't match case exactly.
                // Let's force strict name extraction.
                const nameWithoutExt = path.parse(file).name;

                const outputName = `${nameWithoutExt}.webp`;
                const outputPath = path.join(directory, outputName);

                // Skip if webp already exists (optional, but good for re-runs)
                if (fs.existsSync(outputPath)) {
                    // console.log(`Skipping ${file} (webp exists)`);
                    // continue;
                }

                try {
                    console.log(`Processing ${filePath}...`);

                    await sharp(filePath)
                        .resize({ width: 1920, withoutEnlargement: true })
                        .webp({ quality: 80 })
                        .toFile(outputPath);

                    processedCount++;
                    console.log(`Saved ${outputName}`);
                } catch (err) {
                    console.error(`Error processing ${file}:`, err);
                }
            }
        }
    }
    return processedCount;
}

async function optimizeImages() {
    if (!fs.existsSync(assetsDir)) {
        console.error('Assets directory not found:', assetsDir);
        return;
    }

    console.log('Starting recursive image optimization...');
    const total = await processDirectory(assetsDir);
    console.log(`\nDone! Processed ${total} images.`);
}

optimizeImages();
