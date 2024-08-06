// this is unrelated to the html its for something else
let bannerElement = document.querySelector('div[data-testid="background-image"]');

if (bannerElement) {
    let backgroundImageUrl = bannerElement.style.backgroundImage.slice(5, -2);
    console.log('Banner Image URL:', backgroundImageUrl);
} else {
    console.log('Banner image not found.');
}
