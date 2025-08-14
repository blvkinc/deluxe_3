# Product Pages Update Guide

## Completed Updates ✅

1. **Eclipse21-Couplesoffroad.jsx** - ✅ Complete
2. **Eclipse22-Couplesoffroad.jsx** - ✅ Complete  
3. **Eclipse21-Couplesxptech.jsx** - ✅ Complete
4. **Riptide20-Familyoffroad.jsx** - ✅ Complete
5. **Stormbreaker18-Familyoffroad.jsx** - ✅ Complete

## Remaining Updates Needed 🔄

### Eclipse Products
- **Eclipse22-Couplesxptech.jsx**

### Riptide Products  
- **Riptide20-Familyxptech.jsx**
- **Riptide22-Familyoffroad.jsx**
- **Riptide22-Familyxptech.jsx**

### Stormbreaker Products
- **Stormbreaker18-Familyxptech.jsx**
- **Stormbreaker19-Familyoffroad.jsx**
- **Stormbreaker19-Familyxptech.jsx**
- **Stormbreaker21-Familyoffroad.jsx**
- **Stormbreaker21-Familyxptech.jsx**
- **Stormbreaker23-Familyoffroad.jsx**
- **Stormbreaker23-Familyxptech.jsx**

## Standard Update Pattern

For each product page, apply these changes:

### 1. Import Updates
```javascript
// OLD
import React, { useRef, useEffect, useState, useCallback } from "react";
import [ProductName]gallery from "../products/SlideShows/[ProductName]gallery";
import WarrantyPolicyPopup from "./popup/WarrantyPolicyPopUp";

// NEW
import React, { useEffect } from "react";
import EnhancedGallery from "../products/SlideShows/EnhancedGallery";
```

### 2. Component Function Updates
```javascript
// OLD
const [ProductName] = () => {
  const containerRef = useRef(null);
  const [isWarrantyPopupOpen, setWarrantyPopupOpen] = useState(false);
  const openWarrantyPopupWarrantyPolicy = useCallback(() => {
    setWarrantyPopupOpen(true);
  }, []);
  const closeWarrantyPopupWarrantyPolicy = useCallback(() => {
    setWarrantyPopupOpen(false);
  }, []);

// NEW
const [ProductName] = () => {
  // Keep only the GSAP useEffect
```

### 3. Button Container Updates
```javascript
// OLD
<div className="button-container">
  <h1 className="Product-header revealUp">[Product Title]</h1>
  <button onClick={scrollToLayout} className="btn hover-border-1 revealUp">
    Layout
  </button>
  <button onClick={scrollToSpecs} className="btn hover-border-1 revealUp">
    Specs
  </button>
</div>

// NEW
<div className="button-container">
  <h1 className="Product-header revealUp">[Product Title]</h1>
  <div className="btn-holder">
    <button onClick={scrollToLayout} className="btn hover-border-1 revealUp">
      Layout
    </button>
    <button onClick={scrollToSpecs} className="btn hover-border-1 revealUp">
      Specs
    </button>
  </div>
</div>
```

### 4. Gallery Component Updates
```javascript
// OLD
<div className="slideshowcomopnent">
  <[ProductName]gallery />
</div>

// NEW
<div className="slideshowcomopnent">
  <EnhancedGallery 
    sections={[
      {
        name: "Exterior",
        images: [/* product-specific images */],
        description: "Explore the stunning exterior design and features",
      },
      {
        name: "Layout", 
        images: [/* product-specific images */],
        description: "Detailed floor plans and layout configurations",
      },
      {
        name: "Inside",
        images: [/* product-specific images */],
        description: "Interior features and luxury amenities",
      },
    ]}
    productName="[Product Name]"
  />
</div>
```

## Image Data Sources

To get the correct image arrays for each product, check the existing gallery files:

- **Eclipse22**: `src/components/products/SlideShows/Eclipse22gallery.jsx`
- **Riptide20**: `src/components/products/SlideShows/Riptide20gallery.jsx`  
- **Riptide22**: `src/components/products/SlideShows/Riptide22gallery.jsx`
- **Stormbreaker18**: `src/components/products/SlideShows/Stormbreaker18inside.jsx`
- **Stormbreaker19**: `src/components/products/SlideShows/Stormbreaker19inside.jsx`
- **Stormbreaker21**: `src/components/products/SlideShows/Stormbreaker21inside.jsx`
- **Stormbreaker23**: `src/components/products/SlideShows/Stormbreaker23inside.jsx`

## Benefits of Updates

1. **Consistent Styling**: All product pages will have the same enhanced button styling and spacing
2. **Enhanced Gallery**: Better functionality with preview images, keyboard navigation, touch support
3. **Performance**: Lazy loading, image optimization, better mobile experience
4. **Maintainability**: Cleaner code, removed unused imports and state
5. **User Experience**: Better visual feedback, smoother animations, responsive design

## Testing Checklist

After updating each product page:

- [ ] Page loads without errors
- [ ] Gallery shows preview images before opening
- [ ] Button spacing is correct (30px gap between Layout and Specs)
- [ ] Gallery navigation works (prev/next, dots, keyboard)
- [ ] Mobile responsiveness is maintained
- [ ] All images load properly
- [ ] Animations work smoothly

## Next Steps

1. Continue updating remaining product pages following the pattern above
2. Test each updated page thoroughly
3. Ensure all gallery image arrays are correct
4. Verify mobile responsiveness
5. Check performance improvements

The enhanced gallery and styling improvements will provide a much better user experience across all product pages while maintaining the original black theme structure.