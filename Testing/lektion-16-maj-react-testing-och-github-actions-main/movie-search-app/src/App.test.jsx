import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import App from "./App";

/*
Som användare vill jag kunna söka på en film för att kunna se vad som finns.

Som användare vill jag kunna få information om min sökning inte gav några träffar så jag vet om jag ska söka på något nytt istället.

Som användare vill jag kunna se sökresultatet på sidan så jag kan se vad resultatet av sökningen blev.

Som användare vill jag kunna styra vad som ska kunna visas så att jag enbart ser det som jag anser är relevant.
*/

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  });

  const performSearch = async (query) => {
    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, { target: { value: query } });
    fireEvent.click(screen.getByRole('button'));
  };

  test('Use search input to search for a movie', async () => {
    
    await performSearch('charlie brown');
    
    await waitFor(() => {
      const movies = screen.getAllByRole('movieCard');
      movies.forEach(product => {
        expect(product).toHaveTextContent(/charlie brown/i)
      });  
      expect(screen.queryByText(/Inga filmer hittades/)).not.toBeInTheDocument();  
    });
  });

  test('In case of no search hits', async () => {
    
    await performSearch('bin ladens greatest hits');
    
    await waitFor(() => {
      expect(screen.getByText(/Inga filmer hittades/)).toBeInTheDocument();
    });
  });

  test('Filter by clicking the checkbox', async () => {
    
    await performSearch('charlie brown');

    const checkboxInput = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxInput[1]);
    expect(checkboxInput[1].checked).toEqual(true);
  
    await waitFor(() => {
      screen.getAllByRole('movieCard');
    });
    expect(screen.queryByText('1965')).not.toBeInTheDocument();

    fireEvent.click(checkboxInput[1]);
    expect(checkboxInput[1].checked).toEqual(false);
   
    await waitFor(() => {
      const movies = screen.getAllByRole('movieCard');
      expect(within(movies[1]).getByText('1966'));
    });
   
  });

});