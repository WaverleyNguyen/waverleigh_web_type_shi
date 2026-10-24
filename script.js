const character = document.getElementById('main-character');
const actionButton = document.getElementById('action-btn');

const textElements = document.querySelectorAll('.rainbow-text');

const animationFrames = [
    'butt right.png',
    'butt up.png',
    'butt left.png',
    'butt down.png' // original image
];

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

let currentFrameIndex = 0;
let currentColorIndex = 0;

actionButton.addEventListener('click', function() {
    currentFrameIndex = (currentFrameIndex + 1) % animationFrames.length;
    character.src = animationFrames[currentFrameIndex];

    currentColorIndex = (currentColorIndex + 1) % rainbowColors.length;
    const nextColor = rainbowColors[currentColorIndex];

    textElements.forEach(function(element) {
        element.style.color = nextColor;
    });
});
