import { render } from '@testing-library/react';

import HomePage from '@/app/(home)/page';
import { LayoutSetup } from '@components/shared/config/layout/LayoutSetup';

it ('Should render home page', () => {
  const { container } = render(
    <LayoutSetup>
      <HomePage />
    </LayoutSetup>
  );

  expect(container).toBeTruthy();
});
