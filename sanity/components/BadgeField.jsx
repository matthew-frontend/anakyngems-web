import React, { useEffect, useCallback } from 'react'
import { useFormValue, set, unset, useDocumentOperation } from 'sanity'

export default function BadgeField(props) {
  const { onChange, value, readOnly } = props
  const badgeType = useFormValue(['badgeType'])
  const price = useFormValue(['price'])
  const oldPrice = useFormValue(['oldPrice'])
  
  // Get document operations to check if we can modify
  const { publish } = useDocumentOperation('Product', 'draft')
  const isPublishable = publish && !publish.disabled

  const updateBadge = useCallback(() => {
    // Don't update if read-only, no onChange, or if document is not in draft state
    if (readOnly || !onChange || !isPublishable) return
    
    let badgeText = ''
    
    if (badgeType === 'new') {
      badgeText = 'NEW IN'
    } else if (badgeType === 'sale' && price && oldPrice && oldPrice > price) {
      const discount = Math.round(((oldPrice - price) / oldPrice) * 100)
      badgeText = `${discount}% OFF`
    } else if (!badgeType || badgeType === null) {
      badgeText = ''
    }

    // Only update if the value actually changed
    if (badgeText !== value) {
      try {
        onChange(badgeText ? set(badgeText) : unset())
      } catch (error) {
        console.log('BadgeField - Cannot update:', error.message)
      }
    }
  }, [badgeType, price, oldPrice, value, onChange, readOnly, isPublishable])

  useEffect(() => {
    // Add small delay to prevent immediate updates after publish
    const timer = setTimeout(updateBadge, 100)
    return () => clearTimeout(timer)
  }, [updateBadge])

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
        Badge Text (Auto-generated)
      </div>
      <div style={{ 
        fontSize: '16px', 
        fontWeight: '600',
        color: badgeType === 'sale' ? '#90caf9' : '#4caf50',
        padding: '4px 8px',
        backgroundColor: badgeType === 'sale' ? 'rgba(144, 202, 249, 0.1)' : 'rgba(76, 175, 80, 0.1)',
        borderRadius: '4px',
        display: 'inline-block'
      }}>
        {value || 'No badge selected'}
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#b0b0b0', 
        marginTop: '4px' 
      }}>
        {badgeType === 'sale' && (!price || !oldPrice) && 
          'Please set both price and old price for sale badge'}
        {badgeType === 'new' && 'Will display "NEW IN"'}
        {!badgeType && 'Select a badge type above'}
      </div>
    </div>
  )
}