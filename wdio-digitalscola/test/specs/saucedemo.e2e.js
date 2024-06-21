describe('SauceDemo E2E', () => {
    it('should login with valid credentials and add item to cart', async () => {
        // Buka halaman login
        await browser.url('https://www.saucedemo.com/');

        // Masukkan username dan password
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');

        // Klik tombol login
        await $('#login-button').click();

        // Validasi user berada di dashboard (cek URL atau elemen spesifik)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect($('.title')).toHaveText('Products');

        // Tambahkan item ke cart
        await $('#add-to-cart-sauce-labs-backpack').click();

        // Validasi item sukses ditambahkan ke cart (cek ikon cart)
        const cartBadge = $('.shopping_cart_badge');
        await expect(cartBadge).toBeDisplayed();
        await expect(cartBadge).toHaveText('1');
    });
});
