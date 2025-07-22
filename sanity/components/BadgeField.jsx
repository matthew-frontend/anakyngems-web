import React, { useEffect } from 'react'
import { useFormValue, set, unset } from 'sanity'

export default function BadgeField(props) {
  const { onChange, value } = props
  const badgeType = useFormValue(['badgeType'])
  const price = useFormValue(['price'])
  const oldPrice = useFormValue(['oldPrice'])

  useEffect(() => {
    let badgeText = ''
    
    // Debug logging
    console.log('BadgeField - Values:', { badgeType, price, oldPrice })
    
    if (badgeType === 'new') {
      badgeText = 'NEW IN'
    } else if (badgeType === 'sale' && price && oldPrice && oldPrice > price) {
      const discount = Math.round(((oldPrice - price) / oldPrice) * 100)
      badgeText = `${discount}% OFF`
      console.log('BadgeField - Calculated:', { discount, badgeText })
    } else if (!badgeType || badgeType === null) {
      badgeText = ''
    }

    if (badgeText !== value) {
      onChange(badgeText ? set(badgeText) : unset())
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