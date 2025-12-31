const params = new URLSearchParams(window.location.search);

document.getElementById('productTitle').textContent = params.get('title');
document.getElementById('productPrice').textContent = params.get('price');
document.getElementById('productRating').textContent = params.get('rating');
document.getElementById('productImage').src = params.get('image');
