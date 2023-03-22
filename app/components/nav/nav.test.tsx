import { render, screen, fireEvent } from '@testing-library/react'
import Nav from './nav';

describe('Home', () => {
    it('Renderizando el conponente nav', () => {
        render(<Nav onChange={(e: string) => { }} />)
    })

    it("renders the logo", () => {
        const { getByAltText } = render(<Nav onChange={() => { }} />);
        const logo = getByAltText("ML");
        expect(logo).toBeInTheDocument();

        const imgLogo = "/_next/image?url=%2Flogo_ml.png&w=128&q=75"
        expect(logo.getAttribute("src")).toBe(imgLogo);
    });

})