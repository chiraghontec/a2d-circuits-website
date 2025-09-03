import React from 'react';
import { useRouter } from 'next/router';
import ProductPageTemplate from '@/components/ProductPageTemplate';
import { sampleProducts } from '@/data/sampleProducts';

const ProductDetailPage = () => {
  const router = useRouter();
  
  // For demo purposes, we'll use the first sample product
  // In a real application, you would fetch the product based on router.query.id
  const product = sampleProducts[0];

  const handleInquiry = () => {
    // Navigate to contact page with product information
    router.push({
      pathname: '/contact',
      query: {
        product: product.name,
        model: product.model,
        partNumber: product.partNumber,
      },
    });
  };

  const handleAddToQuote = () => {
    // In a real application, this would add the product to a quote/cart system
    alert(`${product.name} added to quote! This would normally integrate with your quote management system.`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push('/products')}
            className="btn btn-primary"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProductPageTemplate
      product={product}
      onInquiry={handleInquiry}
      onAddToQuote={handleAddToQuote}
    />
  );
};

export default ProductDetailPage;
