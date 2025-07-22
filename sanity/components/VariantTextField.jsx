import React, { useEffect } from 'react'
import { useFormValue, set, unset } from 'sanity'

export default function VariantTextField(props) {
  const { onChange, value } = props
  const badgeType = useFormValue(['badgeType'])
  const price = useFormValue(['price'])
  const oldPrice = useFormValue(['oldPrice'])

  useEffect(() => {
    let variantText = ''
    
    // Debug logging
    console.log('VariantTextField - Values:', { badgeType, price, oldPrice })
    
    if (badgeType === 'new') {
      variantText = 'New arrival'
    } else if (badgeType === 'sale' && price && oldPrice && oldPrice > price) {
      const discount = Math.round(((oldPrice - price) / oldPrice) * 100)
      variantText = `${discount}% OFF, Selling fast`
      console.log('VariantTextField - Calculated:', { discount, variantText })
    }

    if (variantText !== value) {
      onChange(variantText ? set(variantText) : unset())
    }
  }, [badgeType, price, oldPrice, value, onChange])

  return (
    <div style={{ 
      padding: '12px', 
      backgroundColor: '#2d2d2d', 
      color: '#ffffff',
      border: '1px solid #404040',
      borderRadius: '4px',
      marginTop: '8px'
    }}>
      <div style={{ 
        fontSize: '14px', 
        fontWeight: '500', 
        color: '#e0e0e0',
        marginBottom: '4px' 
      }}>
        Variant Text (Auto-generated)
      </div>
      <div style={{ 
        fontSize: '16px', 
        fontWeight: '600',
        color: badgeType === 'sale' ? '#ff9800' : '#4caf50',
        padding: '4px 8px',
        backgroundColor: badgeType === 'sale' ? 'rgba(255, 152, 0, 0.1)' : 'rgba(76, 175, 80, 0.1)',
        borderRadius: '4px',
        display: 'inline-block'
      }}>
        {value || 'No variant text'}
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#b0b0b0', 
        marginTop: '4px' 
      }}>
        {badgeType === 'new' && 'Will display "New arrival"'}
        {badgeType === 'sale' && (!price || !oldPrice) && 
          'Please set both price and old price for sale variant text'}
        {badgeType === 'sale' && price && oldPrice && 
          'Will display discount percentage with "Selling fast"'}
        {!badgeType && 'Select a badge type above to auto-generate'}
      </div>
    </div>
  )
}