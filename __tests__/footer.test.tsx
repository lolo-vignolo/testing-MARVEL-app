import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

describe('Home', () => {
  it('Footer in the document', () => {
    render(<Footer />);

    const heading = screen.getByText('Kubide & Marvel');

    expect(heading).toBeInTheDocument();
  });
});
