export const getStyle = (key, value) => {
    switch (key) {
      case 'tags':
        return {
          width: '51px',
          height: '13px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '0.813rem',
          lineHeight: '13px',
          color: '#EB0028',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          paddingBottom: '16px'
        };
      case 'title':
        return {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '1.5rem',
          lineHeight: '30px',
          color: '#000000',
          flex: 'none',
          order: 1,
          flexGrow: 0,
          paddingBottom: '16px'
        };
      case 'autor':
        return {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '0.75rem',
          lineHeight: '12px',
          color: '#000000',
          marginRight: '8px',
          display:'inline-block',
          paddingBottom: '16px' 
        };
      case 'date':
      case 'views':
        return {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '0.75rem',
          lineHeight: '12px',
          color: '#9B9B9B',
          marginRight: '8px',
          display:'inline-block',
          paddingBottom: '16px' 
        };
      case 'text':
        return {
          height: '80px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '0.875rem',
          lineHeight: '20px',
          color: '#929292',
          flex: 'none',
          order: 2,
          flexGrow: 0,
          
        };
      default:
        return {};
    }
  };