'use client'
import { useEffect, useState } from 'react'
import { getSaleProducts } from '@/sanity/client'
import ProductCard from '@/components/sanity/ProductCard'

export default function SanitySaleProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getSaleProducts(8)
        setProducts(data)
      } catch (error) {
        console.error('Error fetching sale products:', error)
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
          <div className="text-center">Loading sale products...</div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return null // Don't show section if no sale products
  }

  return (
    <section className="flat-spacing bg-light-peach">
      <div className="container">
        <div className="sect-top center text-center wow fadeInUp">
          <h2 className="s-title font-2 text-capitalize">
            <span className="fst-italic">Special</span> Sale
          </h2>
          <p className="s-sub-title">
            Limited time offers on selected diamond jewelry pieces.
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