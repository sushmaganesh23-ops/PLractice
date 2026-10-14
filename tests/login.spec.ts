import {test, expect} from '@playwright/test';

test('Enrollment page should have correct title', async ({page}) => {
    await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');
    await page.getByTestId('name-input').fill('tester1');
    await page.getByTestId('email-input').fill('tester1@gmail.com');
    await page.getByTestId('track-select').selectOption('Playwright Core');
    await page.getByTestId('remember-checkbox').check();
    await page.getByTestId('mode-ui-radio').click();
    await page.getByTestId('submit-form-btn').click();
    await page.getByTestId('tester1 submitted (tester1@gmail.com) for Playwright Core.').isVisible();
})