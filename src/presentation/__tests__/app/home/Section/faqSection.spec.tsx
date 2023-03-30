import { render } from '@testing-library/react';
import HomePage from '@/app/(home)/page';
import { LayoutSetup } from '@components/shared/config/layout/LayoutSetup';

describe('FAQ Section on the Home Page', () => {
  it ('Should rendering the frequently asked question', () => {
    const { getAllByRole } = render(
      <LayoutSetup>
        <HomePage />
      </LayoutSetup>
    );

    const allQuestions = getAllByRole('accordion-item');

    expect(allQuestions).toBeTruthy();
  });
});
