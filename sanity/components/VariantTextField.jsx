import React, { useEffect, useCallback } from 'react'
import { useFormValue, set, unset, useDocumentOperation } from 'sanity'

export default function VariantTextField(props) {
  const { onChange, value, readOnly } = props
  const badgeType = useFormValue(['badgeType'])
  const price = useFormValue(['price'])
  const oldPrice = useFormValue(['oldPrice'])
  
  // Get document operations to check if we can modify
  const { publish } = useDocumentOperation('Product', 'draft')
  const isPublishable = publish && !publish.disabled

  const updateVariantText = useCallback(() => {
    // Don't update if read-only, no onChange, or if document is not in draft state
    if (readOnly || !onChange || !isPublishable) return
    
    let variantText = ''
    
    if (badgeType === 'new') {
      variantText = 'New arrival'
    } else if (badgeType === 'sale' && price && oldPrice && oldPrice > price) {
      const discount = Math.round(((oldPrice - price) / oldPrice) * 100)
      variantText = `${discount}% OFF, Selling fast`
    }

    if (variantText !== value) {
      try {
        onChange(variantText ? set(variantText) : unset())
      } catch (error) {
        // Cannot update field
      }
    }
  }, [badgeType, price, oldPrice, value, onChange, readOnly, isPublishable])

  useEffect(() => {
    // Add debouncing to prevent too frequent updates
    const timer = setTimeout(updateVariantText, 500)
    return () => clearTimeout(timer)
  }, [badgeType, price, oldPrice])

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