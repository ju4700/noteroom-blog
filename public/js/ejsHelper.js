export function viteScript(file) {
    // if (process.env.NODE_ENV === "development") {
    // }
    return `<script type="module" src="http://localhost:3001/${file}"></script>`;
    // return `<script type="module" src="/dist/${file}"></script>`;
}

export function asset_path(file) {
    return `/assets/${file}`
}

export function images_path(file) {
    return `/images/${file}`
}
