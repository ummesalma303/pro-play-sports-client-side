/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'dark',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('https://media.istockphoto.com/id/949190756/photo/various-sport-equipments-on-grass.jpg?s=612x612&w=0&k=20&c=s0Lz_k0Vq_9P6JBETBMtLsK0lSKEHg4Tnqz9KlRCSHA=')",
        category1: "url('https://assets.publishing.service.gov.uk/media/63f62823d3bf7f62e4409e3a/s960_Football_gov.uk.jpg')",
        category2: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf-qMoZwDEqmdLoKfeWW0d9-_V3030DSqlQ&s')",
        category3: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyDUEvlkDVeeO20hi_bpcYAddMsIEiKkUz-36cdp0aHNZs_xJ5kYGfnWxm6LNYXhNhfc&usqp=CAU')",
        category4: "url('https://assets.clevelandclinic.org/transform/LargeFeatureImage/ceb92978-c751-4842-82b0-754af58f4bf2/athletic-shoes-1210120932')",
      }
    },
   
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
}


// backgroundImage:{
//   category1: "url('/big-category-1.jpg')",
//   category2: "url('/big-category-2.avif')",
//   category3: "url('/big-category-3.jpg')",
//   category4: "url('/big-category-4.jpg')",
// }