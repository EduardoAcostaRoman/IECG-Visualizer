import Layout from '@/components/layout/Layout';
import MainNavigation from '@/components/layout/MainNavigation';

function MainPage() {
  return (
    <div>
      <MainNavigation />
      <Layout>
        <h1>IECG Visualizer</h1>
      </Layout>
    </div>
  );
}

export default MainPage;
