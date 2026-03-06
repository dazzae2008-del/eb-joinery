const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');

// Config
const IMAGES_DIR = path.join(__dirname, '../../images');
const MANIFEST_PATH = path.join(__dirname, '../../data/image_manifest.json');

// Cloudinary config is grabbed from process.env.CLOUDINARY_URL
// which should be formatted as cloudinary://API_KEY:API_SECRET@CLOUD_NAME

async function run() {
    if (!process.env.CLOUDINARY_URL) {
        console.error('CLOUDINARY_URL not set');
        process.exit(1);
    }

    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    let modified = false;

    const categories = fs.readdirSync(IMAGES_DIR).filter(f => fs.statSync(path.join(IMAGES_DIR, f)).isDirectory());

    for (const cat of categories) {
        const catDir = path.join(IMAGES_DIR, cat);
        const files = fs.readdirSync(catDir).filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f));

        if (!manifest[cat]) manifest[cat] = [];

        for (const file of files) {
            const filePath = path.join(catDir, file);
            const stats = fs.statSync(filePath);

            // Simple check: if filename is already in manifest for this category, skip
            // A better check would be hash-based, but filename is fine for now
            if (manifest[cat].some(img => img.originalName === file)) {
                console.log(`Skipping ${cat}/${file} - already uploaded`);
                continue;
            }

            console.log(`Processing ${cat}/${file}...`);

            try {
                // 1. Optimize with Sharp (Convert to WebP, Max 1920 width)
                const optimizedBuffer = await sharp(filePath)
                    .resize({ width: 1920, withoutEnlargement: true })
                    .webp({ quality: 85 })
                    .toBuffer();

                // 2. Upload to Cloudinary
                const result = await new Promise((resolve, reject) => {
                    cloudinary.uploader.upload_stream({
                        folder: `eb-joinery/${cat}`,
                        public_id: path.parse(file).name,
                        resource_type: 'image'
                    }, (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }).end(optimizedBuffer);
                });

                console.log(`Uploaded: ${result.secure_url}`);

                // 3. Update Manifest
                manifest[cat].push({
                    url: result.secure_url,
                    originalName: file,
                    uploadedAt: new Date().toISOString()
                });
                modified = true;

            } catch (err) {
                console.error(`Failed to process ${file}:`, err);
            }
        }
    }

    if (modified) {
        fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
        console.log('Manifest updated.');
    } else {
        console.log('No new images found.');
    }
}

run();
