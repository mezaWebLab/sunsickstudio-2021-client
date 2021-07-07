const utils = {
    VHSify(image) {
        if (
            !CSS.supports("mix-blend-mode", "screen") ||
            !CSS.supports("filter", "url()")
        ) {
            return;
        }
        const container = document.createElement("div");
        const images = this.RGBImages(image);
    
        images.forEach(image => container.appendChild(image));
        container.classList.add("vhs-filter");
    
        image.replaceWith(container);
    },
    RGBImages(image) {
        const colors = ["r", "g", "b"];
        const images = colors.map(color => {
            const img = image.cloneNode();
            img.classList.add(`vhs-filter__${color}`);
            return img;
        });
    
        return images;
    },
    scrollTo(target) {
        
    }
}

export default utils;