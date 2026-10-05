
(function () {
  function q(root, selector) { return root.querySelector(selector); }
  function qa(root, selector) { return Array.prototype.slice.call(root.querySelectorAll(selector)); }
  document.addEventListener('click', function (event) {
    var favorite = event.target.closest('[data-gf-favorite]');
    if (favorite) {
      event.preventDefault();
      var key = favorite.getAttribute('data-gf-favorite');
      var saved = JSON.parse(localStorage.getItem('gf-favorites') || '[]');
      var index = saved.indexOf(key);
      if (index === -1) { saved.push(key); favorite.textContent = '♥'; favorite.classList.add('is-saved'); }
      else { saved.splice(index, 1); favorite.textContent = '♡'; favorite.classList.remove('is-saved'); }
      localStorage.setItem('gf-favorites', JSON.stringify(saved));
    }
  });
  qa(document, '[data-gf-builder]').forEach(function (builder) {
    var buttons = qa(builder, '[data-gf-product]');
    var productInput = q(builder, '[data-gf-product-id]');
    var image = q(builder, '[data-gf-preview-image]');
    var name = q(builder, '[data-gf-preview-name]');
    var price = q(builder, '[data-gf-preview-price]');
    var engraving = q(builder, '[data-gf-preview-engraving]');
    var engravingInput = q(builder, '[data-gf-engraving]');
    var wrap = q(builder, '[data-gf-wrap]');
    var wrapPrice = parseFloat(builder.getAttribute('data-gf-wrap-price') || '0');
    function choose(button) {
      buttons.forEach(function (b) { b.classList.toggle('is-active', b === button); });
      if (productInput) productInput.value = button.dataset.gfProduct;
      if (image) image.src = button.dataset.gfImage;
      if (name) name.textContent = button.dataset.gfName;
      if (price) price.textContent = button.dataset.gfPrice;
      builder.dataset.basePrice = button.dataset.gfRawPrice;
      updateTotal();
    }
    function updateTotal() {
      if (!price) return;
      var total = parseFloat(builder.dataset.basePrice || '0') + (wrap && wrap.checked ? wrapPrice : 0);
      price.textContent = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(total / 100);
    }
    buttons.forEach(function (button) { button.addEventListener('click', function () { choose(button); }); });
    if (engravingInput && engraving) engravingInput.addEventListener('input', function () { engraving.textContent = engravingInput.value || 'TU NOMBRE AQUÍ'; });
    if (wrap) wrap.addEventListener('change', updateTotal);
    if (buttons[0]) choose(buttons[0]);
  });
}());
