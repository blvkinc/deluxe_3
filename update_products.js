// Utility script to update all product pages with enhanced gallery and styling
const fs = require('fs');
const path = require('path');

// Product data mapping
const productData = {
  'Eclipse21-Couplesxptech.jsx': {
    title: 'Eclipse 21`6',
    sections: [
      {
        name: "Exterior",
        images: [
          "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%201.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%202.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%203.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%204.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%205.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%206.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%207.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%208.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20ex%209.webp"
        ]
      },
      {
        name: "Layout",
        images: [
          "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layout.webp",
          "https://deluxcaravan.b-cdn.net/assets/Product%20renders/Eclipse216layouttop.webp"
        ]
      },
      {
        name: "Inside",
        images: [
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%201.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%202.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%203.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%204.webp",
          "https://deluxcaravan.b-cdn.net/assets/E21/E21%20in%205.webp"
        ]
      }
    ]
  },
  'Eclipse22-Couplesxptech.jsx': {
    title: 'Eclipse 22`',
    sections: [
      {
        name: "Exterior",
        images: [
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_1-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_2-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_3-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_4-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_5-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_6-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_ex_7-min.webp"
        ]
      },
      {
        name: "Layout",
        images: ["https://deluxcaravan.b-cdn.net/assets/E22/Eclipse22layout.webp"]
      },
      {
        name: "Inside",
        images: [
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_1-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_2-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_3-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_4-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_5-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_6-min.webp",
          "https://deluxcaravan.b-cdn.net/assets/E22/eclipse22_in_7-min.webp"
        ]
      }
    ]
  }
  // Add more product data as needed
};

// Function to update a product file
function updateProductFile(filename, data) {
  const filePath = path.join('src/components/products', filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filename}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update imports
  content = content.replace(
    /import.*gallery.*from.*SlideShows.*gallery.*;/g,
    'import EnhancedGallery from "../products/SlideShows/EnhancedGallery";'
  );
  
  // Remove unused imports
  content = content.replace(/import.*WarrantyPolicyPopup.*\n/g, '');
  content = content.replace(/import.*useRef.*useState.*useCallback.*from "react"/, 'import React, { useEffect } from "react"');
  
  // Update button container structure
  content = content.replace(
    /<div className="button-container">\s*<h1[^>]*>([^<]*)<\/h1>\s*<button[^>]*>\s*Layout\s*<\/button>\s*<button[^>]*>\s*Specs\s*<\/button>\s*<\/div>/gs,
    `<div className="button-container">
              <h1 className="Product-header revealUp">$1</h1>
              <div className="btn-holder">
                <button
                  onClick={scrollToLayout}
                  className="btn hover-border-1 revealUp"
                >
                  Layout
                </button>
                <button
                  onClick={scrollToSpecs}
                  className="btn hover-border-1 revealUp"
                >
                  Specs
                </button>
              </div>
            </div>`
  );
  
  // Generate gallery sections
  const sectionsCode = data.sections.map(section => `
            {
              name: "${section.name}",
              images: [
                ${section.images.map(img => `"${img}"`).join(',\n                ')}
              ],
              description: "${section.name === 'Exterior' ? 'Explore the stunning exterior design and features' : 
                           section.name === 'Layout' ? 'Detailed floor plans and layout configurations' : 
                           'Interior features and luxury amenities'}",
            }`).join(',');
  
  // Replace gallery component
  content = content.replace(
    /<div className="slideshowcomopnent">\s*<[^>]*gallery[^>]*\/>\s*<\/div>/gs,
    `<div className="slideshowcomopnent">
        <EnhancedGallery 
          sections={[${sectionsCode}
          ]}
          productName="${data.title}"
        />
      </div>`
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filename}`);
}

// Update all products
Object.keys(productData).forEach(filename => {
  updateProductFile(filename, productData[filename]);
});

console.log('Product updates completed!');