const snake_rhomb_1 = document.querySelector(".snake-rhomb-1");
const snake_rhomb_2 = document.querySelector(".snake-rhomb-2");
const snake_rhomb_3 = document.querySelector(".snake-rhomb-3");
const snake_rhomb_4 = document.querySelector(".snake-rhomb-4");
const snake_rhomb_5 = document.querySelector(".snake-rhomb-5");

const snake_rhomb_1_small = document.querySelectorAll(".snake-rhomb-1-small");
const snake_rhomb_2_small = document.querySelectorAll(".snake-rhomb-2-small");
const snake_rhomb_3_small = document.querySelectorAll(".snake-rhomb-3-small");
const snake_rhomb_4_small = document.querySelectorAll(".snake-rhomb-4-small");

const snake_rhomb_1_mid_small = document.querySelector(
  ".snake-rhomb-1-mid-small"
);
const snake_rhomb_2_mid_small = document.querySelector(
  ".snake-rhomb-2-mid-small"
);
const snake_rhomb_3_mid_small = document.querySelector(
  ".snake-rhomb-3-mid-small"
);
const snake_rhomb_4_mid_small = document.querySelector(
  ".snake-rhomb-4-mid-small"
);

let array_small_snakes = [];

array_small_snakes.push(snake_rhomb_1_small);
array_small_snakes.push(snake_rhomb_2_small);
array_small_snakes.push(snake_rhomb_3_small);
array_small_snakes.push(snake_rhomb_4_small);

createSmallRhomb();
createMidAllBrownRhomb(snake_rhomb_1);
createMidAllBrownRhomb(snake_rhomb_2);
createMidBrownRhomb(snake_rhomb_3);
createMidBrownRhomb(snake_rhomb_4);
createMidAllBrownRhomb(snake_rhomb_5);

createMidSmallBrownRhomb(snake_rhomb_1_mid_small);
createMidSmallBrownRhomb(snake_rhomb_2_mid_small);
createMidSmallBrownRhomb(snake_rhomb_3_mid_small);
createMidSmallBrownRhomb(snake_rhomb_4_mid_small);

for (let i = 0; i < array_small_snakes.length; i++) {
  for (let j = 0; j < array_small_snakes[i].length; j++) {
    // console.log(array_small_snakes[i][j]);
    createSmallBrownRhomb(array_small_snakes[i][j]);
  }
}

function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();

  return template.content.firstElementChild;
}

function createSmallRhomb() {
  for (let i = 0; i < 5; i++) {
    const rhomb =
      elementFromHtml(`<svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_9560_751)">
<path d="M5 0.651856C3.1579 3.96462 1.88259 6.24334 -1.07324e-07 9.65185L2.51012 14.1519L5 18.6519L7.51012 14.1519L10 9.65185L5 0.651856Z" fill="white"/>
</g>
<defs>
<filter id="filter0_b_9560_751" x="-10" y="-9.34814" width="30" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_9560_751"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_9560_751" result="shape"/>
</filter>
</defs>
</svg>
`);

    const snake_rhombs = document.querySelector(".snake-rhombs");

    snake_rhombs.appendChild(rhomb);
  }
}

function createMidAllBrownRhomb(snake) {
  for (let i = 0; i < 5; i++) {
    const rhomb =
      elementFromHtml(`<svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"/>
      </svg>      
    `);
    snake.appendChild(rhomb);
  }
}

function createMidBrownRhomb(snake) {
  for (let i = 0; i < 4; i++) {
    const rhomb =
      elementFromHtml(`<svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.44526 0.512692C5.33381 6.1082 3.17972 9.95712 -0.000112715 15.7143L4.23966 23.3152L8.44526 30.916L12.685 23.3152L16.8906 15.7144L8.44526 0.512692Z" fill="#79655E"/>
      </svg>      
    `);
    snake.appendChild(rhomb);
  }

  const rhomb =
    elementFromHtml(`<svg width="17" height="31" viewBox="0 0 17 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.74371 23.0716L4.74454 23.0731L8.51441 29.8865L12.3149 23.0731L12.3158 23.0716L16.3863 15.7148L8.5124 1.54181C7.77213 2.87255 7.08362 4.10897 6.41779 5.30466C4.53013 8.69451 2.82478 11.757 0.639135 15.7132L4.74371 23.0716Z" stroke="#79655E"/>
  </svg>
  
  `);
  snake.appendChild(rhomb);
}

function createSmallBrownRhomb(snake) {
  for (let i = 0; i < 5; i++) {
    const rhomb =
      elementFromHtml(`<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.52364 0.481402C3.75429 3.66333 2.52935 5.85206 0.721112 9.12595L3.1321 13.4482L5.52364 17.7705L7.93463 13.4482L10.3262 9.12595L5.52364 0.481402Z" fill="#79655E"/>
    </svg>
        
    `);
    snake.appendChild(rhomb);
  }
}

function createMidSmallBrownRhomb(snake) {
  for (let i = 0; i < 5; i++) {
    const rhomb =
      elementFromHtml(`<svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.59014 18.313L4.5908 18.3142L7.58854 23.7321L10.6106 18.3142L10.6113 18.3131L13.8481 12.4631L7.58694 1.19293C6.99834 2.25101 6.4509 3.2341 5.92149 4.18481C4.42039 6.88046 3.0643 9.31573 1.32625 12.4617L4.59014 18.313Z" stroke="#79655E" stroke-width="0.795182"/>
      </svg>
      `);
    snake.appendChild(rhomb);
  }
}

function generateSectionNavigation() {}
