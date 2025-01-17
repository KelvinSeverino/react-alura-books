import styled from 'styled-components';
import Input from '../Input'
import { useEffect, useState } from 'react';
import { getBooks } from '../../services/books';
import { storeFavorite } from '../../services/favorites';


const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;    
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search(){
    const [booksSearched, setBooksSearched] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, [])

    async function fetchBooks() {
        const booksAPI = await getBooks()
        setBooks(booksAPI)
    }

    async function insertFavorite(id) {
        await storeFavorite(id)
        alert(`Livro de ${id} inserido!`)
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const textSearched = event.target.value;
                    const result = books.filter(book => book.name.includes(textSearched))
                    setBooksSearched(result)
                }}
            />
            { booksSearched.map(book => (
                <Result key={book.id} onClick={() => insertFavorite(book.id)}>
                    <img src={book.src} alt='bookImg'/>
                    <p>{book.name}</p>
                </Result>
            ) ) }
        </SearchContainer>
    );
}

export default Search;