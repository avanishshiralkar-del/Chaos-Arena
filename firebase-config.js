export const firebaseConfig = {
  apiKey: 'AIzaSyDUgO00SvT6xGHmMIqWZ2-ljd04_fmCHoA',
  authDomain: 'chaos-arena-d83ed.firebaseapp.com',
  projectId: 'chaos-arena-d83ed',
  appId: '1:650262765906:web:e4775c266746426f7c1a8b',
  databaseURL: 'https://chaos-arena-d83ed-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Keep the shop renderer resilient if a page variant omits its balance element.
if (typeof document !== 'undefined' && !document.getElementById('shopTokenBalance')) {
  const balance = document.createElement('strong');
  balance.id = 'shopTokenBalance';
  balance.className = 'shop-wallet';
  balance.textContent = '0';
  document.querySelector('.shop-heading')?.append(balance);
}
