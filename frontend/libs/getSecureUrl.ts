export const getSecureImageUrl = (url?: string) => {
  if (!url) return null;
  
  // 이미 https면 그대로 반환
  if (url.startsWith('https://')) {
    return url;
  }
  
  // http를 https로 변경
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://');
  }
  
  // 프로토콜이 없으면 https 추가
  return `https://${url}`;
};