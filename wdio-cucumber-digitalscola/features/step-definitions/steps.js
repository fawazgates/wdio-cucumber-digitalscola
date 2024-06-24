import { Given, When, Then } from '@cucumber/cucumber';

Given('I am on the login page', async () => {
    await browser.url('https://www.saucedemo.com/');
});

When('I login with valid credentials', async () => {
  await $('#user-name').setValue('standard_user');
  await $('#password').setValue('secret_sauce');
  await $('#login-button').click();
});

Then('I should see the dashboard', async () => {
  await expect(browser).toHaveUrlContaining('inventory.html');
  await browser.pause(2000);
});

Given('I am logged in', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();
    await expect(browser).toHaveUrlContaining('inventory.html');
  });
  
  When('I add an item to the cart', async () => {
    await $('.inventory_item:first-child .btn_primary').click();
    await browser.pause(2000); // Jeda selama 1 detik
  });
  
  Then('the item should be added to the cart', async () => {
    const cartBadge = await $('.shopping_cart_badge');
    await expect(cartBadge).toBeDisplayed();
    await expect(cartBadge).toHaveText('1');
  });

