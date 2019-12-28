let url;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    url = process.env.REACT_APP_DEV_URL
  } else {
    url = process.env.REACT_APP_PROD_LL;
  }

export default {
    
}