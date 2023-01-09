import HeroXperiences from '../components/hero/xperience/HeroXperiences';
import XperiencesTour from '../components/main/tour_xperiences/XperiencesTour';
import SearchingXperiences from '../components/search/SearchingXperiences';






function Xperiences() {
  return (
    <>
      <HeroXperiences />
      <SearchingXperiences />
      <XperiencesTour xp />
    </>
  )
}

export default Xperiences