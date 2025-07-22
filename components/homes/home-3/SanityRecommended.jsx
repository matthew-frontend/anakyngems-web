'use client'
import { useEffect, useState } from 'react'
import { getRecommendedProducts } from '@/sanity/client'
import ProductCard from '@/components/sanity/ProductCard'

export default function SanityRecommended() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getRecommendedProducts(6)
        setProducts(data)
      } catch (error) {
        console.error('Error fetching recommended products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="flat-spacing">
        <div className="container">
          <div className="text-center">Loading recommended products...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-top center text-center wow fadeInUp">
          <h2 className="s-title font-2 text-capitalize">
            <span className="fst-italic">Recommended</span> For You
          </h2>
          <p className="s-sub-title">
            Hand-picked selections based on quality and craftsmanship.
          </p>
        </div>
        
        <div className="wrap-carousel wrap-mobile">
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-xl-4 col-lg-4 col-md-6 col-12">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}