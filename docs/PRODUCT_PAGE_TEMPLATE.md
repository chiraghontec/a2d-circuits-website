# Product Page Template Documentation

## Overview

The Product Page Template is a comprehensive, reusable component system for displaying product information on the A2D Circuits website. It provides a modern, SEO-optimized, and accessible product page layout that can be easily customized for different products.

## Features

✅ **Multiple Product Images** - Image gallery with thumbnails and main image display
✅ **Complete Product Information** - Name, model, part number, description, pricing
✅ **Call for Inquiry Button** - Primary CTA for customer engagement  
✅ **SEO Optimized** - Structured data, meta tags, and semantic HTML
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
✅ **Accessibility Features** - ARIA labels, keyboard navigation, screen reader support
✅ **Modular Architecture** - Reusable components and type-safe interfaces

## File Structure

```
src/
├── types/
│   └── product.ts                     # Product data types and interfaces
├── components/
│   ├── ProductImageGallery.tsx        # Image gallery component
│   └── ProductPageTemplate.tsx        # Main product page template
├── data/
│   └── sampleProducts.ts              # Sample product data
└── pages/
    ├── product/
    │   └── [id].tsx                   # Dynamic product page route
    └── product-example.tsx            # Example/demo page
```

## Usage

### Basic Implementation

```tsx
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { Product } from '@/types/product';

const MyProductPage = () => {
  const product: Product = {
    // ... product data
  };

  const handleInquiry = () => {
    // Redirect to contact page or open inquiry form
    window.location.href = '/contact';
  };

  const handleAddToQuote = () => {
    // Add product to quote/cart system
    console.log('Added to quote');
  };

  return (
    <ProductPageTemplate
      product={product}
      onInquiry={handleInquiry}
      onAddToQuote={handleAddToQuote}
    />
  );
};
```

### Product Data Structure

```tsx
interface Product {
  id: string;
  name: string;
  model: string;
  partNumber: string;
  description: string;
  detailedDescription?: string;
  price: string;
  originalPrice?: string;
  availability: 'In Stock' | 'Out of Stock' | 'Limited Stock' | 'Pre-Order';
  category: string;
  manufacturer?: string;
  specifications?: ProductSpecification[];
  images: ProductImage[];
  features?: string[];
  compatibleWith?: string[];
  dimensions?: string;
  weight?: string;
  warranty?: string;
  datasheet?: string;
  sku: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
```

## SEO Features

### Structured Data
- Product schema markup for rich snippets
- Organization and brand information
- Pricing and availability data

### Meta Tags
- Dynamic title and description
- Open Graph tags for social sharing
- Twitter Card support
- Product-specific meta properties

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization

## Styling

The template uses Tailwind CSS with custom CSS variables defined in `globals.css`:

```css
:root {
  --color-primary: #ff6b35;
  --color-black: #1a1a1a;
  --color-blue: #2e86ab;
  --color-warm-white: #fafafa;
  --color-charcoal-gray: #333333;
  --color-light-gray: #e5e5e5;
}
```

## Customization

### Adding New Fields

1. Update the `Product` interface in `src/types/product.ts`
2. Modify the `ProductPageTemplate` component to display the new field
3. Update sample data in `src/data/sampleProducts.ts`

### Styling Modifications

1. Update CSS variables in `src/styles/globals.css`
2. Modify Tailwind classes in the component files
3. Add custom CSS classes if needed

### Image Gallery Customization

The `ProductImageGallery` component can be customized to:
- Change thumbnail size and layout
- Add zoom functionality
- Implement lazy loading
- Add image lightbox/modal

## Integration Examples

### With CMS
```tsx
// Fetch product data from CMS
const product = await fetchProductFromCMS(productId);

return (
  <ProductPageTemplate
    product={product}
    onInquiry={() => openInquiryModal(product)}
    onAddToQuote={() => addToCart(product)}
  />
);
```

### With E-commerce Platform
```tsx
// Integration with shopping cart
const handleAddToQuote = async () => {
  await cartAPI.addItem(product.id, 1);
  showNotification('Product added to quote');
};
```

## Testing Strategy

### Unit Tests
- Component rendering
- User interaction handling
- Prop validation
- Accessibility compliance

### Integration Tests
- Page navigation
- API integration
- Form submissions
- SEO validation

### Manual Testing Checklist

- [ ] Product information displays correctly
- [ ] Images load and gallery functions work
- [ ] Inquiry button triggers correct action
- [ ] Page is responsive on all devices
- [ ] SEO meta tags are present
- [ ] Structured data validates
- [ ] Accessibility standards met
- [ ] Page loads with good performance

## Performance Considerations

### Image Optimization
- Use Next.js Image component for automatic optimization
- Implement lazy loading for thumbnail images
- Consider WebP format for better compression

### Code Splitting
- Dynamic imports for heavy components
- Lazy load non-critical features
- Bundle size optimization

### SEO Performance
- Server-side rendering with Next.js
- Static generation for product pages
- Optimized meta tags and structured data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

### Planned Features
- [ ] Product comparison functionality
- [ ] Related products section
- [ ] Customer reviews and ratings
- [ ] Stock level indicators
- [ ] Price history tracking
- [ ] Wishlist functionality
- [ ] Social sharing buttons
- [ ] Print-friendly view

### Technical Improvements
- [ ] Implement GraphQL for data fetching
- [ ] Add TypeScript strict mode
- [ ] Performance monitoring
- [ ] A/B testing framework
- [ ] Analytics integration

## Example URLs

- Demo page: `/product-example`
- Dynamic product page: `/product/[id]`
- Products listing: `/products`

## Support

For questions or issues with the product page template:

1. Check this documentation
2. Review the sample implementation
3. Test with the example page
4. Contact the development team

---

*Last updated: September 3, 2025*
