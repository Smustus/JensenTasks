import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchMovie from "./SearchMovie";

/*
Som användare vill jag kunna söka på en film för att kunna se vad som finns.

Som användare vill jag kunna få information om min sökning inte gav några träffar så jag vet om jag ska söka på något nytt istället.

Som användare vill jag kunna se sökresultatet på sidan så jag kan se vad resultatet av sökningen blev.

Som användare vill jag kunna styra vad som ska kunna visas så att jag enbart ser det som jag anser är relevant.
*/

describe('SearchMovie', () => {
  beforeEach(() => {
    render(<SearchMovie />);
  });

  test('Use search input to search for a movie', async () => {
    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, {target: {value: 'charlie brown'}});
    fireEvent.click(screen.getByRole('button'));
    
    await waitFor(() => {
      const movies = screen.getAllByRole('movieCard');
      movies.forEach(product => {
        expect(product).toHaveTextContent(/charlie brown/i)
      });  
      expect(screen.queryByText(/Inga filmer hittades/)).not.toBeInTheDocument();  
    });
  });
});