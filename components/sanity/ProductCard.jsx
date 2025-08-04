import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/client'

export default function ProductCard({ product }) {
  if (!product) return null

  const discountPercentage = product.oldPrice && product.price 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  return (
    <div className="card-product">
      <div className="card-product-wrapper">
        <Link href={`/products/${product.slug?.current || product._id}`} className="product-img">
          <div className="img-style">
            {product.images && product.images[0] && (
              <Image
                className="lazyload img-product"
                src={urlFor(product.images[0]).width(480).height(480).url()}
                alt={product.title}
                width={480}
                height={480}
              />
            )}
            {product.images && product.images[1] && (
              <Image
                className="lazyload img-hover"
                src={urlFor(product.images[1]).width(480).height(480).url()}
                alt={product.title}
                width={480}
                height={480}
              />
            )}
          </div>
          {(product.calculatedBadge || product.badge) && (
            <div className="list-product-btn absolute-2">
              <div className={`box-style-1 ${product.badgeType === 'sale' ? 'sale' : ''}`}>
                <span className="btn-style-1">
                  {product.calculatedBadge || product.badge}
                </span>
              </div>
            </div>
          )}
        </Link>
        
        <div className="card-product-info">
          <Link href={`/products/${product.slug?.current || product._id}`} className="title link">
            {product.title}
          </Link>
          <span className="price">
            ฿{product.price?.toLocaleString('en-US')}
            {product.oldPrice && (
              <span className="compare-at-price">
                ฿{product.oldPrice.toLocaleString('en-US')}
              </span>
            )}
          </span>
          {product.category && (
            <div className="product-category">
              <span className="category-name">{product.category.title}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}