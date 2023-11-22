import Loading from '../loading'
import PhotoList from './PhotoList'
import { Suspense } from 'react'

export default function Photos() {
  return (
    <main>
        <nav> 
          <h2>Photos</h2>
          <p><small>currently open photos</small></p>
        </nav>
        <Suspense fallback={<Loading />}>
          <PhotoList />
        </Suspense>
    </main>
  )
}
