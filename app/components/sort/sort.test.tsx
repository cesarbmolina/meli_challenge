import { render, screen, fireEvent } from '@testing-library/react'
import Sort from './sort';

describe('Home', () => {
    it('Verificando los textos que muestra el filtro', async () => {
        await render(<Sort />)

        const checker = screen.getByText(/Ordenar por/i);
        expect(checker).toBeInTheDocument();
    })

    it("Revisando si el area es clickeable", () => {
        const { getByText } = render(<Sort />);
        const textContentSelected = getByText("Más relevantes");

        fireEvent.click(textContentSelected);

        expect(textContentSelected).toHaveClass("textSelected");
    });

    test("Verificando el componente de fintro por ordenamiento aperture correctamente y muestra las opciones", () => {
        const { getByText } = render(<Sort />);
        const contentSelectItem = getByText("Más relevantes");

        fireEvent.click(contentSelectItem);

        expect(getByText("Menor precio")).toBeInTheDocument();
        expect(getByText("Mayor precio")).toBeInTheDocument();
    });

})