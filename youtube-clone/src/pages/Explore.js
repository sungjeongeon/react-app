import Layout from '../components/shared/Layout';
import ContentsLayout from '../components/shared/ContentsLayout';
import youtubeData from '../data/youtubeData.json';
import ExploreCard from '../components/explore/ExploreCard';

function Explore() {
    return (
        <Layout activeMenu="explore">
            <ContentsLayout>
                {youtubeData['data'].map(function(data,index) {
                    return <ExploreCard key={`explore-card-${index}`} data={data} />;
                })}
            </ContentsLayout>
        </Layout>
    );
}

export default Explore;