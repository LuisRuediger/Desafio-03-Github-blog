import { PostPreview } from './components/PostPreview'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <PostPreview />
    </>
  )
}
