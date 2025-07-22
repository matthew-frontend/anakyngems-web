import React, { useEffect } from 'react'
import { useFormValue, set, unset } from 'sanity'

export default function VariantTypeField(props) {
  const { onChange, value } = props
  const badgeType = useFormValue(['badgeType'])

  useEffect(() => {
    let variantType = ''
    
    // Debug logging
    console.log('VariantTypeField - Values:', { badgeType })
    
    if (badgeType === 'new') {
      variantType = 'text'
    } else if (badgeType === 'sale') {
      variantType = 'marquee'
    }
    
    console.log('VariantTypeField - Calculated:', { variantType })

    if (variantType !== value) {
      onChange(variantType ? set(variantType) : unset())
    }
  }, [badgeType, value, onChange])

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
        Variant Display Type (Auto-generated)
      </div>
      <div style={{ 
        fontSize: '16px', 
        fontWeight: '600',
        color: '#90caf9',
        padding: '4px 8px',
        backgroundColor: 'rgba(144, 202, 249, 0.1)',
        borderRadius: '4px',
        display: 'inline-block'
      }}>
        {value || 'No type selected'}
      </div>
      <div style={{ 
        fontSize: '12px', 
        color: '#b0b0b0', 
        marginTop: '4px' 
      }}>
        {badgeType === 'new' && 'Will use "text" display type'}
        {badgeType === 'sale' && 'Will use "marquee" display type'}
        {!badgeType && 'Select a badge type above to auto-generate'}
      </div>
    </div>
  )
}