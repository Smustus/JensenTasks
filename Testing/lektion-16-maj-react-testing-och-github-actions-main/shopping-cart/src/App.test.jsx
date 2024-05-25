import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

/*
Som användare vill jag kunna se en lista av produkter så att jag kan göra ett informerat val

Som användare vill jag kunna spara produkter i en varukorg så att jag kan köpa mer en 1 produkt åt gången

Som en användare vill jag kunna söka bland produkter så att det blir enklare att hitta det jag vill

Som en användare vill jag kunna se hur många produkter jag har i min varukorg så att jag vet hur många jag lagt till
*/

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Check if products are fetched', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('product').length).toBeGreaterThan(0);
     });    
  });

  it('Check if product is added to cart', async () => {
    await waitFor(() => {
      expect(screen.getAllByRole('product').length).toBeGreaterThan(0);
     }); 

     const addToCartBtn = screen.getAllByRole('button')
     fireEvent.click(addToCartBtn[0]);

     const cartAmount = screen.getByRole('cartAmount');
     expect(cartAmount.textContent).toBe('1');
  });

  it('Check if the seach input field is filtering', async () => {

    await waitFor(() => {
      expect(screen.getAllByRole('product').length).toBeGreaterThan(0);
    }); 
    
    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, {
      target: { value: 'Microsoft' },
    });
    expect(searchInput).toHaveValue('Microsoft')
    
    await waitFor(() => {
      let products = screen.getAllByRole('product');
      expect(products.length).toBe(1);
    }); 
    
  });

});
