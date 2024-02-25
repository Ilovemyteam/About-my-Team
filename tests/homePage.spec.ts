import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("/");
    await expect(
        page.getByRole("heading", { name: "Fonts (for QA)" })
    ).toBeVisible();
    await expect(
        page.getByRole("heading", { name: "TEST JEST" })
    ).toBeVisible();
});