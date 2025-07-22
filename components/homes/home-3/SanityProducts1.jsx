'use client'
import { useEffect, useState } from 'react'
import { getFeaturedProducts } from '@/sanity/client'
import ProductCard from '@/components/sanity/ProductCard'

export default function SanityProducts1() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedProducts(8)
        setProducts(data)
      } catch (error) {
        console.error('Error fetching featured products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="flat-spacing pt-0">
        <div className="container">
          <div className="text-center">Loading featured products...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="sect-top center text-center wow fadeInUp">
          <h2 className="s-title font-2 text-capitalize">
            <span className="fst-italic">Featured</span> Products
          </h2>
          <p className="s-sub-title">
            Discover our latest collection of premium lab grown diamond jewelry.
          </p>
        </div>
        
        <div className="wrap-carousel wrap-mobile">
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 col-12">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}