
module.exports = {
  theme: {
        
    screens: {
      'xxl': {'max': '1199px'},
      // => @media (max-width: 1279px) { ... }
      'xlg': {'max': '991px'},
      // => @media (max-width: 1023px) { ... }
      'xmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'xsm': {'max': '580px'},
      // => @media (max-width: 639px) { ... }
    },
    
    fontFamily: {
      'inter': ['inter', 'Arial', 'sans-serif'],
  },
  
    extend: {
      inset: {
        '0': 0,
         auto: 'auto',
         '50': '50%',
      },

      colors: {
        blue: {
          'primary': '#2490EF'
        },
        white: {
          'primary':'',
          'secondary':'',
        },
        gray:{
          '100': '#F0F0F0',
          '200':'#EBEEF0',
          '300':'#F4F5F6',
          '400': '#A6B1B9',
        },
      },
      height:{
        '640':'640px',
            },
      width:{
        '18.75': '18.75rem',
        '1322':'1322px',
        '1440':'1440px',
        '1053':'1053px',
        '1.625':'1.625rem',
        '1.75':'1.75rem',
      },
      margin: {
        '2.375': '2.375rem',
        '1.125':'1.125rem',
       },
       padding: {
        '15':'15px',
       },
       boxShadow: {
        xsm: '0px 1px 2px rgba(0, 0, 0, 0.13), 0px 0px 0.5px rgba(0, 0, 0, 0.75)',
        xmd: '0px 1px 2px rgba(0, 0, 0, 0.13), 0px 0px 0.5px rgba(0, 0, 0, 0.75)',
      },
    }
  },
  variants: {},
  plugins: [],
}