import styled from 'styled-components';
import { Title } from '../Title';
import { books } from './searchLastReleases'
import imageBook from '../../images/angular.svg'
import RecommendationCard from '../RecommendationCard';

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
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
            <Title color='#EB9B00' fontSize="36px">ÚLTIMOS LANÇAMENTOS</Title>
            <NewBooksContainer>
                { books.map( book => (
                    <div key={book.id}>
                        <img src={book.src} alt='bookImg'/>
                    </div>
                ) ) }
            </NewBooksContainer>            
            <RecommendationCard 
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                img={imageBook}
            />
        </LastReleasesContainer>
    );
}

export default LastReleases;