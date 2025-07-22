export function showNotification(ref,type) {
    if (!ref.current) return;
    ref.current.style.display = 'flex';

   if(type === 'create-post-success'){
     setTimeout(() => {
      ref.current.classList.add('create-post-success-notification-bubble-display');
    }, 100);

    setTimeout(() => {
      hideNotification(ref,'create-post-success');
    }, 4000);
   }
  }

export function hideNotification(ref,type) {
    if (!ref.current) return;
    if(type === 'create-post-success'){
    ref.current.classList.remove('create-post-success-notification-bubble-display');
    setTimeout(() => { 
      if (ref.current) {
        ref.current.style.display = 'none';
      }
    }, 1000);
    }
    
  }
