import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.effective-tech-interview.com');
});

test.describe('비로그인시 Home 화면에서 다음의 동작을 만족해야 한다.', () => {
  test('시작하기 버튼을 누를시 login 페이지로 이동해야 한다.', async ({ page }) => {
    const startButton = page.getByRole('button', { name: '시작하기' });

    await startButton.click();

    const modalConfirmButton = page.getByRole('button', { name: '확인' });

    await modalConfirmButton.click();

    await expect(page).toHaveURL(/.*login/);
  });

  test('프로필 아이콘을 누를시 login 페이지로 이동해야 한다.', async ({ page }) => {
    // FIXME: 명확한 locator로 변경
    const profileIcon = await page.locator('svg');

    await profileIcon.click();

    const modalConfirmButton = page.getByRole('button', { name: '확인' });

    await modalConfirmButton.click();

    await expect(page).toHaveURL(/.*login/);
  });
});
