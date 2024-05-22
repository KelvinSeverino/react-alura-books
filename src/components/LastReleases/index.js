import styled from 'styled-components';
import { books } from './searchLastReleases'

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases(){
    return (
        <LastReleasesContainer>
            <Title>ULTIMOS LANCAMENTOS</Title>
            <NewBooksContainer>
                { books.map( book => (
                    <div key={book.id}>
                        <img src={book.src} alt='bookImg'/>
                    </div>
                ) ) }
            </NewBooksContainer>
        </LastReleasesContainer>
    );
}

export default LastReleases;