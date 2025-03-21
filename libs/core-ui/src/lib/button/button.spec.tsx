import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('should render message', () => {
    render(<Button />);
    const messageElement = screen.getByText('button');
    expect(messageElement).not.toBeNull();
  });
});
